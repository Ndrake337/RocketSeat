import { error } from "console";
import { FastifyInstance } from "fastify";
import { z } from "zod";
import { checkSessionIdExists } from "../middlewares/check-session-id-exists";
import { knex } from "../database";
import { randomUUID } from "crypto";

export async function mealsRoutes(app: FastifyInstance) {
  app.post(
    "/",
    { preHandler: [checkSessionIdExists] },
    async (request, reply) => {
      const createMealSchema = z.object({
        name: z.string(),
        description: z.string(),
        mealTime: z.string(),
        isOnDiet: z.boolean(),
      });

      const { sessionId } = request.cookies;

      const { name, description, mealTime, isOnDiet } = createMealSchema.parse(
        request.body
      );

      const user = await knex("tb_users")
        .select("*")
        .where("session_Id", sessionId)
        .first();

      if (!user) {
        return reply.status(401).send({
          error: "Unauthorized",
        });
      }

      await knex("tb_meals").insert({
        id: randomUUID(),
        name,
        description,
        mealTime,
        isOnDiet,
        userId: user.id,
      });

      return reply.status(201).send();
    }
  );

  app.get(
    "/",
    { preHandler: [checkSessionIdExists] },
    async (request, reply) => {
      const { sessionId } = request.cookies;

      const user = await knex("tb_users")
        .select("*")
        .where("session_Id", sessionId)
        .first();
      if (!user) {
        return reply.status(401).send({
          error: "Unauthorized",
        });
      }
      const meals = await knex("tb_meals").where("userId", user.id).select("*");

      return { meals };
    }
  );
}

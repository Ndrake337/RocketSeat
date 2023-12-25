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

  app.get(
    "/:id",
    { preHandler: [checkSessionIdExists] },
    async (request, reply) => {
      const paramsScheema = z.object({
        id: z.string().uuid(),
      });

      const { id } = paramsScheema.parse(request.params);
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

      const meal = await knex("tb_meals")
        .where("userId", user.id)
        .andWhere("id", id)
        .select("*")
        .first();

      return { meal };
    }
  );

  app.delete(
    "/:id",
    { preHandler: [checkSessionIdExists] },
    async (request, reply) => {
      const paramsScheema = z.object({
        id: z.string().uuid(),
      });

      const { id } = paramsScheema.parse(request.params);

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

      await knex("tb_meals")
        .where("id", id)
        .andWhere("userId", user.id)
        .delete();
    }
  );
  
  app.put(
    "/:mealId",
    { preHandler: [checkSessionIdExists] },
    async (request, reply) => {
      const paramsSchema = z.object({ mealId: z.string().uuid() });

      const { mealId } = paramsSchema.parse(request.params);

      const updateMealBodySchema = z.object({
        name: z.string(),
        description: z.string(),
        isOnDiet: z.boolean(),
        date: z.coerce.date(),
      });

      const { name, description, isOnDiet, date } = updateMealBodySchema.parse(
        request.body
      );

      const meal = await knex("meals").where({ id: mealId }).first();

      if (!meal) {
        return reply.status(404).send({ error: "Meal not found" });
      }

      await knex("meals").where({ id: mealId }).update({
        name,
        description,
        is_on_diet: isOnDiet,
        date: date.getTime(),
      });

      return reply.status(204).send();
    }
  );

  app.get(
    "/metrics",
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

      const totalMealsOnDiet = await knex("tb_meals")
        .where({ userId: user.id, isOnDiet: true })
        .count("id", { as: "total" })
        .first();

      const totalMealsOffDiet = await knex("tb_meals")
        .where({ userId: user.id, isOnDiet: false })
        .count("id", { as: "total" })
        .first();

      const totalMeals = await knex("tb_meals")
        .where({ userId: user.id })
        .orderBy("mealTime", "desc");
      let { bestOnDietSequence } = totalMeals.reduce(
        (acc, meal) => {
          if (meal.isOnDiet === 1) {
            acc.currentSequence += 1;
          } else {
            acc.currentSequence = 0;
          }

          if (acc.currentSequence > acc.bestOnDietSequence) {
            acc.bestOnDietSequence = acc.currentSequence;
          }

          return acc;
        },
        { bestOnDietSequence: 0, currentSequence: 0 }
      );

      return reply.send({
        totalMeals: totalMeals.length,
        totalMealsOnDiet: totalMealsOnDiet?.total,
        totalMealsOffDiet: totalMealsOffDiet?.total,
        bestOnDietSequence,
      });
    }
  );
}

import { randomUUID } from "crypto";
import { FastifyInstance } from "fastify";
import { z } from "zod";
import { knex } from "../database";

export async function usersRoute(app: FastifyInstance) {
  app.post("/", async (request, reply) => {
    const createUserSchema = z.object({
      name: z.string(),
    });
    console.log("Não Passou");

    let sessionId = request.cookies.sessionId;
    console.log("passou");

    if (!sessionId) {
      sessionId = randomUUID();

      reply.cookie("sessionId", sessionId, {
        path: "/",
        maxAge: 1000 * 60 * 60 * 24 * 7, //7Days
      });
    }

    const { name } = createUserSchema.parse(request.body);

    await knex("tb_users").insert({
      id: randomUUID(),
      name,
      session_id: sessionId,
    });

    return reply.status(201).send();
  });

  app.get("/", async (request, reply) => {
    return "hello World - Users Route";
  });
}

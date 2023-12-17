import { FastifyInstance } from "fastify";

export async function usersRoute(app: FastifyInstance) {
  app.get("/", async (request, reply) => {
    return "hello World - Users Route";
  });
}

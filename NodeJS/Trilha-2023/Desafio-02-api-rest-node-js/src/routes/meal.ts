import { FastifyInstance } from "fastify";

export async function mealsRoute(app: FastifyInstance) {
  app.get("/", async () => {
    return "Hello World";
  });
}

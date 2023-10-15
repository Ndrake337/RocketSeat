import fastify from "fastify";
import { mealsRoute } from "./routes/meal";

export const app = fastify();

app.register(mealsRoute, {
  prefix: "meals",
});

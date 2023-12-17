import { fastify } from "fastify";
import { mealsRoutes } from "./routes/meals";
import { usersRoute } from "./routes/users";

export const app = fastify();

app.register(mealsRoutes, {
  prefix: "meals",
});

app.register(usersRoute, {
  prefix: "users",
});

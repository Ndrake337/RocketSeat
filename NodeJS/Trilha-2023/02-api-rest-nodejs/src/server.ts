import fastify from "fastify";
import { knex } from "./database";
import crypto from "node:crypto";
import { env } from "./env";

const app = fastify();

// GET, POST, PUT PATCH, DELETE

app.get("/hello", async () => {
  const transaction = knex("transactions")
    .insert({
      id: crypto.randomUUID(),
      title: "Transação de teste",
      amount: 1000,
    })
    .returning("*");

  return transaction;
});

app.listen({ port: env.PORT }).then(() => {
  console.log("HTTP Server Running");
});

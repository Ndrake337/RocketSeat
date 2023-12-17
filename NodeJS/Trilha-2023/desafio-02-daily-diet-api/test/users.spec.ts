import { afterAll, beforeAll, beforeEach, describe, it } from "vitest";
import { app } from "../src/app";
import { execSync } from "node:child_process";
import request from "supertest";
describe("Users route", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(() => {
    execSync("npm run knex migrate:rollback --all");
    execSync("npm run knex migrate:latest");
  });

  it("should be able to create a user", async () => {
    const response = await request(app.server)
      .post("/users")
      .send({
        name: "Usuario Teste",
      })
      .expect(201);
  });
});

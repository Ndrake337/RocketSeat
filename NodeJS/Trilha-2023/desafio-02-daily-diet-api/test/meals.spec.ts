import { afterAll, beforeAll, beforeEach, describe, it } from "vitest";
import { app } from "../src/app";
import { execSync } from "node:child_process";
import request from "supertest";

describe("Meals Route Test Group", () => {
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

  it("should be able to create a meal", async () => {
    const createUserResponse = await request(app.server)
      .post("/users")
      .send({ name: "Usuário teste" })
      .expect(201);

    const cookies = createUserResponse.get("Set-Cookie");

    await request(app.server)
      .post("/meals")
      .set("Cookie", cookies)
      .send({
        name: "Test Meal",
        description: "This is a meal bean send to test the meals route",
        mealTime: "2023-12-11T14:20:35Z",
        isOnDiet: true,
      })
      .expect(201);
  });
});

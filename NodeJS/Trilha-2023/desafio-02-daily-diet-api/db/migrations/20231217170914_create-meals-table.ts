import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("tb_meals", (table) => {
    table.uuid("id").primary();
    table.text("name").notNullable();
    table.text("description").notNullable();
    table.timestamp("mealTime").notNullable();
    table.boolean("isOnDiet").notNullable();
    table.uuid("userId").references("id").inTable("Users").notNullable();
    table.timestamp("createdAt").defaultTo(knex.fn.now()).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("tb_meals");
}

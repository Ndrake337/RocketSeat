import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("tb_users", (table) => {
    table.uuid("id").primary();
    table.uuid("session_id").notNullable();
    table.text("name");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("tb_users");
}

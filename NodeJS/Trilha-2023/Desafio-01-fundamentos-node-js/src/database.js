import fs from "node:fs/promises";

const databasePath = new URL("../db.json", import.meta.url);

export class Database {
  #database = {};

  constructor() {
    fs.readFile(databasePath, "utf-8")
      .then((data) => {
        this.#database = JSON.parse(data);
      })
      .catch(() => {
        this.#persist();
      });
  }
  #persist() {
    fs.writeFile("db.json", JSON.stringify(this.#database));
  }

  select(table, search) {
    let data = this.#database[table] ?? [];

    if (search) {
      data = data.filter((row) => {
        return Object.entries(search).some(([key, value]) => {
          return row[key].includes(value);
        });
      });
    }
    return data;
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data];
    }

    this.#persist();

    return data;
  }

  delete(table, id) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id);
    if (rowIndex > -1) {
      this.#database[table].splice(rowIndex, 1);
      this.#persist();
    }
  }

  update(table, id, data) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id);
    const { title, description } = data;
    if (rowIndex > -1) {
      title
        ? (this.#database[table][rowIndex].title = title)
        : this.#database[table][rowIndex].title;
      description
        ? (this.#database[table][rowIndex].description = description)
        : this.#database[table][rowIndex].description;
      this.#database[table][rowIndex].updated_at = new Date();
      this.#persist();
    }
  }
  completeTask(id) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id);
    if (rowIndex > -1) {
      this.#database[table][rowIndex].completed_at = True;
      this.#database[table][rowIndex].updated_at = new Date();
      this.#persist();
    }
  }
  findById(id) {
    return this.#database[table].findIndex((row) => row.id === id);
  }
}

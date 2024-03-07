const db = require("../config/database");

class Recipe {
  static async create(title, description, ingredients, instructions) {
    const sql = `INSERT INTO Recipe (title, description, ingredients, instructions) VALUES ('${title}', '${description}', '${ingredients}', '${instructions}')`;
    await db.run(sql, [
      title,
      description,
      ingredients.join(", "),
      instructions,
    ]);
  }

  static async getAll() {
    const sql = "SELECT * FROM Recipe";
    return await db.all(sql);
  }

  static async getById(id) {
    const sql = `SELECT * FROM Recipe WHERE id = ${id}`;
    return await db.get(sql, [id]);
  }

  static async update(id, title, description, ingredients, instructions) {
    const sql = `UPDATE Recipe SET title = '${title}', description = '${description}', ingredients = '${ingredients}', instructions = '${instructions}' WHERE id = '${id}'`;
    await db.run(sql, [
      title,
      description,
      ingredients.join(", "),
      instructions,
      id,
    ]);
  }

  static async remove(id) {
    const sql = `DELETE FROM Recipe WHERE id = ${id}`;
    await db.run(sql, [id]);
  }
}

module.exports = Recipe;

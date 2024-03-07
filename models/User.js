const db = require("../config/database");

class User {
  static async create(username, password) {
    const sql = `INSERT INTO User (username, password) VALUES ('${username}', '${password}')`;
    await db.run(sql, [username, password]);
  }

  static async findByUsername(username) {
    const sql = `SELECT * FROM User WHERE username = ${username}`;
    return await db.get(sql, [username]);
  }

  static async comparePassword(password, hash) {
    // Compare password with hash
    return password === hash;
  }
}

module.exports = User;

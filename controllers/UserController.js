const User = require("../models/User");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

class UserController {
  static async register(req, res) {
    // User registration logic
    const { username, password } = req.body;
    await User.create(username, password);
    res.json({ message: "User registered successfully" });
  }

  static async login(req, res) {
    // User login logic
    const { username, password } = req.body;
    const isValidUser = await User.findByUsername(username);
    if (isValidUser) {
      const isValidPassword = await User.comparePassword(
        password,
        isValidUser.password
      );
      if (isValidPassword) {
        const payload = { username };
        const token = jwt.sign(payload, config.jwtSecret);
        res.json({ jwt: token });
      }
    }
    res.json({ message: "Invalid User" });
  }

  static async getProfile(req, res) {
    // Get user profile logic
    const userDetails = await User.findByUsername(req.user);
    res.json({ ...userDetails });
  }
}

module.exports = UserController;

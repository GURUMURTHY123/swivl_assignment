const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
const UserController = require("../controllers/UserController");

// User registration
router.post("/register", UserController.register);

// User login
router.post("/login", UserController.login);

// Profile management (example: get user profile)
router.get("/profile", authMiddleware, UserController.getProfile);

module.exports = router;

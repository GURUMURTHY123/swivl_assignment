const express = require("express");
const router = express.Router();
const RecipeController = require("../controllers/RecipeController");
const authMiddleware = require("../middleware/authMiddleware");

// CRUD operations on recipes
router.post("/", authMiddleware, RecipeController.createRecipe);
router.get("/", authMiddleware, RecipeController.getAllRecipes);
router.get("/:recipeId", authMiddleware, RecipeController.getRecipeById);
router.put("/:recipeId", authMiddleware, RecipeController.updateRecipe);
router.delete("/:recipeId", authMiddleware, RecipeController.deleteRecipe);

module.exports = router;

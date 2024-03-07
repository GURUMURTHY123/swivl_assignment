const Recipe = require("../models/Recipe");

class RecipeController {
  static async createRecipe(req, res) {
    // Create recipe logic
    const { title, description, ingredients, instructions } = req.body;
    await Recipe.create(title, description, ingredients, instructions);
    res.json({ message: "recipe created successfully" });
  }

  static async getAllRecipes(req, res) {
    // Get all recipes logic
    const response = await Recipe.getAll();
    res.json({ recipes: response });
  }

  static async getRecipeById(req, res) {
    // Get recipe by ID logic
    const { id } = req.params;
    const response = await Recipe.getById(id);
    res.json({ recipe: response });
  }

  static async updateRecipe(req, res) {
    // Update recipe logic
    const { id } = req.params;
    const { title, description, ingredients, instructions } = req.body;
    await Recipe.update(id, title, description, ingredients, instructions);
    res.json({ message: "Recipe updated successfully" });
  }

  static async deleteRecipe(req, res) {
    // Delete recipe logic
    const { id } = req.params;
    await Recipe.remove(id);
    res.json({ message: "Recipe deleted successfully" });
  }
}

module.exports = RecipeController;

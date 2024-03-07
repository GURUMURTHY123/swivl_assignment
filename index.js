const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const config = require("./config/config");

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/users", userRoutes);
app.use("/recipes", recipeRoutes);

// Server setup
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

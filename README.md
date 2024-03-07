# Recipe Sharing Platform API

## Setup

1. Install dependencies: `npm install`
2. Start the server: `npm start`

## API Documentation

### User Endpoints

- **POST /users/register**

  - Register a new user.
  - Request Body: `{ "username": "example", "password": "password123" }`
  - Response: `{ "message": "User registered successfully" }`

- **POST /users/login**

  - Login with existing credentials.
  - Request Body: `{ "username": "example", "password": "password123" }`
  - Response: `{ "token": "your-jwt-token" }`

- **GET /users/profile**
  - Get user profile.
  - Requires authentication with JWT token.
  - Response: `{ "username": "example", "otherUserProfileDetails": "..." }`

### Recipe Endpoints

- **POST /recipes**
  - Create a new recipe.
  - Request Body: `{ "title": "Recipe Title", "description": "Description", "ingredients": ["ingredient1", "ingredient2"], "instructions": "Cooking instructions" }`
  - Requires authentication with JWT token.
  - Response: `{ "message": "recipe created successfully"}`

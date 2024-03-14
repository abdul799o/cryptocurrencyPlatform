// Load environment variables from a .env file with dotenv.
require("dotenv").config();

// Import Express to create a server and define routes, and mongoose for MongoDB interactions.
const express = require("express");
const mongoose = require("mongoose");

// Routes for handling data-related requests, organized by functionality.
const coinRoutes = require("./routes/coins");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");


// Initialize Express app.
const app = express();

// Middleware
// Use Express's built-in middleware for JSON parsing to handle JSON request bodies.
app.use(express.json());
// Log every request's path and method for debugging.
app.use((request, response, next) => {
  console.log(`${request.method} ${request.path}`);
  next(); // Continue to the next middleware or route handler.
});

// API Routes
// Serve data-related routes under the '/api/coin' base path.
app.use("/api/coins", coinRoutes);
app.use("/api/userRoutes", userRoutes);
app.use("/api/adminRoutes",adminRoutes)

// Database Connection
// Connect to MongoDB with the URI from .env, then start server if successful.
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Connected to database and listening on port ${process.env.PORT}.`
      );
    });
  })
  .catch((error) => {
    console.error(error);
  });

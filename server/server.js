// Load environment variables from a .env file for application configuration.
require("dotenv").config();

// Import Express to create and manage the server, and Mongoose for database operations with MongoDB.
const express = require("express");
const mongoose = require("mongoose");

// Import route handlers to manage requests for different entities within the application.
const coinRoutes = require("./routes/coins");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");

// Initialize the Express app to configure middleware and routes.
const app = express();

// Middleware to parse JSON bodies of incoming requests, enabling easy access to request data.
app.use(express.json());

// Middleware for logging request details, helping with debugging and monitoring request patterns.
app.use((request, response, next) => {
  console.log(`${request.method} ${request.path}`);
  next(); // Proceed to the next middleware or route handler.
});

// Define base paths for API routes, organizing the server's endpoint structure.
app.use("/api/coins", coinRoutes); // For handling coin-related operations.
app.use("/api/userRoutes", userRoutes); // For user-related functionalities.
app.use("/api/adminRoutes", adminRoutes); // For administrative actions.

// Connect to the MongoDB database using a URI stored in environment variables for security.
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Start the server to listen on a specific port after a successful database connection.
    app.listen(process.env.PORT, () => {
      console.log(
        `Connected to database and listening on port ${process.env.PORT}.`
      );
    });
  })
  .catch((error) => {
    // Log any errors encountered during the database connection attempt.
    console.error(error);
  });

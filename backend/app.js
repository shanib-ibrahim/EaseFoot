const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

// Use body-parser to handle URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Session management
app.use(
  session({
    secret: "ecommerce-secret", // Change this in production
    resave: false,
    saveUninitialized: true,
  })
);

// Set the public folder for static files (CSS, JS, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error connecting to MongoDB: ", err));

// Define routes
const userRoutes = require("./src/routes/userRoutes");
app.use("/user", userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

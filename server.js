const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

const protect = require("./middleware/authMiddleware");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

// Auth Routes
app.use("/api/auth", authRoutes);

// Product Routes
app.use("/api/products", productRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("API Working");
});

// Protected Test Route
app.get("/protected", protect, (req, res) => {
  res.json({
    message: "Protected Route Accessed",
    user: req.user
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
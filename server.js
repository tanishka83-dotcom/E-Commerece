const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("API Working");
});

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    message: err.message || "Internal server error",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
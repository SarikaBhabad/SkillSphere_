const express = require("express");
const cors = require("cors");

const healthRoutes = require("./routes/healthroutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/health", healthRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "SkillSphere API is running"
  });
});

module.exports = app;
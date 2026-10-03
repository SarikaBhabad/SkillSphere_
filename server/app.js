const express = require("express");
const cors = require("cors");

const healthRoutes = require("./routes/healthroutes");
const skillRoutes = require("./routes/skillRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/health", healthRoutes);
app.use("/api/skills", skillRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "SkillSphere API is running"
  });
});

module.exports = app;
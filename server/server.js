require("dns").setServers(["8.8.8.8"])
const app = require("./app");
const connectDB = require("./config/db");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`SkillSphere server running on port ${PORT}`);
});



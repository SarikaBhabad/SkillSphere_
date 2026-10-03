const express = require("express");

const {
  getSkills,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill,
} = require("../controllers/skillControllers");

const router = express.Router();

// GET all skills
router.get("/", getSkills);

// GET one skill by ID
router.get("/:id", getSkillById);

// POST a new skill
router.post("/", createSkill);
// update a skill
router.put("/:id", updateSkill);

// delete skill
router.delete("/:id", deleteSkill);

module.exports = router;
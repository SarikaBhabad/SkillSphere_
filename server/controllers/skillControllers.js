const Skill = require("../models/Skill");

// Get all skills
const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: skills,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch skills",
      error: error.message,
    });
  }
};

// Create a new skill
const createSkill = async (req, res) => {
  try {
    const { user, name, category, level, progress, description } = req.body;

    const skill = await Skill.create({
      user,
      name,
      category,
      level,
      progress,
      description,
    });

    res.status(201).json({
      success: true,
      message: "Skill created successfully",
      data: skill,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create skill",
      error: error.message,
    });
  }
};

// Update a skill
const updateSkill = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedSkill = await Skill.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedSkill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Skill updated successfully",
      data: updatedSkill,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update skill",
      error: error.message,
    });
  }
};

// Delete a skill
const deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedSkill = await Skill.findByIdAndDelete(id);

    if (!deletedSkill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Skill deleted successfully",
      data: deletedSkill,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete skill",
      error: error.message,
    });
  }
};
// Get a single skill by ID
const getSkillById = async (req, res) => {
  try {
    const { id } = req.params;

    const skill = await Skill.findById(id);

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found",
      });
    }

    res.status(200).json({
      success: true,
      data: skill,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch skill",
      error: error.message,
    });
  }
};
module.exports = {
  getSkills,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill,
};
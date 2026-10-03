import React, { useEffect, useState } from "react";
import {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill,
} from "../../services/api";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [skillData, setSkillData] = useState({
    name: "",
    category: "",
    level: "Beginner",
    progress: 0,
    description: "",
  });

  // Temporary user ID.
  // This will be replaced with the logged-in user's ID during authentication.
  const userId = "6ac0be98fc75156c4fba4258";

  // Load skills from backend when page opens
  useEffect(() => {
    loadSkills();
  }, []);

  const loadSkills = async () => {
    try {
      const response = await getSkills();
      setSkills(response.data);
    } catch (error) {
      console.error("Error loading skills:", error);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setSkillData({
      ...skillData,
      [e.target.name]: e.target.value,
    });
  };

  // Open empty form for adding a new skill
  const handleAddSkill = () => {
    setEditId(null);

    setSkillData({
      name: "",
      category: "",
      level: "Beginner",
      progress: 0,
      description: "",
    });

    setShowForm(true);
  };

  // Open form with existing skill data
  const handleEditSkill = (skill) => {
    setEditId(skill._id);

    setSkillData({
      name: skill.name,
      category: skill.category,
      level: skill.level,
      progress: skill.progress,
      description: skill.description || "",
    });

    setShowForm(true);
  };

  // Create or update skill
  const handleSaveSkill = async () => {
    try {
      const skillPayload = {
        user: userId,
        name: skillData.name,
        category: skillData.category,
        level: skillData.level,
        progress: Number(skillData.progress),
        description: skillData.description,
      };

      if (editId) {
        // Update existing skill
        const response = await updateSkill(editId, skillPayload);

        setSkills((prevSkills) =>
          prevSkills.map((skill) =>
            skill._id === editId ? response.data : skill
          )
        );
      } else {
        // Create new skill
        const response = await createSkill(skillPayload);

        setSkills((prevSkills) => [response.data, ...prevSkills]);
      }

      // Reset form
      setSkillData({
        name: "",
        category: "",
        level: "Beginner",
        progress: 0,
        description: "",
      });

      setEditId(null);
      setShowForm(false);
    } catch (error) {
      console.error("Error saving skill:", error);
    }
  };

  // Delete skill
  const handleDeleteSkill = async (id) => {
    try {
      await deleteSkill(id);

      setSkills((prevSkills) =>
        prevSkills.filter((skill) => skill._id !== id)
      );
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };

  return (
    <div className="skills-page">
      {/* Page Header */}
      <div className="skills-header">
        <div>
          <h1>Skills</h1>
          <p>Track and manage your technical skills.</p>
        </div>

        <button className="btn btn-primary" onClick={handleAddSkill}>
          + Add Skill
        </button>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <div className="card">
          <h2>{editId ? "Edit Skill" : "Add Skill"}</h2>

          <input
            type="text"
            name="name"
            placeholder="Skill Name"
            value={skillData.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={skillData.category}
            onChange={handleChange}
          />

          <select
            name="level"
            value={skillData.level}
            onChange={handleChange}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>

          <input
            type="number"
            name="progress"
            placeholder="Progress %"
            min="0"
            max="100"
            value={skillData.progress}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description"
            value={skillData.description}
            onChange={handleChange}
          />

          <button className="btn btn-primary" onClick={handleSaveSkill}>
            {editId ? "Update Skill" : "Save Skill"}
          </button>

          <button
            className="btn"
            onClick={() => {
              setShowForm(false);
              setEditId(null);
            }}
          >
            Cancel
          </button>
        </div>
      )}

      {/* Skills List */}
      <div className="skill-list">
        {skills.length === 0 ? (
          <p>No skills added yet.</p>
        ) : (
          skills.map((skill) => (
            <div className="card skill-card" key={skill._id}>
              <h3>{skill.name}</h3>

              <p>{skill.category}</p>

              <p>Level: {skill.level}</p>

              <p>Progress: {skill.progress}%</p>

              <progress value={skill.progress} max="100"></progress>

              {skill.description && <p>{skill.description}</p>}

              <div className="skill-actions">
                <button
                  className="btn"
                  onClick={() => handleEditSkill(skill)}
                >
                  Edit
                </button>

                <button
                  className="btn"
                  onClick={() => handleDeleteSkill(skill._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Skills;
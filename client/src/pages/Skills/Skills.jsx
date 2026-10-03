import React, { useEffect, useState } from "react";
import {createSkill, getSkills } from "../../services/api";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
const [category, setCategory] = useState("");
const [level, setLevel] = useState("Beginner");
  const handleAddSkill = () => {
    setShowForm(true);
  };
  const handleSaveSkill = async () => {
  try {
    const newSkill = {
      name,
      category,
      level,
    };

    const response = await createSkill(newSkill);

    setSkills((prevSkills) => [response.data, ...prevSkills]);

    setName("");
    setCategory("");
    setLevel("Beginner");
    setShowForm(false);
  } catch (error) {
    console.error("Error creating skill:", error);
  }
};

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const response = await getSkills();
        setSkills(response.data);
      } catch (error) {
        console.error("Error loading skills:", error);
      }
    };

    loadSkills();
  }, []);

  return (
    <div className="skills-page">
      <div className="skills-header">
        <div>
          <h1>My Skills</h1>
          <p>Track and manage your technical skills.</p>
        </div>

        <button className="add-skill-btn" onClick={handleAddSkill}>
          + Add Skill
        </button>
      </div>

      {showForm && (
        <div className="add-skill-form">
          <h2>Add New Skill</h2>

          <input
            type="text"
            placeholder="Skill name"
             value={name}
  onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
  onChange={(e) => setCategory(e.target.value)}
          />
          <select
  value={level}
  onChange={(e) => setLevel(e.target.value)}
>
  <option value="Beginner">Beginner</option>
  <option value="Intermediate">Intermediate</option>
  <option value="Advanced">Advanced</option>
  <option value="Expert">Expert</option>
</select>

          <button type="button" onClick={handleSaveSkill}>
            Save Skill
          </button>
        </div>
      )}

      <div className="skills-list">
        {skills.length === 0 ? (
          <p>No skills added yet.</p>
        ) : (
          skills.map((skill) => (
            <div key={skill._id}>
              <h3>{skill.name}</h3>
              <p>{skill.category}</p>
              <p>{skill.level}</p>
              <p>{skill.progress}%</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Skills;
import React from "react";
import { useState } from "react";

const Skills = () => {
  const [showForm, setShowForm] = useState(false);
  const [skillData, setSkillData] = useState({
    name: "",
    category: "",
    level: "",
    progress: "",
    description: "",
  });
  const [skills, setSkills] = useState([
    {
      name: "JavaScript",
      category: "Programming",
      level: "Intermediate",
      progress: 70,
      description: "JavaScript basics",
    },
  ]);
  const [editIndex, setEditIndex] = useState(null);
  const handleSaveSkill = () => {
    if (editIndex !== null) {
      const updatedSkills = [...skills];
      updatedSkills[editIndex] = skillData;

      setSkills(updatedSkills);
      setEditIndex(null);
    } else {
      setSkills([...skills, skillData]);
    }

    setSkillData({
      name: "",
      category: "",
      level: "",
      progress: "",
      description: "",
    });

    setShowForm(false);
  };
  return (
    <div className="skills-page">
      {/*page Header*/}
      <div className="skills-header">
        <div>
          <h1>Skills</h1>
          <p>Track and manage your technical skills.</p>
        </div>

        <button className="btn btn-primary" onClick={() => setShowForm(true)}>
          + Add Skill
        </button>
      </div>

      {showForm && (
        <div className="card">
          <h2>Add Skill</h2>

          <input
            type="text"
            placeholder="Skill Name"
            value={skillData.name}
            onChange={(e) =>
              setSkillData({
                ...skillData,
                name: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Category"
            value={skillData.category}
            onChange={(e) =>
              setSkillData({
                ...skillData,
                category: e.target.value,
              })
            }
          />

          <select
            value={skillData.level}
            onChange={(e) =>
              setSkillData({
                ...skillData,
                level: e.target.value,
              })
            }
          >
            <option value="">Select Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <input
            type="number"
            placeholder="Progress %"
            value={skillData.progress}
            onChange={(e) =>
              setSkillData({
                ...skillData,
                progress: e.target.value,
              })
            }
          />

          <textarea
            placeholder="Description"
            value={skillData.description}
            onChange={(e) =>
              setSkillData({
                ...skillData,
                description: e.target.value,
              })
            }
          ></textarea>

          <button className="btn btn-primary" onClick={handleSaveSkill}>
            Save Skill
          </button>

          <button className="btn" onClick={() => setShowForm(false)}>
            Cancel
          </button>
        </div>
      )}

      {/* {skill list} */}
      <div className="skill-list">
        {/* Temporary Skill Card */}
        {skills.map((skill, index) => (
          <div className="card skill-card" key={index}>
            <h3>{skill.name}</h3>

            <p>{skill.category}</p>

            <p>Level: {skill.level}</p>

            <p>Progress: {skill.progress}%</p>

            <progress value={skill.progress} max="100"></progress>

            <div className="skill-actions">
              <button
                className="btn"
                onClick={() => {
                  setSkillData(skill);
                  setEditIndex(index);
                  setShowForm(true);
                }}
              >
                Edit
              </button>
              <button
  className="btn"
  onClick={() => {
    setSkills(skills.filter((_, i) => i !== index));
  }}
>
  Delete
</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

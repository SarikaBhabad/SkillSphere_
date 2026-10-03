const API_BASE_URL = "http://localhost:5000";

export const checkBackendHealth = async () => {
  const response = await fetch(`${API_BASE_URL}/api/health`);

  if (!response.ok) {
    throw new Error("Backend health check failed");
  }

  return response.json();
};
export const getSkills = async () => {
  const response = await fetch(`${API_BASE_URL}/api/skills`);

  if (!response.ok) {
    throw new Error("Failed to fetch skills");
  }

  return response.json();
};
export const createSkill = async (skillData) => {
  const response = await fetch(`${API_BASE_URL}/api/skills`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(skillData),
  });

  if (!response.ok) {
    throw new Error("Failed to create skill");
  }

  return response.json();
};
export const updateSkill = async (id, skillData) => {
  const response = await fetch(`${API_BASE_URL}/api/skills/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(skillData),
  });

  if (!response.ok) {
    throw new Error("Failed to update skill");
  }

  return response.json();
};

export const deleteSkill = async (id) => {
  const response = await fetch(`${API_BASE_URL}/api/skills/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete skill");
  }

  return response.json();
};
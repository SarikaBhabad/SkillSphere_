const API_BASE_URL = "http://localhost:5000";

export const checkBackendHealth = async () => {
  const response = await fetch(`${API_BASE_URL}/api/health`);

  if (!response.ok) {
    throw new Error("Backend health check failed");
  }

  return response.json();
};
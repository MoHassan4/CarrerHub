import axios from "axios";

const API = "/api/v1";

function getToken() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.token || null;
}

export async function getUsers() {
  const token = getToken();
  try {
    const response = await axios.get(`${API}/profile/profile`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    return response.data;
  } catch (err) {
    console.error("Error in setStep1:", err.response || err);
    throw err;
  }
}

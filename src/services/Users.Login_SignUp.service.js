import axios from "axios";

const API = "/api/v1"; 



// ===== Account =====
export async function getUsersData(data) {
  return await axios.post(`${API}/auth/sign-in`, data);
}

export async function setUserData(data) {
  return await axios.post(`${API}/auth/user-signup`, data);
}

// ===== PROFILE STEPS =====



function getToken() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.token || null;
}

export async function setStep1(data) {
  const token = getToken();
  try {
    const response = await axios.post(`${API}/register/step1`, data, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    return response.data;
  } catch (err) {
    console.error("Error in setStep1:", err.response || err);
    throw err;
  }
}

export async function setStep2(data) {
  const token = getToken();
  return await axios.post(`${API}/register/step2`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function setExperienceDB(data) {
  const token = getToken();
  return await axios.post(`${API}/register/experience`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function setEducationDB(data) {
  const token = getToken();
  return await axios.post(`${API}/register/education`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function setStep5(data) {
  const token = getToken();
  return await axios.post(`${API}/register/skills`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

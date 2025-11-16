import axios from "axios";

const API = "/api/v1";

function getToken() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.token || null;
}

// Get

export async function getUsers() {
  const token = getToken();
  if (token) {
    const response = await axios.get(`${API}/profile/profile`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    return response.data;
  }
}

export async function fetchAppliedJobs() {
  const token = getToken();
  if (token) {
    const response = await axios.get(`${API}/user/jobs/applied-jobs`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.status ? response.data.applications || [] : [];
  }
  return [];
}

// Update & Add

export async function addNewExperience(data) {
  const token = getToken();
  if (token) {
    const response = await axios.post(`${API}/register/new-experience`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  }
}

export async function addNewEudcation(data) {
  const token = getToken();
  if (token) {
    const response = await axios.post(`${API}/register/new-eudcation`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  }
}


export async function updateBasicInfos(data) {
  const token = getToken();
  if (token) {
    const response = await axios.put(`${API}/profile/profile`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  }
}
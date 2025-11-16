import axios from "axios";

const API = "/api/v1";

function getToken() {
  const user = JSON.parse(localStorage.getItem("company"));
  return user?.token || null;
}

export async function setCompaniesData(data) {
  return await axios.post(`${API}/auth/company-signup`, data);
}

export async function setCompaniesProfile(data) {
  const token = getToken();

  return await axios.post(`${API}/company/profile/profile`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      // "Content-Type": "multipart/form-data",
    },
  });
}

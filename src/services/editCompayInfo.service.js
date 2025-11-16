import axios from "axios";

const API = "/api/v1";

function getToken() {
  const user = JSON.parse(localStorage.getItem("company"));
  return user?.token || null;
}

// Update company info
async function updateCompanyInfo(data) {
  const token = getToken();

  return await axios.put(`${API}/company/profile/profile`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json", // Using JSON since no file is sent
    },
  });
}

// Get company info
async function getCompanyInfo() {
  const token = getToken();

  const response = await axios.get(`${API}/company/profile/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data; // Return the company info object directly
}

export { updateCompanyInfo, getCompanyInfo };

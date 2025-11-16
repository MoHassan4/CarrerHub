// services/AddJobs.service.js
import axios from "axios";

const API = "/api/v1";

function getToken() {
  const user = JSON.parse(localStorage.getItem("company"));
  return user?.token || null;
}

async function setJobData(data) {
  const token = getToken();

  return await axios.post(`${API}/company/jobs/jobs`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export default setJobData;

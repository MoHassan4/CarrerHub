import axios from "axios";

const API = "/api/v1";

function getToken() {
  const user = JSON.parse(localStorage.getItem("company"));
  return user?.token || null;
}

async function getJobsData() {
  const token = getToken();

  return await axios.get(
    `${API}/company/jobs/jobs`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export default getJobsData;
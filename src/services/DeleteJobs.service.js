import axios from "axios";

const API = "/api/v1";

function getToken() {
  const user = JSON.parse(localStorage.getItem("company"));
  return user?.token || null;
}

async function deleteJobData(jobId) {
  const token = getToken();

  return await axios.delete(
    `${API}/company/jobs/jobs/${jobId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export default deleteJobData;
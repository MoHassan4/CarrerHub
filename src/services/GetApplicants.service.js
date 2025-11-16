import axios from "axios";

const API = "/api/v1";

function getToken() {
  const user = JSON.parse(localStorage.getItem("company"));
  return user?.token || null;
}

async function getApplicantsData(jobId) {
  const token = getToken();

  return await axios.get(
    `${API}/company/jobs/jobs/${jobId}/applicants`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export default getApplicantsData;
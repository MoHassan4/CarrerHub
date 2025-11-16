import axios from "axios";

const API = "/api/v1";

function getToken() {
  const user = JSON.parse(localStorage.getItem("company"));
  return user?.token || null;
}

const handleApplicantStatus = (jobId, userId, status) => {
  const token = getToken();

  return axios.put(
    `${API}/company/jobs/jobs/${jobId}/applicants/${userId}/status`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export default handleApplicantStatus;
import axios from "axios";

const API = "/api/v1/auth";

export async function setCompaniesData(data) {
  return await axios.post(`${API}/company-signup`, data);
}

import axios from "axios";

const API = "https://68f7ac12f7fb897c6616c013.mockapi.io/Data";

export async function setUserData(Data) {
  return await axios.post(API, Data);
}

export async function getUsersData(Data) {
  return await axios.get(API, Data);
}
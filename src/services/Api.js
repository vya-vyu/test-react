import axios from "axios";

axios.defaults.baseURL = "https://64787b3e362560649a2ddef5.mockapi.io";

export const getUsersApi = () => axios.get("/users").then(({ data }) => data);
export const replaceFollowersApi = (id) =>
  axios.put(`users/${id}`).then((res) => res);

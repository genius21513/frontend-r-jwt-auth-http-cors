import axios from "axios";

// const API_URL = "http://10.10.13.227:8080/api/test/";

// const API_URL = "http://127.0.0.1:8080/api/test/";

// const API_URL = "http://localhost:3000/api/test/";
// const API_URL = "http://10.10.13.227:3000/api/test/";
// const API_URL = "http://127.0.0.1:3000/api/test/";

const API_URL = "/api/test/";

// const API_URL = "http://13.53.64.138:8080/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user");
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod");
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin");
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
}

export default UserService;

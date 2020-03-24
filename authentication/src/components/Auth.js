import axios from "axios";

const axiosWithAuth = () => {
  return axios.create({
    baseURL: `http://localhost:3300/api`,
    withCredentials: true,
    crossDomain: true,
  });
};

export default axiosWithAuth;
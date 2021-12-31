import axios from "axios";
const Axios = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://technical-backend.herokuapp.com",
});
export default Axios;

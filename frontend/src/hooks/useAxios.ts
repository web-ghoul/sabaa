import axios from "axios";
import Cookies from "js-cookie";

const useAxios = (t?: string) => {
  const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
  const server = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}`,
    headers: {
      Authorization: `Bearer ${t || token}`,
    },
  });
  return { server };
};

export default useAxios;

import axios from "axios";

const useAxios = (token?: string) => {
  const server = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return { server };
};

export default useAxios;

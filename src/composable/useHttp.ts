import axios, { AxiosInstance } from "axios";

let http: AxiosInstance | null;

export default () => {
  if (!!http) {
    return http;
  }

  http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });
  
  return http;
};
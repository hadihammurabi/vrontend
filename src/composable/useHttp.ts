import axios, { AxiosInstance } from "axios";

let http: AxiosInstance | null;

export default () => {
  if (!!http) {
    return http;
  }

  http = axios.create({
    baseURL: 'https://openlibrary.org',
  });
  
  return http;
};
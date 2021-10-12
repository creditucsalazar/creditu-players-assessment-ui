import axios from "axios";

const config = {
  timeout: 15000,
  baseURL: process.env.VUE_APP_API_URL,
};

export const httpClient = axios.create(config);

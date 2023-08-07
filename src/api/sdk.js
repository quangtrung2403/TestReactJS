import axios from "axios";
import { Endpoint } from "./router";

export const axiosInstance = axios.create({
  baseURL: Endpoint,
});


import axios from "axios";

const api = axios.create({
  baseURL: process.env.BASE_URL || "https://api.example.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

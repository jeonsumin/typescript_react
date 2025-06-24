import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL || 'http://localhost:8080',
  headers: {
    "Content-Type": "application/json",
  }
})
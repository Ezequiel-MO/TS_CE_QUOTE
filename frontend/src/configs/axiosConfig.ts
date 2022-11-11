import axios from 'axios'

export const baseAPI = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
  }
})

import axios, { AxiosInstance } from 'axios'

const API_URL = import.meta.env.VITE_API

if (!API_URL) {
  throw new Error('Missing api url!')
}

export const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    accept: 'application/json',
  },
})

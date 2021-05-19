import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const API_CONFIG: AxiosRequestConfig = {
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 5000,
};

export const API: AxiosInstance = axios.create(API_CONFIG);

import axios, { InternalAxiosRequestConfig } from 'axios';

const $host = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL
})

const $authHost = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL
})

const authInterceptor = (config: InternalAxiosRequestConfig<any>) => {
  const headers = config.headers;
  headers.authorization = `Bearer ${localStorage.getItem('token')}`;

  return {
    ...config,
    headers
  };
};


$authHost.interceptors.request.use(authInterceptor)

export {
  $host,
  $authHost
}
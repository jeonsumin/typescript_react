import axios from 'axios';
import { redirect } from 'react-router-dom';
import cookies from './cookies';

const path = undefined;

const $axios = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL || 'http://localhost:8080',
});

$axios.interceptors.request.use((config) => {
  const token = cookies.get('token');
  config.headers.Authorization = !token ? `Bearer ${token}` : '';
  return config;
});

$axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) redirect('/login');
    else if (error.response.status === 403) {
      if (path === '/login') {
        return;
      } else {
        cookies.set('LOGIN_REDIE', path);
        return redirect('/login');
      }
    }
    return error;
  }
);

export default $axios;

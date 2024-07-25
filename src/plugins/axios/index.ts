import axios from 'axios';
import { getCookie, setCookie } from 'plugins/cookies';
import { redirect } from 'react-router-dom';

const path = undefined;
axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

axios.interceptors.request.use((config) => {
  const token = getCookie('token');
  config.headers.Authorization = !!token ? `Bearer ${token}` : '';
  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) redirect('/login');
    else if (error.response.status === 403) {
      if (path === '/login') {
        return;
      } else {
        setCookie({ key: 'LOGIN_REDIE', value: path });
        return redirect('/login');
      }
    }
    return error;
  }
);

export default axios;

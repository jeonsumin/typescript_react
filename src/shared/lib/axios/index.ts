import axios from 'axios'
// import { getCookie, setCookie } from 'plugins/cookies';
import { redirect } from 'react-router-dom'

const path = undefined
const $axios = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL || 'http://localhost:8080',
})

$axios.interceptors.request.use(
  (config) => config,
  // const token = getCookie('token')
  // config.headers.Authorization = !token ? `Bearer ${token}` : ''
)

$axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) redirect('/login')
    else if (error.response.status === 403) {
      if (path === '/login') {
        return redirect('/')
      }
      // setCookie({ key: 'LOGIN_REDIE', value: path })
      return redirect('/login')
    }
    return error
  },
)

export default $axios

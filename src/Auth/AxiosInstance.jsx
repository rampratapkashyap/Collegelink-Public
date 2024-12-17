import axios from 'axios';

// Create an Axios instance
const AxiosInstance = axios.create({
  baseURL:'http://localhost:8080'
});

// Add a request interceptor
AxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {

      config.headers['Authorization'] = `Bearer ${token}`;
    } else {
      console.warn('No token found in localStorage');
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default AxiosInstance

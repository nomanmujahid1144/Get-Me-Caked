import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://server.getmecaked.com',
    // baseURL: 'http://localhost:8080'
});

const addTokenToRequest = (config) => {
    const token = localStorage.getItem('token');
    if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
      config.headers.Authorization = `${token}`;
    }
    return config;
  };
  
axiosInstance.interceptors.request.use(addTokenToRequest);

export default axiosInstance;
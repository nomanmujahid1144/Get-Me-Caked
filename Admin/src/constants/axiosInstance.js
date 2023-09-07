//https://cannabis-server.herokuapp.com
import axios from 'axios'
export const axiosInstance = axios.create({
    // baseURL: 'https://server.getmecaked.com',
    baseURL: 'http://localhost:8080'
});

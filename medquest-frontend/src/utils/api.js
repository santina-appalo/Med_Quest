import axios from 'axios';

// Set up Axios instance with the base URL of your backend
const API = axios.create({
    baseURL: 'http://localhost:5000/api', // Replace with production URL if deployed
});

// Add token to requests if available
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// API calls for authentication
export const registerUser = (data) => API.post('/users/register', data);
export const loginUser = (data) => API.post('/users/login', data);

// API calls for appointments
export const bookAppointment = (data) => API.post('/appointments', data);
export const getAppointments = () => API.get('/appointments');

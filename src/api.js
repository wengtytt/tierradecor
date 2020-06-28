import axios from 'axios';

const api = axios.create({
    baseURL: process.env.API_URL || 'https://api.tierradecor.com/',
});

export default api;

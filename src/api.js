import axios from 'axios';

const api = axios.create({
    baseURL: process.env.API_URL || 'https://app.markfod.com/',
});

export default api;

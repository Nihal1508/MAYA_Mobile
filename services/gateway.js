import axios from 'axios';
const BASE_URL = import.meta.env.BASE_URL;
console.log("BASE_URL:", BASE_URL);
export const userSideGateway = axios.create({
    baseURL: "http://localhost:5001",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const impSideGateway = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

import axios from 'axios';
import CryptoJS from 'crypto-js';

const publicKey = import.meta.env.VITE_PUBLIC_API_KEY;
const privateKey = import.meta.env.VITE_PRIVATE_API_KEY;

const characterApi = axios.create({
    baseURL: `https://gateway.marvel.com:443/v1/public/characters`,
    headers: {
        'Content-Type': 'application/json',
    },
});

characterApi.interceptors.request.use((config) => {
    const ts = new Date().getTime();
    const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
    config.params = {
        ...config.params,
        ts,
        apikey: publicKey,
        hash,
    };
    return config;
});

export default characterApi;

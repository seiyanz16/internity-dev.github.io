import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    const axiosInstance = axios.create({
        baseURL: config.public.apiBaseURL
    });
    nuxtApp.provide('axios', axiosInstance);
});
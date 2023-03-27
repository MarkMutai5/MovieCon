import axios from "axios";
export const API_KEY = '?api_key=493367fff9e1b505c3a101f00573654e' 
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTMzNjdmZmY5ZTFiNTA1YzNhMTAxZjAwNTczNjU0ZSIsInN1YiI6IjY0MjFjMGI5NmEzNDQ4MDBhOTBhZTgwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bFOWI-pXu8NUZmgso4zSSXl5q-0tTLqarWy0l86Sarc'
export const API_URL_DISCOVER = '/discover/movie'
export const API_URL_TRENDING ='/trending/tv/week' //trending week 
export const API_BASE_URL = 'https://api.themoviedb.org/3'
export const API_URL_GENRES = '/genre/movie/list' //there is also tv lists

export const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use(async (request) => {
    if (TOKEN) {
        request.headers.Authorization = `Bearer ${TOKEN}`;
    }
    return request;
});
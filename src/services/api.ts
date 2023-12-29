import axios from "axios";

const api = axios.create({
   // baseURL: 'https://pokeapi.co/api/v2/',
   baseURL: '/api/user',
})

export default api;
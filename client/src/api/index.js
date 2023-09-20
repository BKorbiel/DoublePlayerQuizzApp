import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const signIn = (data) => axios.post(`${BASE_URL}/user/signin`, data);
export const signUp = (data) => axios.post(`${BASE_URL}/user/signup`, data);
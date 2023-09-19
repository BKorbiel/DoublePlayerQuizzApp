import axios from 'axios';

const BASE_URL = 'https://localhost:5000';
const API = axios.create({baseURL: BASE_URL});

API.interceptors.request.use(async (req) => {
    const user = await AsyncStorage.getItem('user');
	if(user) {
		req.headers.Authorization = `Bearer ${JSON.parse(user).token}`;
	}
	return req;
});

export const signIn = (data) => API.post('/user/signin', data);
export const signUp = (data) => API.post('/user/signup', data);
import * as api from '../api';

interface props {
	username: string;
	email: string;
	password: string;
	passwordConfirm: string;
}

export const signin = async (data : props) => {
	try {
		await api.signIn(data);
	}
	catch(error) {
		console.log(error);
	}
}

export const signup = async (data : props) => {
	try {
		await api.signUp(data);
	}
	catch(error) {
		console.log(error);
	}
}
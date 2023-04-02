import axios from 'axios';
const API_URI = import.meta.env.VITE_JAMAPI_URL;

export const checkUsername = async (username: string) =>
	await axios
		.post(`${API_URI}/auth/checkuser/${username}`)
		.then((res) => res.data);

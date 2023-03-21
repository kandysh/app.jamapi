import axios from 'axios';

const getContent = async (route: string) =>
	await axios
		.get(`${import.meta.env.VITE_JAMAPI_URL}/content/${route}`)
		.then((response): Content[] => response.data);

export { getContent };

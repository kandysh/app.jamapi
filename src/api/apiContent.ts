import axios from 'axios';
const API_URI = import.meta.env.VITE_JAMAPI_URL;
const getContent = async (route: string) =>
	await axios
		.get(`${API_URI}/content/${route}`)
		.then((response): Content[] => response.data);

const searchContent = async (params: Record<string, string>) =>
	await axios
		.get(
			`${API_URI}/content/search?${Object.entries(params)
				.map((entry) => entry.join('='))
				.join('&')}`
		)
		.then((response): Content[] => response.data);

const getContentDetails = async (contentId: string) =>
	await axios
		.get(`${API_URI}/content/show/${contentId}`)
		.then((res): Content => res.data);

const getRelatedContent = async (contentId: string) =>
	await axios
		.get(`${API_URI}/content/related/${contentId}`)
		.then((res) => res.data);

export { getContent, searchContent, getContentDetails , getRelatedContent };

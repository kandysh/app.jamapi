import axios from 'axios';
enum season {
	WINTER = 'winter',
	SPRING = 'spring',
	SUMMER = 'summer',
	FALL = 'fall',
	UNDEFINED = 'undefined',
}
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

const getUpcomingContent = async () => {
	const url = `${API_URI}/content/search?year=${new Date(
		Date.now()
	).getUTCFullYear()}&season=${
		Object.values(season)[
			Math.ceil((new Date(Date.now()).getUTCMonth() / 4 + 1) % 4)
		]
	}`;
	return await axios.get(url).then((res) => res.data);
};
export {
	getContent,
	searchContent,
	getContentDetails,
	getRelatedContent,
	getUpcomingContent,
};

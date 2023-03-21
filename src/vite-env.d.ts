/// <reference types="vite/client" />

interface ImportMetaEnv {
	VITE_JAMAPI_URL: string;
}

interface ImportMeta {
	env: ImportMetaEnv;
}
enum Type {
	TV,
	MOVIE,
	OVA,
	ONA,
	SPECIAL,
	UNKNOWN,
}
enum Status {
	FINISHED,
	ONGOING,
	UPCOMING,
	UNKNOWN,
}
enum season {
	WINTER,
	SPRING,
	SUMMER,
	FALL,
	UNDEFINED,
}
interface Season {
	season: season;
	year: number;
}
interface Content {
	contentId: string;
	title: string;
	picture: string;
	thumbnail: string;
	description: string;
	totalEpisodes: number;
	type: Type;
	contentStatus: Status;
	score: number;
	likes: number;
	season: string;
	year: number;
	alternativeName: string;
	season: Season;
	tags: string[];
}

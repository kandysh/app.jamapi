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
	type: string;
	contentStatus: string;
	score: number;
	likes: number;
	alternativeName: string;
	season: {
		season: string;
		year: number;
	};
	tags: string[];
}

type typeParams = {
	type: string;
};

enum Tags {
	ACTION = 'ACTION',
	ADVENTURE = 'ADVENTURE',
	COMEDY = 'COMEDY',
	DRAMA = 'DRAMA',
	ECCHI = 'ECCHI',
	FANTASY = 'FANTASY',
	HORROR = 'HORROR',
	MECHA = 'MECHA',
	MUSIC = 'MUSIC',
	MYSTERY = 'MYSTERY',
	PSYCHOLOGICAL = 'PSYCHOLOGICAL',
	ROMANCE = 'ROMANCE',
	SCI_FI = 'SCI-FI',
	SLICE_OF_LIFE = 'SLICE OF LIFE',
	SPORTS = 'SPORTS',
	SUPERNATURAL = 'SUPERNATURAL',
	THRILLER = 'THRILLER',
}
interface NewUserData {
	email: string;
	password: string;
	username: string;
	cpassword: string;
}

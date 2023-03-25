import {
	MdVideoLabel,
	MdMovie,
	MdTrendingUp,
	MdMovieFilter,
	MdWebStories,
	MdAnimation,
} from 'react-icons/md';
import { BubbleList, SLink } from '../utils/gridStyles';

function SearchBubbles() {
	return (
		<BubbleList>
			<SLink to="/anime/top/all">
				<MdTrendingUp />
				<h4>TOP</h4>
			</SLink>
			<SLink to="/anime/top/tv">
				<MdVideoLabel />
				<h4>TV</h4>
			</SLink>
			<SLink to="/anime/top/movie">
				<MdMovie />
				<h4>MOVIE</h4>
			</SLink>
			<SLink to="/anime/top/special">
				<MdMovieFilter />
				<h4>SPECIAL</h4>
			</SLink>
			<SLink to="/anime/top/ova">
				<MdAnimation />
				<h4>OVA</h4>
			</SLink>
			<SLink to="/anime/top/ona">
				<MdWebStories />
				<h4>ONA</h4>
			</SLink>
		</BubbleList>
	);
}

export default SearchBubbles;

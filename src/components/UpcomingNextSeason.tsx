import { useEffect, useState } from 'react';
import { getContent } from '../api/apiContent';
import { Wrapper } from '../utils/styles';
import ContentSlider from './ContentCard/ContentSlider';

const UpcomingNextSeason = () => {
	const check = localStorage.getItem('upcoming-next');
	const [contents, setContents] = useState<Content[]>(
		check ? JSON.parse(check) : []
	);
	const getUpcoming = async () => {
		await getContent('search?status=upcoming&year=2023&season=spring')
			.then((res) => {
				setContents(res);
				localStorage.setItem('upcoming-next', JSON.stringify(res));
			})
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		getUpcoming();
	}, []);
	return (
		<div>
			<Wrapper>
				<h3>UPCOMING NEXT SEASON</h3>
				<br />
				<ContentSlider cardsOnPage={4} contents={contents} />
			</Wrapper>
		</div>
	);
};

export default UpcomingNextSeason;

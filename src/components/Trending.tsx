import { useEffect, useState } from 'react';
import { getContent } from '../api/apiContent';
import { Wrapper } from '../utils/styles';
import ContentSlider from './ContentCard/ContentSlider';

const Trending = () => {
	const check = localStorage.getItem('trending');
	const [contents, setContents] = useState<Content[]>(
		check ? JSON.parse(check) : []
	);
	const getTrending = async () => {
		await getContent('trending')
			.then((res) => {
				setContents(res);
				localStorage.setItem('trending', JSON.stringify(res));
			})
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		getTrending();
	}, []);
	return (
		<div>
			<Wrapper>
				<h3>TRENDING</h3>
				<br />
				<ContentSlider cardsOnPage={4} contents={contents} />
			</Wrapper>
		</div>
	);
};

export default Trending;

import { useEffect, useState } from 'react';
import { getContent } from '../api/apiContent';
import { Wrapper } from '../utils/styles';
import ContentSlider from './ContentSlider';

const Trending = () => {
	const [contents, setContents] = useState<Content[]>([]);
	const getTrending = async () => {
		const check: string | null = localStorage.getItem('trending');

		check
			? setContents(JSON.parse(check))
			: getContent('trending')
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
				<br/>
				<ContentSlider cardsOnPage={5} contents={contents} />
			</Wrapper>
		</div>
	);
};

export default Trending;

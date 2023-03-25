import { useEffect, useState } from 'react';
import { getContent } from '../api/apiContent';

import '@splidejs/splide/dist/css/splide.min.css';

import { Wrapper } from '../utils/styles';
import ContentSlider from './ContentCard/ContentSlider';

const CurrentTop = () => {
	const check = localStorage.getItem('currentTop');
	const [contents, setContents] = useState<Content[]>(
		check ? JSON.parse(check) : []
	);
	const getCurrentOnGoing = async () => {
		console.log(contents);
		await getContent('current/top')
			.then((res) => {
				setContents(res);
				localStorage.setItem('currentTop', JSON.stringify(res));
			})
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		getCurrentOnGoing();
	}, []);
	return (
		<div>
			<Wrapper>
				<h3>POPULAR THIS SEASON</h3>
				<br />
				<ContentSlider cardsOnPage={3} contents={contents} />
			</Wrapper>
		</div>
	);
};

export default CurrentTop;

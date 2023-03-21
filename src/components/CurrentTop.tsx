import { useEffect, useState } from 'react';
import { getContent } from '../api/apiContent';

import '@splidejs/splide/dist/css/splide.min.css';

import { Wrapper } from '../utils/styles';
import ContentSlider from './ContentSlider';

const CurrentTop = () => {
	const [contents, setContents] = useState<Content[]>([]);
	const getCurrentOnGoing = async () => {
		const check = localStorage.getItem('currentTop');
		check
			? setContents(JSON.parse(check))
			: getContent('current/top')
					.then((res) => {
						setContents(res);

						localStorage.setItem('current/top', JSON.stringify(res));
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
				<br/>
				<ContentSlider cardsOnPage={3} contents={contents} />
			</Wrapper>
		</div>
	);
};

export default CurrentTop;

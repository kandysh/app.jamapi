import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useEffect, useState } from 'react';
import { getContent } from '../api/apiContent';
import { Wrapper } from '../utils/styles';
import ContentCard from './ContentCard';

const TopHundred = () => {
	const [contents, setContents] = useState<Content[]>([]);
	const getTopAll = async () => {
		const check = localStorage.getItem('top-100');

		check
			? setContents(JSON.parse(check))
			: await getContent('top/all')
					.then((res) => {
						setContents(res);
						localStorage.setItem('top-100', JSON.stringify(res));
					})
					.catch((err) => console.log(err));
	};
	useEffect(() => {
		getTopAll();
	}, []);
	return (
		<div>
			<Wrapper>
				<h3>ALL TIME POPULAR</h3>
				<Splide
					options={{
						direction: 'ttb',
						height: '10rem',
						wheel: true,
						lazyLoad: 'nearby',
						arrows: false,
						pagination: false,
					}}
				>
					{contents.map((content) => (
						<SplideSlide key={content.contentId}>
							<ContentCard title={content.title} picture={content.picture} />
						</SplideSlide>
					))}
				</Splide>
			</Wrapper>
		</div>
	);
};

export default TopHundred;

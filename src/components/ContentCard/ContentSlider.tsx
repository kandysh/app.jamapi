import { Splide, SplideSlide } from '@splidejs/react-splide';
import ContentCard from './ContentCard';

const ContentSlider = ({ contents,cardsOnPage }: { contents: Content[],cardsOnPage:number }) => {
	return (
		<Splide
			options={{
				perPage: cardsOnPage,
				drag: 'free',
				type: 'loop',
				arrows : false,
				snap:true,
				pagination : false,
				gap : '3rem'
			}}
		>
			{contents.map((content) => (
				<SplideSlide key={content.contentId}>
					<ContentCard title={content.title} picture={content.picture} cardsOnPage={cardsOnPage} contentId={content.contentId}/>
				</SplideSlide>
			))}
		</Splide>
	);
};

export default ContentSlider;

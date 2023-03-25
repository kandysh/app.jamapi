import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BigCard, Card, Gradient } from '../../utils/styles';
import ContentImage from './ContentImage';

const ContentCard = ({
	contentId,
	title,
	picture,
	cardsOnPage,
}: {
	contentId: string;
	title: string;
	picture: string;
	cardsOnPage: number;
}) => {
	const [caption, setCaption] = useState('');
	useEffect(() => {
		title.length > 30
			? `${setCaption(title.slice(0, 30))}...`
			: setCaption(title);
	}, []);
	const CardContent = () => (
		<>
			<Gradient>
				<ContentImage source={picture} />
			</Gradient>
			<p>{caption}</p>
		</>
	);
	return (
		<NavLink to={`/anime/${contentId}`}>
			{cardsOnPage === 3 ? (
				<BigCard>
					<CardContent />
				</BigCard>
			) : (
				<Card>
					<CardContent />
				</Card>
			)}
		</NavLink>
	);
};

export default ContentCard;

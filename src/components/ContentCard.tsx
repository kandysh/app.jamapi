import { BigCard, Card, Gradient } from '../utils/styles';
import ContentImage from './ContentImage';

const ContentCard = ({
	title,
	picture,
	cardsOnPage,
}: {
	title: string;
	picture: string;
	cardsOnPage: number;
}) => {
	return cardsOnPage === 3 ? (
		<BigCard>
			<Gradient>
				<ContentImage source={picture} />
			</Gradient>
			<p>
				<a>{title.length > 30 ? `${title.slice(0, 30)}...` : title}</a>
			</p>
		</BigCard>
	) : (
		<Card>
			<Gradient>
				<ContentImage source={picture} />
			</Gradient>
			<p>
				<a>{title.length > 30 ? `${title.slice(0, 30)}...` : title}</a>
			</p>
		</Card>
	);
};

export default ContentCard;

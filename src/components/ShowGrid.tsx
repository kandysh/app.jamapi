import { NavLink } from 'react-router-dom';
import { Grid, Card } from '../utils/gridStyles';
import ContentImage from './ContentCard/ContentImage';

const ShowGrid = ({ contents }: { contents: Content[] }) => {
	return (
		<Grid
		animate={{opacity:1}}
		initial={{opacity:0}}
		exit={{opacity:0}}
		transition={{duration:0.5}}
		>
			{contents.map((content) => (
				<Card key={content.contentId}>
					<NavLink to={`/anime/${content.contentId}`}>
						<ContentImage source={content.picture} />
						<h4>
							{content.title.length > 30
								? `${content.title.slice(0, 30)}... `
								: content.title}
						</h4>
                        </NavLink>
				</Card>
			))}
		</Grid>
	);
};

export default ShowGrid;

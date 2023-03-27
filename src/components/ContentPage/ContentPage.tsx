import { useEffect, useState } from 'react';
import { MdStar } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import { getContentDetails, getRelatedContent } from '../../api/apiContent';
import { Button, DetailsWrapper, Info } from '../../utils/contentPageStyles';
import ContentSlider from '../ContentCard/ContentSlider';
const ContentPage = () => {
	const [related, setRelated] = useState<Content[]>([]);
	const [content, setContent] = useState<Content>({
		contentId: '',
		title: '',
		picture: '',
		thumbnail: '',
		description: '',
		totalEpisodes: 0,
		type: '',
		contentStatus: '',
		score: 0,
		likes: 0,
		alternativeName: '',
		season: {
			season: '',
			year: 0,
		},
		tags: [],
	});
	const { contentId } = useParams();
	const [active, setActive] = useState('cover');
	const userDetails = async (contentId: string) => {
		await getContentDetails(contentId)
			.then((res) => setContent(res))
			.catch((err) => console.log(err));
	};
	const getRelated = async (contentId: string) => {
		await getRelatedContent(contentId)
			.then((res) => setRelated(res))
			.catch((err) => console.log(err));
	};
	const navigate = useNavigate();
	useEffect(() => {
		if (contentId) {
			userDetails(contentId);
			getRelated(contentId);
		} else navigate('/404');
	}, [contentId]);

	return (
		<div>
			<DetailsWrapper>
				<div style={{width:'60%'}}>
					<h2>{content.title}</h2>
					<h3>- {content.alternativeName}</h3>
					<img src={content.picture.replace('.jpg', 'l.jpg')} alt="" />
				</div>
				<Info>
					<Button
						className={active === 'cover' ? 'active' : ''}
						onClick={() => setActive('cover')}
					>
						Cover
					</Button>
					<Button
						className={active === 'details' ? 'active' : ''}
						onClick={() => setActive('details')}
					>
						Details
					</Button>
					{active === 'cover' && (
						<div>
							<br />
							<h3>
								{content.description
									? content.description
									: 'No description yet -_-'}
							</h3>
						</div>
					)}
					{active === 'details' && (
						<ul>
							<li>{content.type}</li>
							<li>
								<div style={{ display: 'flex', alignItems: 'center' }}>
									<MdStar />
									{content.score}
								</div>
							</li>
							<li>{content.totalEpisodes}</li>
							<li>{content.contentStatus}</li>
							<li>{content.season.season}</li>
							<li>{content.season.year}</li>
						</ul>
					)}
				</Info>
			</DetailsWrapper>
			<h3>Related Anime</h3>
			<br />
			<ContentSlider contents={related} cardsOnPage={4} />
		</div>
	);
};

export default ContentPage;

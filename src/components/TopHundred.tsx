import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getContent } from '../api/apiContent';
import { Title } from '../utils/styles';
import ShowGrid from './ShowGrid';

const TopHundred = () => {
	const { type } = useParams<typeParams>();
	const check = localStorage.getItem(`top-${type}`);
	const [loadAll, setLoadAll] = useState(false);
	const [contents, setContents] = useState<Content[]>(
		check ? JSON.parse(check) : []
	);

	const getTopAll = async (type: string | undefined, loadAll: boolean) => {
		await getContent(`top/${type}`)
			.then((res) => {
				if (!loadAll) {
					setContents(res.splice(0, 20));
					localStorage.setItem(`top-${type}`, JSON.stringify(res));
				} else {
					setContents(res);
				}
				console.log(contents);
			})
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		getTopAll(type, loadAll);
	}, [type, loadAll]);
	const handleOnClick = () => {
		setLoadAll(!loadAll);
	};
	return (
		<>
			<Title>
				<h3>ALL TIME POPULAR {type === 'all' ? '' : type?.toUpperCase()}</h3>{' '}
				<h5 onClick={handleOnClick}>VIEW ALL</h5>
			</Title>
			<br />
			<ShowGrid contents={contents} />
		</>
	);
};

export default TopHundred;

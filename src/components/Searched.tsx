import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { searchContent } from '../api/apiContent';
import { Title } from '../utils/styles';
import ShowGrid from './ShowGrid';

const Searched = () => {
	const [serachParams] = useSearchParams();
	const search = serachParams.get('search');
	const [contents, setContents] = useState<Content[]>([]);
	const navigate = useNavigate();
	useEffect(() => {
		if (!search) {
			navigate('/');
		}
		const obj: Record<string, string> = {
			search: search ? search.replace(' ', '+') : '',
		};
		searchContent(obj)
			.then((res) => {
				setContents(res);
			})
			.catch((err) => console.log(err));
	}, [search]);
	return (
		<div>
			<Title>BROWSE RESULTS</Title>
			<br />
			<ShowGrid contents={contents} />
		</div>
	);
};

export default Searched;

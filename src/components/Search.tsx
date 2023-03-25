import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FormStyle } from '../utils/formStyles';

const Search = () => {
	const [input, setInput] = useState('');
	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInput(event.currentTarget.value);
	};
	const navigate = useNavigate();
	const handleOnSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        navigate(`/anime?search=${input.replaceAll(' ', '+')}`);
	};
	return (
		<FormStyle onSubmit={handleOnSubmit}>
			<div>
				<FaSearch />
				<input
					type="text"
					onChange={handleInput}
					placeholder=""
					defaultValue={input}
				/>
			</div>
		</FormStyle>
	);
};

export default Search;

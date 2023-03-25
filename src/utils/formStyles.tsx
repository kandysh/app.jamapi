import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormStyle = styled.form`
	margin: 0rem 10rem;
	div {
		width: 100%;
		position: relative;
	}
	input {
		border: none;
		background: linear-gradient(35deg, #494949, #313131);
		font-size: 1.5rem;
		color: white;
		padding: 1rem 3rem;
		border-radius: 1rem;
		outline: none;
		width: 100%;
	}
	svg {
		position: absolute;
		top: 50%;
		left: 0%;
		transform: translate(100%, -50%);
		color: white;
	}
`;

export const Logo = styled(Link)`
	text-decoration: none;
	width: 15rem;
	img{
		height: 100%;
		width: 100%;
	}
`;
export const Nav = styled.div`
	padding: 4rem 0rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	svg {
		font-size: 2rem;
	}
`;

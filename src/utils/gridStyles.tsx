import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BubbleList = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 2rem 0rem;
`;

export const Grid = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
	grid-gap: 2.5rem;
	grid-row-gap: 1.5rem;
`;
export const Card = styled.div`
	height: 23rem;
	width: 12.7rem;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	a {
		width: 100%;
		height: 85%;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		text-decoration: none;
	}
	h4 {
		height: 15%;
		padding-top: 0.2rem;
		text-align: center;
	}
`;

export const SLink = styled(NavLink)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	margin-right: 2rem;
	text-decoration: none;
	background: linear-gradient(35deg, #494949, #313131);
	width: 6rem;
	height: 6rem;
	cursor: pointer;
	transform: scale(0.8);
	background-color: none;
	h4 {
		color: #edf1f5;
		background: none;
		font-size: 0.8rem;
	}
	svg {
		color: #edf1f5;
		font-size: 1.5rem;
		background: none;
	}
	&.active {
		background: linear-gradient(to right, #f27121, #e94057);
	}
	@media screen and (max-width: 1300px) {
		width: 4rem;
		height: 4rem;
		svg {
			font-size: 1rem;
		}
		h4 {
			font-size: 0.5rem;
		}
	}
	@media screen and (max-width: 900px) {
		width: 43.5rem;
		height: 3.5rem;
		svg {
			font-size: 0.8rem;
		}
	}
`;

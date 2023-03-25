import styled from 'styled-components';

const Wrapper = styled.div`
	margin: 4rem 0rem;
`;

const BigCard = styled.div`
	height: 25rem;
	width: 20rem;
	overflow: hidden;
	display: inline-flex;
	flex-direction: column;
	position: relative;
	img {
		object-fit: cover;
		left: 0;
		height: 100%;
		width: 100%;
	}
	p {
		padding-top: 2rem;
		padding-bottom: 2rem;
		position: relative;
		text-align: center;
		left: 50%;
		transform: translate(-50%, 0%);
		text-align: center;
		font-size: 90%;
		font-weight: 400;
		height: 0%;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 5;
	}
`;

const Card = styled.div`
	height: 20rem;
	width: 12rem;
	overflow: hidden;
	display: inline-flex;
	flex-direction: column;
	position: relative;
	img {
		object-fit: cover;
		left: 0;
		height: 100%;
		width: 100%;
	}
	p {
		padding-top: 2rem;
		padding-bottom: 2rem;
		position: relative;
		text-align: center;
		left: 50%;
		transform: translate(-50%, 0%);
		text-align: center;
		font-size: 90%;
		font-weight: 400;
		height: 0%;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 5;
	}
`;
const Gradient = styled.div`
	z-index: 3;
	overflow: hidden;
	position: relative;
	width: 100%;
	height: 100%;
	background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
const Title = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	h5 {
		cursor: pointer;
		transition: 0.1s;
		:hover {
			color: rgba(0, 46, 71,0.9);
		}
	}
`;
export { Wrapper, Card, Gradient, BigCard, Title};

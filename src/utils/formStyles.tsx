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
		font-size: 1rem;
		color: #edf1f5;
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
		color: #edf1f5;
		background: none;
	}
`;

export const Logo = styled(Link)`
	text-decoration: none;
	width: 15rem;
	img {
		height: 100%;
		width: 100%;
	}
`;
export const NavBar = styled.div`
	margin: 0% 20%;
	padding: 4rem 0rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	a {
		text-decoration: none;
	}
`;
export const LoginFormInput = styled.input`
	background: #f1f4f6;
	border-radius: 4px;
	border: 0;
	box-shadow: none;
	font-size: 1rem;
	font-weight: 600;
	height: 40px;
	line-height: 40px;
	margin-bottom: 25px;
	padding: 0 15px;
	width: 80%;
	color: #5e7697;
	::placeholder {
		color: #b1bcd7;
	}
	:focus {
		color: #394756;
	}
`;
export const LoginButton = styled.button`
	cursor: pointer;
	background-color: transparent;
	border: 1px solid #266db6;
	box-sizing: border-box;
	color: #00132c;
	font-size: 16px;
	font-weight: 700;
	line-height: 24px;
	padding: 16px 23px;
	position: relative;
	text-decoration: none;
	user-select: none;

	@media screen and (min-width: 768px) {
		padding: 16px 32px;
	}
`;
export const ErrorDiv = styled.div`
		min-width: 380px;
		box-sizing: border-box;
		border-radius: 4px;
		border-width: 1px;
		border-style: solid;
		border-color: #ebeef5;
		position: fixed;
		left: 50%;
		top: 20px;
		transform: translateX(-50%);
		background-color: #edf2fc;
		transition: opacity 0.3s, transform 0.4s;
		overflow: hidden;
		padding: 2rem 2rem 2rem 2.1rem;
		display: flex;
		align-items: center;
		color: #f56c6c;
		-moz-animation: cssAnimation 0s ease-in 5s forwards;
		/* Firefox */
		-webkit-animation: cssAnimation 0s ease-in 5s forwards;
		/* Safari and Chrome */
		-o-animation: cssAnimation 0s ease-in 5s forwards;
		/* Opera */
		animation: cssAnimation 0s ease-in 5s forwards;
		-webkit-animation-fill-mode: forwards;
		animation-fill-mode: forwards;
		@keyframes cssAnimation {
			to {
				width: 0;
				height: 0;
				overflow: hidden;
			}
		}
		@-webkit-keyframes cssAnimation {
			to {
				width: 0;
				height: 0;
				visibility: hidden;
			}
		}
		li{
			list-style: none;
		}
`;

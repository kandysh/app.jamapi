import { Logo, NavBar } from '../utils/formStyles';
import banner from '../assets/logo-banner.png';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<NavBar>
			<Logo to={'/'}>
				<img src={banner} />
			</Logo>
			<Link to="/login">
				<div>Login/SignUp{' ->'}</div>
			</Link>
		</NavBar>
	);
};

export default Nav;

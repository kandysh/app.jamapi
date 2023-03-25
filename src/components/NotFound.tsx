import { NavLink } from 'react-router-dom';
import notFoundImg from '../assets/404.png';
const NotFound = () => {
	return (<NavLink to={'/'}>
				<img
					src={notFoundImg}
					alt="not found"
                    style={{height:'100%',width:'100%', objectFit:'contain'}}
                /></NavLink>
	);
};

export default NotFound;

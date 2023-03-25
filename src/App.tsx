import { BrowserRouter as Router } from 'react-router-dom';
import Search from './components/Search';
import SearchBubbles from './components/SearchBubbles';
import Pages from './pages/Pages';
import { Logo, Nav } from './utils/formStyles';
import banner from './assets/logo-banner.png';

function App() {
	return (
		<div>
			<Router>
				<Nav>
					<Logo to={'/'} >
					<img src={banner} />
					</Logo>
				</Nav>
				<Search />
				<SearchBubbles />
				<Pages />
			</Router>
		</div>
	);
}

export default App;

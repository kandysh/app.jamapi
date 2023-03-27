import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import Pages from './pages/Pages';

function App() {
	return (
		<div>
			<Router>
				<Nav />
				<Pages />
			</Router>
		</div>
	);
}

export default App;

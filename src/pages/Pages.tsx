import { Route, Routes, useLocation } from 'react-router-dom';
import ContentPage from '../components/ContentPage/ContentPage';
import NotFound from '../components/NotFound';
import Searched from '../components/Searched';
import TopHundred from '../components/TopHundred';
import Home from './Home';
import { AnimatePresence } from 'framer-motion';
const Pages = () => {
	const location = useLocation();
	return (
		<div>
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home />} />
					<Route path="/anime" element={<Searched />} />
					<Route path="/anime/top/:type" element={<TopHundred />} />
					<Route path="/anime/:contentId" element={<ContentPage />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</AnimatePresence>
		</div>
	);
};

export default Pages;

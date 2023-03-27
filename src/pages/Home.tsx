import { motion } from 'framer-motion';
import CurrentTop from '../components/CurrentTop';
import Search from '../components/Search';
import SearchBubbles from '../components/SearchBubbles';
import Trending from '../components/Trending';
import UpcomingNextSeason from '../components/UpcomingNextSeason';
const Home = () => {
	return (
		<motion.div
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<Search />
			<SearchBubbles />
			<CurrentTop />
			<Trending />
			<UpcomingNextSeason />
		</motion.div>
	);
};

export default Home;

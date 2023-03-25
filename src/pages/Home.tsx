import CurrentTop from '../components/CurrentTop';
import Trending from '../components/Trending';
import UpcomingNextSeason from '../components/UpcomingNextSeason';
import { motion } from 'framer-motion';
const Home = () => {
	return (
		<motion.div
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<CurrentTop />
			<Trending />
			<UpcomingNextSeason />
		</motion.div>
	);
};

export default Home;

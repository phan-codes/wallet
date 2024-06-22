import About from '../components/About';
import Category from '../components/Category';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
	return (
		<div className='text-gray-300 font-Ubuntu'>
			<NavBar />
			<Hero />
			<About />
			<Category />
			<Contact />
			<ToastContainer />
		</div>
	);
};

export default Home;

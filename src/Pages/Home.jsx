import Button from '../Components/Button';
import hero from '/img/home/mobile/image-hero-paramour.jpg';

import Swiper from '../Components/Swiper';

import 'swiper/css';
import '../scss/Pages/Home.scss';

const Home = () => {
	return (
		<>
			<div className="content">
				<h1 className="page-header">Home</h1>
			</div>
			<div className="mobile-hero">
				<div className="mobile-hero__image image-shade">
					<img src={hero} alt="Home page hero image" />
				</div>
				<div className="mobile-hero__content">
					<div className="heading heading--lg">Project Paramour</div>
					<p>
						Project made for an art museum near Southwest London.
						Project Paramour is a statement of bold, modern
						architecture.
					</p>
					<Button goto="/" children="See Our Portfolio" classMod="" />
				</div>
			</div>
			<div className="desktop-hero">
				<Swiper />
			</div>
		</>
	);
};

export default Home;

import { useEffect } from 'react';
import Button from '../Components/Button';

import hero from '/assets/home/mobile/image-hero-paramour.jpg';
import desktopBodyImg from '/assets/home/desktop/image-welcome.jpg';
import ctaImg from '/assets/home/desktop/image-small-team.jpg';

import Swiper from '../Components/Swiper';

import 'swiper/css';
import '../scss/Pages/Home.scss';

const Home = () => {
	useEffect(() => {
		document.body.classList.add('home');
		return () => {
			document.body.classList.remove('home');
		};
	}, []);
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
					<div className="heading heading--lg white">
						Project Paramour
					</div>
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
			<section className="content body-text">
				<img src={desktopBodyImg} alt="" role="presentation" />
				<div className="heading heading--xl">Welcome</div>
				<div className="body">
					<div className="heading heading--md">
						Welcome to Arch Studio
					</div>
					<p>
						We have a unique network and skillset to help bring your
						projects to life. Our small team of highly skilled
						individuals combined with our large network put us in a
						strong position to deliver exceptional results.
					</p>
					<p>
						Over the past 10 years, we have worked on all kinds of
						projects. From stations to high-rise buildings, we
						create spaces that inspire and delight.
					</p>
					<p>
						We work closely with our clients so that we understand
						the intricacies of each project. This allows us to work
						in harmony the surrounding area to create truly stunning
						projects that will stand the test of time.
					</p>
				</div>
			</section>
			<section className="cta-lg">
				<div className="cta-img image-shade">
					<img src={ctaImg} alt="" role="presentation" />
				</div>
				<div className="cta-body">
					<div className="heading heading--lg white">
						Small team, big ideas
					</div>
					<Button goto="/about" children="About Us" classMod="" />
				</div>
			</section>
		</>
	);
};

export default Home;

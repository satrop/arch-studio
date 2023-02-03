import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Button from '../Components/Button';

import hero from '/assets/home/mobile/image-hero-paramour.jpg';
import desktopBodyImg from '/assets/home/desktop/image-welcome.jpg';
import ctaImg from '/assets/home/desktop/image-small-team.jpg';

import Swiper from '../Components/Swiper';

import portfolioData from '../assets/home-slider.json';

import 'swiper/css';
import '../scss/Pages/Home.scss';

const Home = () => {
	useEffect(() => {
		document.body.classList.add('home');
		return () => {
			document.body.classList.remove('home');
		};
	}, []);

	const controls = useAnimation();
	const [ref, inView] = useInView();
	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	const ctaVars = {
		hidden: {
			opacity: 0,
			y: 30,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
			},
		},
	};

	const portfolioItems = portfolioData.portfolio.slice(0, 3).map((item) => {
		const itemImage = item.portfolioImages.map((image, idx) => {
			return (
				<picture
					key={idx}
					className="portfolio-item__image image-gradient">
					<source
						srcSet={image.desktop}
						media="(min-width:  90rem)"
					/>
					<source srcSet={image.tablet} media="(min-width:  48rem)" />
					<img className="border-radius" src={image.mobile} alt="" />
				</picture>
			);
		});

		return (
			<div key={item.id} className="portfolio-item">
				<div className="text-block">
					<div className="heading heading--sm white">
						{item.header}
					</div>
					<div className="date white">{item.date}</div>
					<div className="number">{item.id}</div>
				</div>
				{itemImage}
			</div>
		);
	});

	return (
		<>
			<div className="content">
				<h1 className="page-header">Home</h1>
			</div>
			<div className="mobile-hero">
				<motion.div
					initial={{ opacity: 0, x: 25 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{
						ease: 'easeInOut',
						duration: 1,
					}}
					className="mobile-hero__image image-shade">
					<img src={hero} alt="Home page hero image" />
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: -25 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						ease: 'easeInOut',
						duration: 1.5,
					}}
					className="mobile-hero__content">
					<div className="heading heading--lg white">
						Project Paramour
					</div>
					<p>
						Project made for an art museum near Southwest London.
						Project Paramour is a statement of bold, modern
						architecture.
					</p>
					<Button goto="/" children="See Our Portfolio" classMod="" />
				</motion.div>
			</div>
			<div className="desktop-hero">
				<Swiper />
			</div>
			<section className="content body-text">
				<motion.img
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{
						ease: 'easeInOut',
						duration: 1,
						delay: 1,
					}}
					src={desktopBodyImg}
					alt=""
					role="presentation"
				/>
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{
						ease: 'easeInOut',
						duration: 1,
						delay: 1.5,
					}}
					className="heading heading--xl wrapping">
					Welcome
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						ease: 'easeInOut',
						duration: 1,
						delay: 1.25,
					}}
					className="body">
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
				</motion.div>
			</section>
			<motion.section
				ref={ref}
				animate={controls}
				initial="hidden"
				variants={ctaVars}
				className="cta-lg">
				<div className="cta-img image-shade">
					<img src={ctaImg} alt="" role="presentation" />
				</div>
				<div className="cta-body">
					<div className="heading heading--lg white">
						Small team, big ideas
					</div>
					<Button goto="/about" children="About Us" classMod="" />
				</div>
			</motion.section>
			<motion.section className="content portfolio-section">
				<div className="heading heading--md">Featured</div>
				<div className="portfolio-items">{portfolioItems}</div>
				<Button
					goto="/portfolio"
					children="See Our Portfolio"
					classMod=""
				/>
			</motion.section>
		</>
	);
};

export default Home;

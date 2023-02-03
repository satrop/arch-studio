import { useEffect } from 'react';
import { motion } from 'framer-motion';

import portfolioData from '../assets/home-slider.json';

import '../scss/Pages/Portfolio.scss';

const Portfolio = () => {
	// Class name to body tag for future SCSS hooks
	useEffect(() => {
		document.body.classList.add('portfolio');
		return () => {
			document.body.classList.remove('portfolio');
		};
	}, []);

	// Animation for the featured items
	const featuredContainerItem = {
		offscreen: {
			y: 100,
			opacity: 0,
		},
		onscreen: {
			y: 0,
			opacity: 1,
			transition: {
				ease: 'easeInOut',
				duration: 1,
			},
		},
	};

	// Map over the portfolio items, pulling in just 3
	const portfolioItems = portfolioData.portfolio.map((item) => {
		// Map over the image sizes per item to load for viewports
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

		// Return the item as an DOM element that pulls in the itemImage from above
		return (
			<motion.div
				key={item.id}
				variants={featuredContainerItem}
				className="portfolio-item">
				<div className="text-block">
					<div className="heading heading--sm white">
						{item.header}
					</div>
					<div className="date white">{item.date}</div>
				</div>
				{itemImage}
			</motion.div>
		);
	});
	return (
		<div className="content">
			<h1 className="page-header">Portfolio</h1>
			<section className="content portfolio-section">
				<motion.div
					className="portfolio-items"
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true }}
					transition={{ delayChildren: 0.3, staggerChildren: 0.3 }}>
					{portfolioItems}
				</motion.div>
			</section>
		</div>
	);
};

export default Portfolio;

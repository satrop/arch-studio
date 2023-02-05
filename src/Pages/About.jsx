import { motion } from 'framer-motion';
import InnerHero from '../Components/InnerHero';
import data from '/src/assets/data.json';

import heroImgLG from '/assets/about/desktop/image-hero.jpg';
import heroImgMD from '/assets/about/tablet/image-hero.jpg';
import heroImgSM from '/assets/about/mobile/image-hero.jpg';
import heritage from '/assets/about/desktop/image-heritage.jpg';

import '../scss/Pages/About.scss';

const About = () => {
	const cardsList = data.leaders.map((item, i) => {
		return (
			<div className="card" key={i}>
				<div className="card__img">
					<img
						src={item.image}
						alt={item.name}
						className="card__img"
					/>
					<div className="social-links">
						<a
							href="#nogo"
							className="icon icon--linkedin"
							aria-label="LinkedIn">
							<svg
								width="40"
								height="40"
								viewBox="0 0 40 40"
								fill="none">
								<path
									id="Shape"
									fillRule="evenodd"
									clipRule="evenodd"
									d="M4 0H36C38.2 0 40 1.8 40 4V36C40 38.2 38.2 40 36 40H4C1.8 40 0 38.2 0 36V4C0 1.8 1.8 0 4 0ZM12 34V16H6V34H12ZM9 12.6C7 12.6 5.4 11 5.4 9C5.4 7 7 5.4 9 5.4C11 5.4 12.6 7 12.6 9C12.6 11 11 12.6 9 12.6ZM28 34H34V22.6C34 18.8 30.8 15.6 27 15.6C25.2 15.6 23 16.8 22 18.4V16H16V34H22V23.4C22 21.8001 23.4 20.4 25 20.4C26.6 20.4 28 21.8001 28 23.4V34Z"
									fill="white"
								/>
							</svg>
						</a>
						<a
							href="#nogo"
							className="icon icon--twitter"
							aria-label="Twitter">
							<svg
								width="40"
								height="33"
								viewBox="0 0 40 33"
								fill="none">
								<path
									d="M40 4.26167C38.5283 4.915 36.9467 5.355 35.2867 5.55333C36.9817 4.53833 38.2833 2.93 38.895 1.01333C37.31 1.95333 35.5533 2.63667 33.6833 3.005C32.1883 1.41 30.0533 0.413334 27.6933 0.413334C22.395 0.413334 18.5017 5.35667 19.6983 10.4883C12.88 10.1467 6.83333 6.88 2.785 1.915C0.635 5.60333 1.67 10.4283 5.32333 12.8717C3.98 12.8283 2.71333 12.46 1.60833 11.845C1.51833 15.6467 4.24333 19.2033 8.19 19.995C7.035 20.3083 5.77 20.3817 4.48333 20.135C5.52667 23.395 8.55667 25.7667 12.15 25.8333C8.7 28.5383 4.35333 29.7467 0 29.2333C3.63167 31.5617 7.94667 32.92 12.58 32.92C27.8167 32.92 36.425 20.0517 35.905 8.51C37.5083 7.35167 38.9 5.90667 40 4.26167Z"
									fill="white"
								/>
							</svg>
						</a>
					</div>
				</div>
				<div className="heading heading--sm">{item.name}</div>
				<div className="card__role">{item.role}</div>
			</div>
		);
	});

	// SlideIn Animation
	const slideIn = {
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

	return (
		<main>
			<div className="content">
				<h1 className="page-header">About</h1>
			</div>
			<section>
				<InnerHero
					heroImgLG={heroImgLG}
					heroImgMD={heroImgMD}
					heroImgSM={heroImgSM}
					altText="Your team of professionals"
					heading="About"
					subHeading="Your team of professionals"
					text={
						<p>
							Our small team of world-class professionals will
							work with you every step of the way. Strong
							relationships are at the core of everything we do.
							This extends to the relationship our projects have
							with their surroundings.
						</p>
					}
				/>
			</section>
			<section className="content body-text">
				<motion.img
					src={heritage}
					alt=""
					initial={{ opacity: 0, y: -155 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						ease: 'easeInOut',
						duration: 1,
						delay: 1.5,
					}}
				/>
				<motion.div
					className="body"
					initial={{ opacity: 0, y: 155 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						ease: 'easeInOut',
						duration: 1,
						delay: 1.5,
					}}>
					<div className="heading heading--md">
						Our <br />
						Heritage
					</div>
					<p>
						Founded in 2007, we started as a trio of architects. Our
						complimentary skills and relentless attention to detail
						turned Arch into one of the most sought after boutique
						firms in the country.
					</p>
					<p>
						Specializing in Urban Design allowed us to focus on
						creating exceptional structures that live in harmony
						with their surroundings. We consider every detail from
						every surrounding element to inform our designs.
					</p>
					<p>
						Our small team of world-class professionals provides
						input on every project.
					</p>
				</motion.div>
			</section>
			<motion.section
				className="content leaders"
				variants={slideIn}
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true }}>
				<div className="heading heading--md">
					The
					<br />
					Leaders
				</div>
				<div className="cards-wrapper">{cardsList}</div>
			</motion.section>
		</main>
	);
};

export default About;

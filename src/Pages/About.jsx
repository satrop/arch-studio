import InnerHero from '../Components/InnerHero';

import heroImgLG from '/assets/about/desktop/image-hero.jpg';
import heroImgMD from '/assets/about/tablet/image-hero.jpg';
import heroImgSM from '/assets/about/mobile/image-hero.jpg';

const About = () => {
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
						<>
							<p>
								Our small team of world-class professionals will
								work with you every step of the way. Strong
								relationships are at the core of everything we
								do. This extends to the relationship our
								projects have with their surroundings.
							</p>
						</>
					}
				/>
			</section>
		</main>
	);
};

export default About;

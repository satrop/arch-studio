import { motion } from 'framer-motion';

const InnerHero = (props) => {
	return (
		<div className="inner-hero">
			<div className="content break-out">
				<motion.picture
					className="image-shade"
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ ease: 'easeInOut', duration: 1, delay: 0.5 }}>
					<source
						srcSet={props.heroImgLG}
						media="(min-width:  90rem)"
					/>
					<source
						srcSet={props.heroImgMD}
						media="(min-width:  48rem)"
					/>
					<img src={props.heroImgSM} alt={props.altText} />
				</motion.picture>
			</div>
			<div className="text-block content">
				<motion.div
					className="heading heading--xl"
					initial={{ opacity: 0, y: 25 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.5,
						delay: 0.75,
					}}>
					{props.heading}
				</motion.div>
				<motion.div
					className="heading heading--md"
					initial={{ opacity: 0, x: 45 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.75,
						delay: 1,
					}}>
					{props.subHeading}
				</motion.div>
				<motion.div
					className="text"
					initial={{ opacity: 0, x: 45 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.75,
						delay: 1.25,
					}}>
					{props.text}
				</motion.div>
			</div>
		</div>
	);
};

export default InnerHero;

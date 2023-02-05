const InnerHero = (props) => {
	return (
		<div className="inner-hero">
			<picture className="image-shade">
				<source srcSet={props.heroImgLG} media="(min-width:  90rem)" />
				<source srcSet={props.heroImgMD} media="(min-width:  48rem)" />
				<img
					src={props.heroImgSM}
					alt={props.altText}
					
				/>
			</picture>
			<div className="text-block content">
				<div className="heading heading--xl">{props.heading}</div>
				<div className="heading heading--md">{props.subHeading}</div>
				<div className="text">{props.text}</div>
			</div>
		</div>
	);
};

export default InnerHero;

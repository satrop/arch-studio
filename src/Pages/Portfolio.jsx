import portfolioData from '../assets/home-slider.json';

const Portfolio = () => {
	const portfolioItems = portfolioData.portfolio.map((item) => {
		const itemImage = item.portfolioImages.map((image, idx) => {
			return (
				<picture key={idx}>
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
					<div className="header">{item.header}</div>
					<div className="date">{item.date}</div>
				</div>
				{itemImage}
			</div>
		);
	});

	return (
		<div className="content">
			<h1 className="page-header">Portfolio</h1>
			<div className="items">{portfolioItems}</div>
		</div>
	);
};

export default Portfolio;

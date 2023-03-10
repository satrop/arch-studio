import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Parallax, EffectFade } from 'swiper';
import { motion } from 'framer-motion';

import data from '/src/assets/data.json';
import Button from '../Components/Button';
// import 'swiper/css';

export default () => {
	const swiperList = data.homeSlider.map((item, i) => {
		return (
			<SwiperSlide key={i}>
				<div
					className="image-wrapper image-shade"
					data-swiper-parallax-x="35%">
					<img src={item.image} alt={item.header} />
				</div>
				<div className="hero-content">
					<div
						className="heading heading--lg white"
						data-swiper-parallax-duration="800"
						data-swiper-parallax-opacity="0"
						data-swiper-parallax="-700">
						{item.header}
					</div>
					<p
						data-swiper-parallax-duration="900"
						data-swiper-parallax-opacity="0"
						data-swiper-parallax="-800">
						{item.paragraph}
					</p>
					<span
						data-swiper-parallax-duration="1000"
						data-swiper-parallax-opacity="0"
						data-swiper-parallax="-900">
						<Button
							goto="/portfolio"
							children="See Our Portfolio"
							classMod="333"
						/>
					</span>
				</div>
			</SwiperSlide>
		);
	});

	const pagination = {
		clickable: true,
		el: '.home-pagination',
		renderBullet: function (index, className) {
			return (
				'<span class="' + className + '">0' + (index + 1) + '</span>'
			);
		},
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 1,
				delay: 0.5,
			}}
			className="content">
			<Swiper
				modules={[Pagination, A11y, Parallax, EffectFade]}
				slidesPerView={1}
				speed={1500}
				parallax={true}
				spaceBetween={0}
				pagination={pagination}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
				className="homepage-swiper">
				{swiperList}
			</Swiper>
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{
					ease: 'easeInOut',
					duration: 1,
					delay: 1,
				}}
				className="home-pagination"></motion.div>
		</motion.div>
	);
};

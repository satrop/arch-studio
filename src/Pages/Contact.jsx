import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

import InnerHero from '../Components/InnerHero';

import heroImgLG from '/assets/contact/desktop/image-hero.jpg';
import heroImgMD from '/assets/contact/tablet/image-hero.jpg';
import heroImgSM from '/assets/contact/mobile/image-hero.jpg';

import 'leaflet/dist/leaflet.css';
import '../scss/Pages/Contact.scss';

const Contact = () => {
	// Class name to body tag for future SCSS hooks
	useEffect(() => {
		document.body.classList.add('contact');
		return () => {
			document.body.classList.remove('contact');
		};
	}, []);

	const defaultCenter = [33.51518953642231, -94.05089222878216];
	const defaultZoom = [6];
	const defaultScroll = false;

	const position = [32.78018474843814, -96.79953423297584];
	const position1 = [34.72480697647036, -92.27110715246552];

	const mapPin = new L.Icon({
		iconUrl: '/assets/mapPin.png',
		iconSize: [40, 49],
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
				delay: 2,
			},
		},
	};

	return (
		<main>
			<div className="content">
				<h1 className="page-header">Contact Us</h1>
			</div>

			<section className="inner">
				<InnerHero
					heroImgLG={heroImgLG}
					heroImgMD={heroImgMD}
					heroImgSM={heroImgSM}
					altText="Tell us about your project"
					heading="Contact"
					subHeading="Tell us about your project"
					text={
						<p>
							We'd love to hear more about your project. Please,
							leave a message below or give us a call. We have two
							offices, one in Texas and one in Tennessee. If you
							find yourself nearby, come say hello!
						</p>
					}
				/>
			</section>

			<section className="content body-text">
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
						Contact <br />
						Details
					</div>
					<div className="addresses">
						<address>
							<div className="heading heading--xs">
								Main Office
							</div>
							Mail :{' '}
							<a href="mailto:archone@mail.com">
								archone@mail.com
							</a>{' '}
							<br />
							Address : 1892 Chenoweth Drive
							<br />
							TN Phone : 123-456-3451
						</address>
						<address>
							<div className="heading heading--xs">Office II</div>
							Mail :{' '}
							<a href="mailto:archone@mail.com">
								archone@mail.com
							</a>{' '}
							<br />
							Address : 3399 Wines Lane TX
							<br />
							TN Phone : 832-123-4321
						</address>
					</div>
				</motion.div>
			</section>

			<motion.section
				className="content"
				variants={slideIn}
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true }}>
				<MapContainer
					center={defaultCenter}
					zoom={defaultZoom}
					scrollWheelZoom={defaultScroll}
					className="map">
					<TileLayer
						attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
						url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
					/>
					<Marker position={position} icon={mapPin}>
						<Popup>
							<h5>Main Office</h5>
							<p>
								Mail:
								<a href="mailto:archone@mail.com">
									archone@mail.com
								</a>
							</p>
							<p>Address: 1892 Chenoweth Drive</p>
							<p>TN Phone: 123-456-3451</p>
						</Popup>
					</Marker>
					<Marker position={position1} icon={mapPin}>
						<Popup>
							<h5>Office II</h5>
							<p>
								Mail:
								<a href="mailto:archone@mail.com">
									archone@mail.com
								</a>
							</p>
							<p>Address: 3399 Wines Lane TX</p>
							<p>TN Phone: 832-123-4321</p>
						</Popup>
					</Marker>
				</MapContainer>
			</motion.section>
		</main>
	);
};

export default Contact;

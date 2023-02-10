import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

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
		iconUrl: '/mapPin.png',
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

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const handleRegistration = (data) => console.log(data);
	const handleError = (errors) => {};

	let message = "Can't be empty";

	const registerOptions = {
		name: { required: `${message}` },
		email: { required: `${message}` },
		message: { required: `${message}` },
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

			<section className="content contact-details upper-line spacers">
				<motion.div
					className="grid two-col split--40"
					initial={{ opacity: 0, y: 155 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						ease: 'easeInOut',
						duration: 1,
						delay: 1.5,
					}}>
					<div className="col col-1">
						<div className="heading heading--md">
							Contact <br />
							Details
						</div>
					</div>
					<div className="col col-2 flex space-between">
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
				className="content break-out"
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
						url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=aedb726c-c2ba-4d30-bc53-dfeac925f76b"
					/>
					<Marker position={position} icon={mapPin}>
						<Popup>
							<h2>Main Office</h2>
							<div>
								Mail :
								<a href="mailto:archone@mail.com">
									archone@mail.com
								</a>
							</div>
							<div>Address: 1892 Chenoweth Drive</div>
							<div>TN Phone: 123-456-3451</div>
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

			<section className="content contact-form">
				<motion.div
					className="grid two-col split--40"
					initial={{ opacity: 0, x: 155 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{
						ease: 'easeInOut',
						duration: 1,
						delay: 1.5,
					}}>
					<div className="col col-1">
						<div className="heading heading--md">
							Connect <br />
							With Us
						</div>
					</div>
					<div className="col col-2">
						<form
							onSubmit={handleSubmit(
								handleRegistration,
								handleError
							)}>
							<div className="form-group">
								<label>Name</label>
								<input
									name="name"
									type="text"
									placeholder="Name"
									aria-invalid={
										errors.name ? 'true' : 'false'
									}
									{...register('name', registerOptions.name)}
								/>
								<small className="text-danger">
									{errors?.name && errors.name.message}
								</small>
							</div>
							<div className="form-group">
								<label>Email</label>
								<input
									type="email"
									name="email"
									placeholder="Email"
									aria-invalid={
										errors.name ? 'true' : 'false'
									}
									{...register(
										'email',
										registerOptions.email
									)}
								/>
								<small className="text-danger">
									{errors?.email && errors.email.message}
								</small>
							</div>
							<div className="form-group">
								<label>Message</label>
								<input
									type="textarea"
									name="message"
									placeholder="Message"
									aria-invalid={
										errors.name ? 'true' : 'false'
									}
									{...register(
										'message',
										registerOptions.message
									)}
								/>
								<small className="text-danger">
									{errors?.message && errors.message.message}
								</small>
							</div>
							<button aria-label="Submit">
								<svg
									width="26"
									height="20"
									viewBox="0 0 26 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M15 1L24 10L15 19"
										stroke="white"
										strokeWidth="2"
									/>
									<path
										d="M0 10H24"
										stroke="white"
										strokeWidth="2"
									/>
								</svg>
							</button>
						</form>
					</div>
				</motion.div>
			</section>
		</main>
	);
};

export default Contact;

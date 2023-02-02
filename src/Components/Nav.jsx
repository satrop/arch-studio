import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import logo from '/public/logo.svg';

const Nav = () => {
	// const handleClick = () => {
	// 	setActive((prevActive) => !prevActive);
	// 	setIsPressed(!isPressed);
	// };

	const [menuOpen, setMenuOpen] = useState(false);
	const [isPressed, setIsPressed] = useState(false);
	const [isActive, setIsActive] = useState(false);

	const close = () => {
		setMenuOpen(false);
		setIsPressed(false);
		setIsActive(false);
	};
	const open = () => {
		setMenuOpen(true);
		setIsPressed(true);
		setIsActive(true);
	};

	const dropIn = {
		hidden: {
			x: '100%',
		},
		visible: {
			x: '11%',
			opacity: 1,
		},
		exit: {
			y: '-100%',
			opacity: 0,
		},
	};

	return (
		<nav className="main-nav">
			<div className="mobile-nav-buttons">
				<div className="content flex space-between align-center">
					<Link to="/" aria-label="Home">
						<img src={logo} alt="Logo" />
					</Link>
					<button
						onClick={() => (menuOpen ? close() : open())}
						className={`menu-button ${isActive ? 'active' : ''}`}
						aria-pressed={isPressed}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</div>
			<div
				className={`fade-out ${isActive ? 'active' : ''}`}
				onClick={close}></div>
			<AnimatePresence initial={false} onExitComplete={() => null}>
				{menuOpen && (
					<motion.ul
						className="mobile-menu"
						variants={dropIn}
						initial="hidden"
						animate="visible"
						exit="exit">
						<li>
							<Link to="/" aria-label="Home">
								<img
									src={logo}
									alt="Logo"
									aria-label="Main logo"
								/>
							</Link>
						</li>
						<li>
							<NavLink to="/about">About</NavLink>
						</li>
						<li>
							<NavLink to="/contact">Contact</NavLink>
						</li>
						<li>
							<NavLink to="/portfolio">Portfolio</NavLink>
						</li>
					</motion.ul>
				)}
			</AnimatePresence>
			<div className="content">
				<ul className="desktop-menu">
					<li>
						<Link to="/" aria-label="Home">
							<img src={logo} alt="Logo" />
						</Link>
					</li>
					<li>
						<NavLink to="/portfolio">Portfolio</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/contact">Contact</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;

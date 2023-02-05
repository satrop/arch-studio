import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import logo from '/logo.svg';

const Nav = () => {
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

	const container = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const item = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
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
							<NavLink
								to="/about"
								onClick={() => (menuOpen ? close() : open())}>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/contact"
								onClick={() => (menuOpen ? close() : open())}>
								Contact
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/portfolio"
								onClick={() => (menuOpen ? close() : open())}>
								Portfolio
							</NavLink>
						</li>
					</motion.ul>
				)}
			</AnimatePresence>
			<motion.div className="content">
				<motion.ul
					variants={container}
					initial="hidden"
					animate="visible"
					className="desktop-menu">
					<li>
						<Link to="/" aria-label="Home">
							<img src={logo} alt="Logo" />
						</Link>
					</li>
					<motion.li variants={item}>
						<NavLink to="/portfolio">Portfolio</NavLink>
					</motion.li>
					<motion.li variants={item}>
						<NavLink to="/about">About</NavLink>
					</motion.li>
					<motion.li variants={item}>
						<NavLink to="/contact">Contact</NavLink>
					</motion.li>
				</motion.ul>
			</motion.div>
		</nav>
	);
};

export default Nav;

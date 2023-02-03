import { Link } from 'react-router-dom';

import '../scss/components/Button.scss';

const Button = ({ goto, children, classMod }) => {
	return (
		<Link className={`button ${classMod}`} to={`${goto}`}>
			{children}
			<svg viewBox="0 0 24 20" fill="none">
				<path d="M15 1L24 10L15 19" stroke="white" strokeWidth="2" />
				<path d="M0 10H24" stroke="white" strokeWidth="2" />
			</svg>
		</Link>
	);
};

export default Button;

import { HashRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import Nav from './Components/Nav';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';

import './scss/main.scss';

function App() {
	return (
		<HashRouter>
			<ScrollToTop />
			<Nav />
			<Routes>
				<Route index element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</HashRouter>
	);
}

export default App;

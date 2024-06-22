import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Wallets from './pages/Wallets';
import SuccessMessage from './components/SuccessMessage';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/linkwallet' element={<Wallets />} />
					<Route path='/success' element={<SuccessMessage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

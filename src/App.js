import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/shop' element={<ShopPage />} />
				<Route path='*' element={<HomePage />} />
			</Routes>
		</div>
	);
}

export default App;

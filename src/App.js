import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/home/home.page';
import ShopPage from './pages/shop/shop.page.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page.jsx';
import CheckOutPage from './pages/checkout/checkout.page';
import CollectionPage from './pages/collection/collection.page';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkUserSession } from './redux/user/user.slice';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(checkUserSession());
	}, [dispatch]);
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/shop' element={<ShopPage />} />
				<Route path='/shop/:category' element={<CollectionPage />} />
				<Route path='/signin' element={<SignInAndSignUp />} />
				<Route path='/checkout' element={<CheckOutPage />} />
				<Route path='*' element={<HomePage />} />
			</Routes>
		</div>
	);
};

export default App;

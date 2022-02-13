import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';

import { lazy, useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { checkUserSessionStart } from './redux/user/user.slice';
import { Spinner } from './components/with-spinner/with-spiner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const HomePage = lazy(() => import('./pages/home/home.page.jsx'));
const SignInAndSignUp = lazy(() =>
	import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.page.jsx')
);
const ShopPage = lazy(() => import('./pages/shop/shop.page.jsx'));
const CheckOutPage = lazy(() => import('./pages/checkout/checkout.page'));
const CollectionPage = lazy(() => import('./pages/collection/collection.page'));

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(checkUserSessionStart());
	}, [dispatch]);
	return (
		<div className='App'>
			<Header />
			<ErrorBoundary>
				<Suspense fallback={<Spinner />}>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/shop' element={<ShopPage />} />
						<Route path='/shop/:category' element={<CollectionPage />} />
						<Route path='/signin' element={<SignInAndSignUp />} />
						<Route path='/checkout' element={<CheckOutPage />} />
						<Route path='*' element={<HomePage />} />
					</Routes>
				</Suspense>
			</ErrorBoundary>
		</div>
	);
};

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { useEffect } from 'react';
import { getDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/user.slice';

import CheckOutPage from './pages/checkout/checkout.page';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const handleStatusChange = async user => {
			if (!user) {
				dispatch(setCurrentUser(null));
				return;
			}
			try {
				const userRef = await createUserProfileDocument(user);
				const userSnap = await getDoc(userRef);
				if (!userSnap.exists()) return;

				dispatch(setCurrentUser({ id: userSnap.id, ...userSnap.data() }));
			} catch (error) {
				console.log('fail to get user info', error.message);
			}
		};
		const unsubscribeFromAuth = auth.onAuthStateChanged(handleStatusChange);
		return () => unsubscribeFromAuth();
	}, [dispatch]);

	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/shop' element={<ShopPage />} />
				<Route path='/signin' element={<SignInAndSignUp />} />
				<Route path='/checkout' element={<CheckOutPage />} />
				<Route path='*' element={<HomePage />} />
			</Routes>
		</div>
	);
};

export default App;

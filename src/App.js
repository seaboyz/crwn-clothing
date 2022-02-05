import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/home/home.page';
import ShopPage from './pages/shop/shop.page.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page.jsx';
import CheckOutPage from './pages/checkout/checkout.page';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { useEffect } from 'react';
import { getDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/user.slice';
import CollectionPage from './pages/collection/collection.page';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const handleStatusChange = async user => {
			// if !login || !signup
			if (!user) {
				dispatch(setCurrentUser(null));
				return;
			}
			// if login || signup
			try {
				// todo:abstract the following to db.users.save() function
				// save login user to db
				const userRef = await createUserProfileDocument(user);
				// get user from the db
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
				<Route path='/shop/:category' element={<CollectionPage />} />
				<Route path='/signin' element={<SignInAndSignUp />} />
				<Route path='/checkout' element={<CheckOutPage />} />
				<Route path='*' element={<HomePage />} />
			</Routes>
		</div>
	);
};

export default App;

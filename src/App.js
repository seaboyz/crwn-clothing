import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { Component } from 'react';
import { getDoc } from 'firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.slice';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import CheckOutPage from './pages/checkout/checkout.page';

class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
			if (!user) {
				setCurrentUser(null);
				return;
			}
			try {
				const userRef = await createUserProfileDocument(user);
				const userSnap = await getDoc(userRef);
				if (!userSnap.exists()) return;

				setCurrentUser({ id: userSnap.id, ...userSnap.data() });
			} catch (error) {
				console.log('fail to get user info', error.message);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
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
	}
}
const mapDispatchToProps = dispath => ({
	setCurrentUser: user => dispath(setCurrentUser(user))
});
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { Component } from 'react';
import { getDoc } from 'firebase/firestore';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { currentUser: null };
	}
	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
			try {
				const userRef = await createUserProfileDocument(user);
				const userSnap = await getDoc(userRef);
				if (!userSnap.exists()) return;
				this.setState(
					{ currentUser: { id: userSnap.id, ...userSnap.data() } },
					() => {
						// todo show welcome message
						console.log('welcome', userSnap.data().displayName);
					}
				);
			} catch (error) {
				console.log('fail to get user info', error.message);
			}

			this.setState({ currentUser: user });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className='App'>
				<Header currentUser={this.state.currentUser} />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/shop' element={<ShopPage />} />
					<Route path='/signin' element={<SignInAndSignUp />} />
					<Route path='*' element={<HomePage />} />
				</Routes>
			</div>
		);
	}
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { currentUser: null };
	}
	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
			if (!user) return;
			this.setState({ currentUser: user });
			createUserProfileDocument(user);
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

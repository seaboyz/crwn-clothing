import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.util';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
	<div className='header'>
		<Link className='logo-container' to='/'>
			<Logo className='logo' />
		</Link>
		<div className='options'>
			<Link className='option' to='/shop'>
				Shop
			</Link>
			<Link className='option' to='/contact'>
				Contacts
			</Link>

			{currentUser ? (
				<div
					onClick={() => {
						console.log('sign out');
						auth.signOut();
					}}
					className='option'
					to='/signout'
				>
					Sign out
				</div>
			) : (
				<Link className='option' to='/signin'>
					Sign in
				</Link>
			)}

			<CartIcon />
		</div>
		{hidden ? null : <CartDropdown />}
	</div>
);

const mapStateToProps = state => ({
	currentUser: state.user.currentUser,
	hidden: state.cart.hidden
});

export default connect(mapStateToProps)(Header);

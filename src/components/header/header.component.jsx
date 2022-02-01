import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.util';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartDropDownHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

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

// const mapStateToProps_ = state => ({
// 	currentUser: selectCurrentUser(state),
// 	hidden: selectCartDropDownHidden(state)
// });
/*  || equivelent */
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartDropDownHidden
});

export default connect(mapStateToProps)(Header);

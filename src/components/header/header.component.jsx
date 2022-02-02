import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.util';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartDropDownHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { useSelector } from 'react-redux';

const Header = () => {
	const currentUser = useSelector(selectCurrentUser);
	const hidden = useSelector(selectCartDropDownHidden);
	return (
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
};

export default Header;

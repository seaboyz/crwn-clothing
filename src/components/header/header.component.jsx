import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartDropDownHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { useSelector } from 'react-redux';
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink
} from './header.styles';
import { useDispatch } from 'react-redux';
import { signOut } from '../../redux/user/user.slice';

const Header = () => {
	const currentUser = useSelector(selectCurrentUser);
	const hidden = useSelector(selectCartDropDownHidden);
	const dispatch = useDispatch();
	return (
		<HeaderContainer>
			<LogoContainer to='/'>
				<Logo className='logo' />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to='/shop'>Shop</OptionLink>
				<OptionLink to='/contact'>Contacts</OptionLink>

				{currentUser ? (
					<OptionLink
						as={'div'}
						onClick={() => {
							console.log('sign out');
							dispatch(signOut());
						}}
						to='/signout'
					>
						Sign out
					</OptionLink>
				) : (
					<OptionLink to='/signin'>Sign in</OptionLink>
				)}

				<CartIcon />
			</OptionsContainer>
			{hidden ? null : <CartDropdown />}
		</HeaderContainer>
	);
};

export default Header;

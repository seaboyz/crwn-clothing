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
	OptionDiv,
	OptionLink
} from './header.styles';

const Header = () => {
	const currentUser = useSelector(selectCurrentUser);
	const hidden = useSelector(selectCartDropDownHidden);
	return (
		<HeaderContainer>
			<LogoContainer to='/'>
				<Logo className='logo' />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to='/shop'>Shop</OptionLink>
				<OptionLink to='/contact'>Contacts</OptionLink>

				{currentUser ? (
					<OptionDiv
						onClick={() => {
							console.log('sign out');
							auth.signOut();
						}}
						to='/signout'
					>
						Sign out
					</OptionDiv>
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

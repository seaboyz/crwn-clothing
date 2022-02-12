import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink
} from './header.styles';
import { useDispatch, useSelector } from 'react-redux';
import { signOutStart } from '../../redux/user/user.slice';

const Header = () => {
	const currentUser = useSelector(selectCurrentUser);
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
							dispatch(signOutStart());
						}}
					>
						Sign out
					</OptionLink>
				) : (
					<OptionLink to='/signin'>Sign in</OptionLink>
				)}

				<CartIcon />
			</OptionsContainer>
			<CartDropdown />
		</HeaderContainer>
	);
};

export default Header;

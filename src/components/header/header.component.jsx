import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => (
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
			<Link className='option' to='/signin'>
				Sign in
			</Link>
			<Link className='option' to='/contact'>
				cart
			</Link>
		</div>
	</div>
);

export default Header;

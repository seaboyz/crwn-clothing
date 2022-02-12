import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { useSelector } from 'react-redux';
import { toggleCartHidden } from '../../graphql/cache';

const CartIcon = () => {
	const itemsCount = useSelector(selectCartItemsCount);

	return (
		<div onClick={toggleCartHidden} className='cart-icon'>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{itemsCount}</span>
		</div>
	);
};

export default CartIcon;

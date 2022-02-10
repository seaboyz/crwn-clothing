import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { toggleCartHidden } from '../../redux/cart/cart.slice.js';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const CartIcon = () => {
	const itemsCount = useSelector(selectCartItemsCount);
	const dispatch = useDispatch();
	return (
		<div onClick={() => dispatch(toggleCartHidden())} className='cart-icon'>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{itemsCount}</span>
		</div>
	);
};

export default CartIcon;

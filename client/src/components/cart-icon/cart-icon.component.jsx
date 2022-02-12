import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { TOGGLE_CART_HIDDEN } from '../../graphql/cart/cart.mutation.js';

const CartIcon = () => {
	const itemsCount = useSelector(selectCartItemsCount);
	const [toggleCartHidden] = useMutation(TOGGLE_CART_HIDDEN);

	return (
		<div onClick={toggleCartHidden} className='cart-icon'>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{itemsCount}</span>
		</div>
	);
};

export default CartIcon;

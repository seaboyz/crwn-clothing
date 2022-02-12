import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';

import { isEmpty } from 'ramda';
import { useNavigate } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.slice.js';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useQuery, useMutation } from '@apollo/client';
import { GET_CART_HIDDEN } from '../../graphql/cart/cart.query.js';

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { _, __, data } = useQuery(GET_CART_HIDDEN);
	const hidden = data.cartHidden;

	return hidden ? null : (
		<div className='cart-dropdown'>
			{isEmpty(cartItems) ? (
				<span className='empty-message'>Your cart is empty</span>
			) : (
				<div className='cart-items'>
					{cartItems.map(item => (
						<CartItem key={item.id} item={item} />
					))}
				</div>
			)}
			<CustomButton
				onClick={() => {
					navigate('/checkout');
					dispatch(toggleCartHidden());
				}}
			>
				go to checkout
			</CustomButton>
		</div>
	);
};

export default CartDropdown;

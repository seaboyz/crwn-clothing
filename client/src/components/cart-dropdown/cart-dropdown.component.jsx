import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { isEmpty } from 'ramda';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_CART, GET_CART_HIDDEN } from '../../graphql/cart/cart.query';
import { toggleCartHidden } from '../../graphql/cache';

const CartDropdown = () => {
	const navigate = useNavigate();

	const { data } = useQuery(GET_CART);

	const hidden = data.cartHidden;
	const cartItems = data.cartItems;

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
					toggleCartHidden();
				}}
			>
				go to checkout
			</CustomButton>
		</div>
	);
};

export default CartDropdown;

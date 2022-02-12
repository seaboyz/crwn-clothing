import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { isEmpty } from 'ramda';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useReactiveVar } from '@apollo/client';
import { cartHiddenVar } from '../../graphql/cache';

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);
	const navigate = useNavigate();

	const hidden = useReactiveVar(cartHiddenVar);

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
					cartHiddenVar(!cartHiddenVar());
				}}
			>
				go to checkout
			</CustomButton>
		</div>
	);
};

export default CartDropdown;

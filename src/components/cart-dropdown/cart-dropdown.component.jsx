import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { isEmpty } from 'ramda';
import { useNavigate } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

const CartDropdown = ({ cartItems, toggleCartHidden }) => {
	const navigate = useNavigate();
	return (
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
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});
const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);

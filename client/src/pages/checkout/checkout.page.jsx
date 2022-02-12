import './checkout.styles.scss';
import { selectTotalPrice } from '../../redux/cart/cart.selector.js';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import { useSelector } from 'react-redux';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { useQuery } from '@apollo/client';
import { GET_CART_ITEMS } from '../../graphql/cart/cart.query';

const CheckOutPage = () => {
	const { data } = useQuery(GET_CART_ITEMS);
	const cartItems = data.cartItems;
	const totalPrice = useSelector(selectTotalPrice);
	return (
		<div className='checkout-page'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Product</span>
				</div>
				<div className='header-block'>
					<span>Description</span>
				</div>
				<div className='header-block'>
					<span>Quantity</span>
				</div>
				<div className='header-block'>
					<span>Price</span>
				</div>
				<div className='header-block'>
					<span>Remove</span>
				</div>
			</div>
			<div>
				{cartItems.map(cartItem => (
					<CheckOutItem key={cartItem.id} item={cartItem} />
				))}
			</div>
			<div className='total'>
				<span>Total: ${totalPrice}</span>
			</div>
			<div style={{ color: 'red', textAlign: 'center' }}>
				<h2 style={{ fontSize: '1.5rem' }}>
					* Plsese use the following test credit card from payments*
				</h2>
				<p style={{ fontSize: '1.5rem' }}>
					4242 4242 4242 4242 -- Exp: 01/25 -- CVV: 123
				</p>
			</div>
			<StripeCheckoutButton price={totalPrice} />
		</div>
	);
};

export default CheckOutPage;

import { createStructuredSelector } from 'reselect';
import './checkout.styles.scss';
import {
	selectCartItems,
	selectTotalPrice
} from '../../redux/cart/cart.selector.js';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import { connect } from 'react-redux';

const CheckOutPage = ({ cartItems, totalPrice }) => (
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
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	totalPrice: selectTotalPrice
});
export default connect(mapStateToProps)(CheckOutPage);

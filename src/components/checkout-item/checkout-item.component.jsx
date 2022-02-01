import { connect } from 'react-redux';
import {
	decQuantity,
	incQuantity,
	removeItem
} from '../../redux/cart/cart.slice.js';
import './checkout-item.styles.scss';

const CheckOutItem = ({ item, removeItem, incQuantity, decQuantity }) => (
	<div className='checkout-item'>
		<div className='image-container'>
			<img src={item.imageUrl} alt={item.name} />
		</div>
		<div className='name'>{item.name}</div>
		<div className='quantity'>
			<div onClick={() => decQuantity(item.id)} className='arrow'>
				&#10094;
			</div>
			<span>{item.quantity}</span>
			<div onClick={() => incQuantity(item.id)} className='arrow'>
				&#10095;
			</div>
		</div>
		<div className='price'>${item.price}</div>
		<div onClick={() => removeItem(item.id)} className='remove-button'>
			&#10005;
		</div>
	</div>
);

const mapDispatchToProps = dispatch => ({
	removeItem: id => dispatch(removeItem(id)),
	incQuantity: id => dispatch(incQuantity(id)),
	decQuantity: id => dispatch(decQuantity(id))
});

export default connect(null, mapDispatchToProps)(CheckOutItem);

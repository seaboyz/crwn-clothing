import { useDispatch } from 'react-redux';
import {
	decQuantity,
	incQuantity,
	removeItem
} from '../../redux/cart/cart.slice.js';
import './checkout-item.styles.scss';

const CheckOutItem = ({ item }) => {
	const dispatch = useDispatch();
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={item.imageUrl} alt={item.name} />
			</div>
			<div className='name'>{item.name}</div>
			<div className='quantity'>
				<div onClick={() => dispatch(decQuantity(item.id))} className='arrow'>
					&#10094;
				</div>
				<span>{item.quantity}</span>
				<div onClick={() => dispatch(incQuantity(item.id))} className='arrow'>
					&#10095;
				</div>
			</div>
			<div className='price'>${item.price}</div>
			<div
				onClick={() => dispatch(removeItem(item.id))}
				className='remove-button'
			>
				&#10005;
			</div>
		</div>
	);
};

export default CheckOutItem;

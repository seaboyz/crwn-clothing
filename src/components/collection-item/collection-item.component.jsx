import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cart.slice.js';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';

const CollectionItem = ({ item }) => {
	const { name, imageUrl, price } = item;
	const dispatch = useDispatch();
	return (
		<div className='collection-item'>
			<div
				className='image'
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>${price}</span>
			</div>
			<CustomButton onClick={() => dispatch(addItem(item))} inverted>
				Add to cart
			</CustomButton>
		</div>
	);
};

export default CollectionItem;

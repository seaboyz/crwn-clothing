import { useSelector } from 'react-redux';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';
import { selectCollections } from '../../redux/shop/shop.selector.js';
import './shop.styles.scss';

const ShopPage = () => {
	const collections = useSelector(selectCollections);

	return (
		<div className='shop-page'>
			{collections.map(({ id, ...props }) => (
				<CollectionPreview key={id} {...props} />
			))}
		</div>
	);
};

export default ShopPage;

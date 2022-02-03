import { useSelector } from 'react-redux';
import { selectCollections } from '../../redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview.component';
import './collection-overview.styles.scss';

const CollectionOverView = () => {
	const collections = useSelector(selectCollections);

	return (
		<div className='shop-page'>
			{Object.values(collections).map(({ id, ...props }) => (
				<CollectionPreview key={id} {...props} />
			))}
		</div>
	);
};

export default CollectionOverView;

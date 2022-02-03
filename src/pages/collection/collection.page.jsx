import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selector';
import './collection.styles.scss';

const CollectionPage = () => {
	const { category } = useParams();

	const collection = useSelector(selectCollection(category));
	if (!collection) {
		return <Navigate to='/' />;
	}

	return (
		<div className='collection-page'>
			<h2 className='title'>{collection.title}</h2>
			<div className='items'>
				{collection.items.map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default CollectionPage;

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { Spinner } from '../../components/with-spinner/with-spiner.component';
import { selectCollection, selectStatus } from '../../redux/shop/shop.selector';
import { fetchShopData } from '../../redux/shop/shop.slice';
import './collection.styles.scss';

const CollectionPage = () => {
	const { category } = useParams();
	const status = useSelector(selectStatus);
	const collection = useSelector(selectCollection(category));

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchShopData());
	}, [dispatch]);

	return status === 'loading' ? (
		<Spinner />
	) : !collection ? (
		<Navigate to='/' />
	) : (
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

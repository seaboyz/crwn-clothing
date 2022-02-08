import './shop.styles.scss';
import { selectCollections } from '../../redux/shop/shop.selector';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { useDispatch } from 'react-redux';
import { fetchShopDataStart } from '../../redux/shop/shop.slice.js';
import { useSelector } from 'react-redux';
import { selectStatus } from '../../redux/shop/shop.selector';
import { useEffect } from 'react';
import { Spinner } from '../../components/with-spinner/with-spiner.component';

const ShopPage = () => {
	const dispatch = useDispatch();
	const status = useSelector(selectStatus);
	const collections = useSelector(selectCollections);

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchShopDataStart());
		}
	}, [dispatch, status]);

	return status === 'loading' || status === 'idle' ? (
		<Spinner />
	) : (
		<div className='shop-page'>
			{collections.map(({ id, ...props }) => (
				<CollectionPreview key={id} {...props} />
			))}
		</div>
	);
};

export default ShopPage;

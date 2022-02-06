import './shop.styles.scss';
import CollectionOverView from '../../components/collection-overview/collection-overview.component.js';
import { useDispatch } from 'react-redux';
import { fetchShopData } from '../../redux/shop/shop.slice.js';
import { useSelector } from 'react-redux';
import { selectStatus } from '../../redux/shop/shop.selector';
import { useEffect } from 'react';
import { Spinner } from '../../components/with-spinner/with-spiner.component';

const ShopPage = () => {
	const dispatch = useDispatch();
	const status = useSelector(selectStatus);

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchShopData());
		}
	}, [dispatch, status]);

	return status === 'loading' ? (
		<Spinner />
	) : (
		<div className='shop-page'>
			<CollectionOverView />
		</div>
	);
};

export default ShopPage;

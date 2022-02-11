import './shop.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { Spinner } from '../../components/with-spinner/with-spiner.component';
import { useQuery } from '@apollo/client';
import { GET_COLLECTIONS } from '../../graphql/shop/shop.query';

const ShopPage = () => {
	const { loading, error, data } = useQuery(GET_COLLECTIONS);

	if (loading) return <Spinner />;

	if (error) return <h1>Error: {error.message}</h1>;

	return (
		<div className='shop-page'>
			{data.collections.map(({ id, ...props }) => (
				<CollectionPreview key={id} {...props} />
			))}
		</div>
	);
};

export default ShopPage;

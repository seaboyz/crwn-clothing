import { Navigate, useParams } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { Spinner } from '../../components/with-spinner/with-spiner.component';

import './collection.styles.scss';
import { useQuery } from '@apollo/client';
import { GET_COLLECTION_BY_TITLE } from '../../graphql/shop/shop.query';

const CollectionPage = () => {
	const { category } = useParams();

	const { loading, error, data } = useQuery(GET_COLLECTION_BY_TITLE, {
		variables: { title: category }
	});

	const {
		getCollectionsByTitle: { title, items }
	} = data;

	if (loading) return <Spinner />;

	if (error) return <Navigate to={'/'} />;

	return (
		<div className='collection-page'>
			<h2 className='title'>{title}</h2>
			<div className='items'>
				{items.map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default CollectionPage;

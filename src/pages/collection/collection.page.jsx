import { useParams } from 'react-router-dom';
import './collection.styles.scss';
const CollectionPage = () => {
	const { category } = useParams();

	return (
		<div className='category'>
			<h2>{category}</h2>
		</div>
	);
};

export default CollectionPage;

import { Link } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, routeName }) => (
	<div className='collection-preview'>
		<Link to={`${routeName}`}>
			<h1 className='title'>{title}</h1>
		</Link>
		<div className='preview'>
			{items.slice(0, 4).map(item => (
				<CollectionItem key={item.id} item={item} />
			))}
		</div>
	</div>
);

export default CollectionPreview;

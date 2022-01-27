import { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';
import SHOP_DATA from './shop.data.js';
import './shop.styles.scss';

class ShopPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: SHOP_DATA
		};
	}
	render() {
		const { collections } = this.state;
		return (
			<div className='shop-page'>
				{collections.map(({ id, ...props }) => (
					<CollectionPreview key={id} {...props} />
				))}
			</div>
		);
	}
}

export default ShopPage;

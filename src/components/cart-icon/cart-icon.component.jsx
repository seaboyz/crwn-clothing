import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
	<div onClick={toggleCartHidden} className='cart-icon'>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>{itemsCount}</span>
	</div>
);

const mapStateToProps = state => {
	return {
		itemsCount: selectCartItemsCount(state)
	};
};

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

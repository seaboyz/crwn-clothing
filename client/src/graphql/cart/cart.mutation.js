import { gql } from '@apollo/client';

export const TOGGLE_CART_HIDDEN = gql`
	mutation ToggleCartHiddent {
		toggleCartHiddent @client
	}
`;

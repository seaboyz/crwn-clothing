import { gql } from '@apollo/client';

export const TOGGLE_CART_HIDDEN = gql`
	mutation {
		toggleCartHiddent @client
	}
`;

import { gql } from '@apollo/client';

export const GET_CART_HIDDEN = gql`
	query CartHidden {
		cartHidden @client
	}
`;

export const GET_CART_ITEMS = gql`
	query CartItems {
		cartItems @client
	}
`;

export const GET_CART = gql`
	query Cart {
		cartHidden @client
		cartItems @client
	}
`;

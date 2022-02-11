import { gql } from '@apollo/client';
export const GET_COLLECTIONS = gql(`
  query {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`);

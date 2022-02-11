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

export const GET_COLLECTION_BY_TITLE = gql(`
query ($title: String) {
  getCollectionsByTitle(title: $title) {
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

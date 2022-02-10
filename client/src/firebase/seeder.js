import { collections } from '../pages/shop/shop.data';
import { addCollectionAndDocuments } from './firebase.util';

export const addCollections = () =>
	addCollectionAndDocuments('collections', collections);

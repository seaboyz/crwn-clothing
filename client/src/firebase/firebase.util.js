import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut
} from 'firebase/auth';
import {
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	query,
	setDoc,
	updateDoc,
	writeBatch
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCMSyTGEbmnOfhmdcJE1VEPSYBfEJb771s',
	authDomain: 'crwn-db-8c0b4.firebaseapp.com',
	projectId: 'crwn-db-8c0b4',
	storageBucket: 'crwn-db-8c0b4.appspot.com',
	messagingSenderId: '1059882605634',
	appId: '1:1059882605634:web:650123c97d5374814c61db',
	measurementId: 'G-04GJ9N96P5'
};

export const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

export const auth = getAuth();

export const db = getFirestore();

export const signInWithGoogle = async () => {
	try {
		const result = await signInWithPopup(auth, provider);
		const userRef = await createUserProfileDocument(result.user);
		const userSnap = await getDoc(userRef);
		const userInfo = { uid: userSnap.id, ...userSnap.data() };
		return userInfo;
	} catch (error) {
		throw error;
	}
};

export const signInWithEmail = async (email, password) => {
	try {
		const result = await signInWithEmailAndPassword(auth, email, password);
		const userRef = await createUserProfileDocument(result.user);
		const userSnap = await getDoc(userRef);
		const userInfo = { uid: userSnap.id, ...userSnap.data() };
		return userInfo;
	} catch (error) {
		throw error;
	}
};
export const signUp = async (email, password, firstname, lastname) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		const user = userCredential.user;
		const displayName = `${firstname} ${lastname}`;
		// save user to db
		const userRef = await createUserProfileDocument(user, { displayName });
		const userSnap = await getDoc(userRef);
		const userInfo = { uid: userSnap.id, ...userSnap.data() };
		return userInfo;
	} catch (error) {
		console.log('fail to create a user ', error.message);
		throw error;
	}
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
	if (!userAuth) return;
	const userRef = doc(db, 'users', userAuth.uid);
	const userSnap = await getDoc(userRef);

	if (!userSnap.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await setDoc(userRef, {
				displayName,
				email,
				createdAt,
				...addtionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
};

export const addCollectionAndDocuments = (collectionsKey, documents) => {
	const batch = writeBatch(db);
	const collectionRef = collection(db, collectionsKey);
	documents.forEach(document => batch.set(doc(collectionRef), document));
	return batch.commit();
};

export const getCurrentUser = () =>
	new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			unsubscribe();
			resolve(user);
		}, reject);
	});

export const getShopData = async () => {
	const q = query(collection(db, 'collections'));
	const querySnapshot = await getDocs(q);
	const collections = [];
	querySnapshot.forEach(doc => collections.push({ id: doc.id, ...doc.data() }));
	return collections;
};

export const getDirectory = async () => {
	const q = query(collection(db, 'categories'));
	const querySnapshot = await getDocs(q);
	const directory = [];
	querySnapshot.forEach(doc => directory.push({ id: doc.id, ...doc.data() }));
	return directory;
};

export const getUserRefById = async id => {
	const user = doc(db, 'users', id);
	return user;
};

export const updateCartInDb = (userRef, cartItems) => {
	updateDoc(userRef, { cartItems });
};

export const getCartItemsInDb = async userRef => {
	const userDoc = await getDoc(userRef);
	const { cartItems } = userDoc.data();
	return cartItems;
};

export const userSignOut = () => signOut(auth);

export const firebase = {
	userSignOut,
	signInWithGoogle,
	getCurrentUser,
	signInWithEmail,
	signUp
};

import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword
} from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCMSyTGEbmnOfhmdcJE1VEPSYBfEJb771s',
	authDomain: 'crwn-db-8c0b4.firebaseapp.com',
	projectId: 'crwn-db-8c0b4',
	storageBucket: 'crwn-db-8c0b4.appspot.com',
	messagingSenderId: '1059882605634',
	appId: '1:1059882605634:web:650123c97d5374814c61db',
	measurementId: 'G-04GJ9N96P5'
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

export const auth = getAuth();

export const db = getFirestore();

export const signInWithGoogle = () => signInWithPopup(auth, provider);

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
		await createUserProfileDocument(user, { displayName });
		return user;
	} catch (error) {
		console.log('fail to create a user ', error.message);
		throw error;
	}
};

export default app;

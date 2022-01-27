import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

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

export const auth = getAuth(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default app;

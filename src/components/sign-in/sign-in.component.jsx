import { Component, useState } from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { signIn, signInWithGoogle } from '../../firebase/firebase.util.js';
import GoogleButton from 'react-google-button';
import { useDispatch } from 'react-redux';
import { signInWithGoogleStart } from '../../redux/user/user.slice';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const disPatch = useDispatch();
	return (
		<div className='sign-in'>
			<h2 className='title'>I already have an account</h2>
			<span>Sign in with your eamil and password</span>
			<form onSubmit={() => disPatch({ email, password })}>
				<FormInput
					label='email'
					type='email'
					name='email'
					handleChange={e => setEmail(e.target.value)}
					value={email}
					required
				/>
				<FormInput
					label='password'
					name='password'
					type='password'
					handleChange={e => setPassword(e.target.value)}
					value={password}
					required
				/>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<CustomButton type='submit'>Sign In</CustomButton>
					<GoogleButton
						onClick={() => disPatch(signInWithGoogleStart())}
						label='Sign In with google'
					/>
				</div>
			</form>
		</div>
	);
};

export default SignIn;

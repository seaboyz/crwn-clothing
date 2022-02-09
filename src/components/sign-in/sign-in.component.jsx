import { useState } from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import GoogleButton from 'react-google-button';
import { useDispatch } from 'react-redux';
import {
	signInWithGoogleStart,
	signInWithWithEmailAndPasswordStart
} from '../../redux/user/user.slice';

const SignIn = () => {
	const disPatch = useDispatch();
	const [userCredentials, setuserCredentials] = useState({
		email: '',
		password: ''
	});
	const { email, password } = userCredentials;
	const handleChange = e => {
		const { value, name } = e.target;
		setuserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className='sign-in'>
			<h2 className='title'>I already have an account</h2>
			<span>Sign in with your eamil and password</span>
			<form
				onSubmit={e => {
					e.preventDefault();
					disPatch(signInWithWithEmailAndPasswordStart({ email, password }));
				}}
			>
				<FormInput
					label='email'
					type='email'
					name='email'
					handleChange={handleChange}
					value={email}
					required
				/>
				<FormInput
					label='password'
					name='password'
					type='password'
					handleChange={handleChange}
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

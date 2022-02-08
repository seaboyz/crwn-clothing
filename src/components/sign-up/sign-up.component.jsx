import { useState } from 'react';
import { useDispatch } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss';
import { signUpStart } from '../../redux/user/user.slice.js';

const SignUp = () => {
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassWord] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const dispatch = useDispatch(
		signUpStart({ firstname, lastname, email, password })
	);
	return (
		<div className='sign-up'>
			<h2 className='title'>I am new</h2>
			<span>Sign up with your eamil and password</span>
			<form
				onSubmit={e => {
					e.preventDefault();
					dispatch(signUpStart({ firstname, lastname, email, password }));
				}}
			>
				<FormInput
					label='first name'
					type='text'
					name='firstname'
					handleChange={e => setFirstname(e.target.value)}
					value={firstname}
					required
				/>
				<FormInput
					label='last name'
					type='text'
					name='lastname'
					handleChange={e => setLastname(e.target.value)}
					value={lastname}
					required
				/>
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
					handleChange={e => setPassWord(e.target.value)}
					value={password}
					required
				/>
				<FormInput
					label='confirm password'
					name='confirmPassword'
					type='password'
					handleChange={e => setConfirmPassword(e.target.value)}
					value={confirmPassword}
					required
				/>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<CustomButton type='submit'>Sign Up</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignUp;

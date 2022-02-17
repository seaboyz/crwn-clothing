import { useState } from 'react';
import { useDispatch } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss';
import { signUp, signUpStart } from '../../redux/user/user.slice.js';

const SignUp = () => {
	const dispatch = useDispatch();
	const [userCredentials, setUserCredentials] = useState({
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		confirmPassword: ''
	});
	const handleChange = e => {
		const { name, value } = e.target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};
	const { firstname, lastname, email, password, confirmPassword } =
		userCredentials;
	return (
		<div className='sign-up'>
			<h2 className='title'>I am new</h2>
			<span>Sign up with your eamil and password</span>
			<form
				onSubmit={e => {
					e.preventDefault();
					dispatch(signUp({ firstname, lastname, email, password }));
				}}
			>
				<FormInput
					label='first name'
					type='text'
					name='firstname'
					handleChange={handleChange}
					value={firstname}
					required
				/>
				<FormInput
					label='last name'
					type='text'
					name='lastname'
					handleChange={handleChange}
					value={lastname}
					required
				/>
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
				<FormInput
					label='confirm password'
					name='confirmPassword'
					type='password'
					handleChange={handleChange}
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

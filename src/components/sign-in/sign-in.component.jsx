import { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.util.js';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = { email: '', password: '' };
	}

	handleSubmit = event => {
		event.preventDefault();
		// this.setState({ email: '', password: '' });
	};

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='sign-in'>
				<h2 className='title'>I already have an account</h2>
				<span>Sign in with your eamil and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						label='email'
						type='email'
						name='email'
						handleChange={this.handleChange}
						value={this.state.email}
						required
					/>
					<FormInput
						label='password'
						name='password'
						type='password'
						handleChange={this.handleChange}
						value={this.state.password}
						required
					/>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<CustomButton type='submit'>Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle}>
							Sign In with google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;

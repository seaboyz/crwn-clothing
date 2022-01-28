import { Component } from 'react';
import { signUp } from '../../firebase/firebase.util';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstname: '',
			lastname: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}

	handleSubmit = async event => {
		event.preventDefault();
		const { firstname, lastname, email, password, confirmPassword } =
			this.state;
		if (password !== confirmPassword) {
			alert("password don't match");
			return;
		}
		try {
			await signUp(email, password, firstname, lastname);

			// reset sign-up form
			this.setState({
				firstname: '',
				lastname: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
		} catch (error) {
			console.log(error.message);
		}
	};

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='sign-up'>
				<h2 className='title'>I am new</h2>
				<span>Sign up with your eamil and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						label='first name'
						type='text'
						name='firstname'
						handleChange={this.handleChange}
						value={this.state.firstname}
						required
					/>
					<FormInput
						label='last name'
						type='text'
						name='lastname'
						handleChange={this.handleChange}
						value={this.state.lastname}
						required
					/>
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
					<FormInput
						label='confirm password'
						name='confirmPassword'
						type='password'
						handleChange={this.handleChange}
						value={this.state.confirmPassword}
						required
					/>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<CustomButton type='submit'>Sign Up</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;

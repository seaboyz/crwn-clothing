import { connect } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUp = ({ currentUser }) => {
	// const navigate = useNavigate();
	// if (currentUser) {
	// 	navigate('/');
	// }

	if (currentUser) return <Navigate to='/' />;

	return (
		<div className='sign-in-sign-up'>
			<SignIn />
			<SignUp />
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(SignInAndSignUp);

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUp = () => {
	const currentUser = useSelector(selectCurrentUser);

	if (currentUser) return <Navigate to='/' />;

	return (
		<div className='sign-in-sign-up'>
			<SignIn />
			<SignUp />
		</div>
	);
};

export default SignInAndSignUp;

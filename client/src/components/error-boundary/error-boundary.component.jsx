import { Component } from 'react';
import {
	ErrorImageContainer,
	ErrorImageOverlay,
	ErrorImageText
} from './error-boundary.styles';
import error from '../../assets/error.png';

class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = { hassError: false };
	}
	static getDerivedStateFromError(error) {
		return { hassError: true };
	}

	componentDidCatch(error, errorInfo) {
		console.log(error, errorInfo);
	}

	render() {
		if (this.state.hassError)
			return (
				<ErrorImageOverlay>
					<ErrorImageContainer imageUrl={error} />
					<ErrorImageText>Sorry this page is broken</ErrorImageText>
				</ErrorImageOverlay>
			);

		return this.props.children;
	}
}

export default ErrorBoundary;

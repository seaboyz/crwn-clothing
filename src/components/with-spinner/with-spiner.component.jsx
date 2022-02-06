import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const WithSpinner =
	WrapperdComponent =>
	({ isLoading, ...props }) => {
		isLoading ? (
			<SpinnerOverlay>
				<SpinnerContainer />
			</SpinnerOverlay>
		) : (
			<WrapperdComponent {...props} />
		);
	};

export const Spinner = () => (
	<SpinnerOverlay>
		<SpinnerContainer />
	</SpinnerOverlay>
);

export default WithSpinner;

import './custom-button.styles.scss';

const CustomButton = ({ children, inverted, ...props }) => {
	return (
		<button
			className={`custom-button ${inverted ? 'inverted' : ''}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default CustomButton;

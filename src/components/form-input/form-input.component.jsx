import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...props }) => {
	const className = `${props.value.length ? 'shrink' : ''} form-input-label`;

	return (
		<div className='group'>
			{label ? <label className={className}> {label}</label> : null}
			<input className='form-input' onChange={handleChange} {...props} />
		</div>
	);
};

export default FormInput;

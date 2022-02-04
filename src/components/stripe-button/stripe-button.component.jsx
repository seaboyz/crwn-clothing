import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceInCents = price * 100;
	const publishableKey =
		'pk_test_51KPRX3IRRfursHDeMxXAVvKmnPvEJF9WYrvHa57PbX74ttGWcMsVhReFvpnkVF9BpbKmTnnN0nLCXCIRsvf9Pfs600SrN1AysF';
	const onToken = token => {
		console.log(token);
		alert('Payment Successfull');
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing LTD'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			amount={priceInCents}
			description={`Your total is $${price}`}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;

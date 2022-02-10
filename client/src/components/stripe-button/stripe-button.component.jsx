import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceInCents = price * 100;
	const publishableKey =
		'pk_test_51KPRX3IRRfursHDeMxXAVvKmnPvEJF9WYrvHa57PbX74ttGWcMsVhReFvpnkVF9BpbKmTnnN0nLCXCIRsvf9Pfs600SrN1AysF';
	const onToken = async token => {
		try {
			await axios({
				url: 'payment',
				method: 'post',
				data: { amount: priceInCents, token }
			});
			alert('payment successful');
		} catch (error) {
			console.log('payment error', JSON.parse(error));
			alert(
				'there is some issure with payment, please use the provided the credit card'
			);
		}
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

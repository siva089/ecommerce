import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton=({price})=>{

 const priceForStripe=price*100;
 const publishableKey=`pk_test_51HNuL2GRZI8tsQBfzYyQgYs2omFuqMJZlBOyYoZbZ8Iy5QRHhWZ5ReqrT9aicxyrBtNajTc192xvt6o62VApewGM00q3VsWlhH`

 const onToken=token=>{
     console.log(token);
     alert('payment success')
 }

 return (
     <StripeCheckout
     label='Pay Now'
     name='Next Clothing'
     billingAddress
     shippingAddress
     image='https::/svgshare.com/i/Cuz.svg'
     description={`Your total is $${price}`}
     amount={priceForStripe}
     panelLabel='Pay Now'
     token={onToken}
     stripeKey={publishableKey}
     />
 )

}

export default StripeCheckoutButton
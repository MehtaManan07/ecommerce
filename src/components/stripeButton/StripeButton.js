import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { toast, ToastContainer } from "react-toastify";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GyyhtKihkYgwAwAjeyuhSruZ21sHVhP4xZ2RVPBpokAgfepWz86pjYTkEzXKlIwzR1cBqVsUmzcKqVAPC5Sg2Kb00uEsl0qax";
  const onToken = (token) => {
    console.log(token);
    toast.success(`Successful payment of $ ${price}`);
  };
  return (
    <>
    <StripeCheckout
      label="Pay Now"
      name="SHOPONLINE"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
    <ToastContainer />
    </>
  );
};
export default StripeButton;

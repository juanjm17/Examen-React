import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./form.css";

const stripePromise = loadStripe(
  "pk_test_51MZHK4EfN6qga162jY0Gkg9nVldwzFSB50g9XOwel24CQAs8p4qLjNAxuZ5H3bCd3vDPsMSbiNUdkDEbQ0LUMUQM00JMd9ET4s"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Pago exitoso:", paymentMethod);
    } else {
      console.error("Error al procesar el pago:", error);
    }
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <div className="card-element-container">
        <CardElement />
      </div>
      <button className="pay-button" type="submit">Pagar</button>
    </form>
  );
};

const StripeCheckout = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default StripeCheckout;

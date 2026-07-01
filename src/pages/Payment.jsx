import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation, Navigate } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
);

const Payment = () => {
  const location = useLocation();

  // Redirect if user opens /payment directly
  if (!location.state?.clientSecret) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <Elements
        stripe={stripePromise}
        options={{
          clientSecret: location.state.clientSecret,
        }}
      >
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
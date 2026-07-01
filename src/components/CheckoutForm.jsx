import React, { useContext, useState } from "react";
import {
    PaymentElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const location = useLocation();

  const { backendUrl, token, getDoctosData } = useContext(AppContext);

  const [loading, setLoading] = useState(false);

const { docId, slotDate, slotTime } = location.state || {};

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!stripe || !elements) {
    toast.error("Stripe has not loaded yet.");
    return;
  }

  setLoading(true);

  try {
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    if (paymentIntent?.status === "succeeded") {
      const { data } = await axios.post(
        `${backendUrl}/api/user/book-appointment`,
        {
          docId,
          slotDate,
          slotTime,
        },
        {
          headers: { token },
        }
      );

      if (data.success) {
        toast.success("Payment Successful! Appointment Booked.");
        await getDoctosData();
        navigate("/my-appointments");
      } else {
        toast.error(data.message);
      }
    } else {
      toast.error("Payment was not completed.");
    }
  } catch (error) {
    console.error(error);
    toast.error(error.response?.data?.message || error.message);
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="max-w-lg mx-auto bg-white shadow-xl rounded-xl p-8">
      <h2 className="text-2xl font-bold text-center mb-6">
        Secure Payment
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="border rounded-lg p-4 mb-6">
          <PaymentElement
  options={{
    hidePostalCode: true,
    style: {
      base: {
        fontSize: "17px",
        color: "#1D3557",
        fontFamily: "Inter, sans-serif",
        fontWeight: "500",
        "::placeholder": {
          color: "#8CA5B3",
        },
      },
      invalid: {
        color: "#E63946",
      },
    },
  }}
/>
        </div>

        <button
          type="submit"
          disabled={!stripe || loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition disabled:opacity-50"
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
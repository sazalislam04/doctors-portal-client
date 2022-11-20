import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const { _id, appointmentDate, treatment, patientName, slot, price, email } =
    useLoaderData();
  // const navigation = useNavigation();

  // if (navigation.state === "loading") {
  //   return <Spinner />;
  // }

  return (
    <div className="p-6">
      <h2 className="text-2xl">Payment for {treatment}</h2>
      <h4>
        Please pay <strong>${price}</strong> for your appointment on{" "}
        {appointmentDate} at {slot}
      </h4>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          _id={_id}
          price={price}
          email={email}
          patientName={patientName}
        />
      </Elements>
    </div>
  );
};

export default Payment;

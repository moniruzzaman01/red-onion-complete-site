import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Payment.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0XrDCN5hXHfFGVMLoc8MnJNSi9oG2LnlAjVWRaitOHooavLvFSN196eaXxD4xwp966ZSC5GHf8Md5CUdImpfjM00VDlL8ELG"
);

const Payment = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/ordersById?id=${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const amount = item?.totalAmount;
    if (amount) {
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, [item]);

  return (
    <div className="payment-container">
      <h2>Pay here</h2>
      <h4>Order Id: {id}</h4>
      <div className=" payment-info">
        <p>Name: {item?.name}</p>
        <p>Mobile: {item?.mobile}</p>
        <p>Address: {item?.address}</p>
        <h4>Total: {item?.totalAmount}</h4>
      </div>
      <div className="payment-form">
        <Elements stripe={stripePromise}>
          <CheckoutForm clientSecret={clientSecret} name={item?.name} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

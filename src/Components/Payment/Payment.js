import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/ordersById?id=${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  return (
    <div className="payment-container">
      <h2>Pay here {id}</h2>
      <div className=" payment-info">
        <p>Name: {item?.name}</p>
        <p>Mobile: {item?.mobile}</p>
        <p>Address: {item?.address}</p>
        <h4>Total: {item.totalAmount}</h4>
      </div>
    </div>
  );
};

export default Payment;

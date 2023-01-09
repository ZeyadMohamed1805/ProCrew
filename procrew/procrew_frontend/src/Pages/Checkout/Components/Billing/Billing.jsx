import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Sass/Billing/Billing.css";

export const Billing = () => {
  const [checkoutAPI, setCheckoutAPI] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getcheckout")
    .then(response => response.json())
    .then(data => {
      if (data[0].id.split(",").length === 1) {
        setCheckoutAPI([{ids: data[0].id.split(",")[0], names: data[0].name.split(",")[0], prices: data[0].price.split(",")[0]}]);
      } else if (data[0].id.split(",").length === 2) {
        setCheckoutAPI([{ids: data[0].id.split(",")[0], names: data[0].name.split(",")[0], prices: data[0].price.split(",")[0]}, {ids: data[0].id.split(",")[1], names: data[0].name.split(",")[1], prices: data[0].price.split(",")[1]}]);
      } else {
        setCheckoutAPI([{ids: data[0].id.split(",")[0], names: data[0].name.split(",")[0], prices: data[0].price.split(",")[0]}, {ids: data[0].id.split(",")[1], names: data[0].name.split(",")[1], prices: data[0].price.split(",")[1]}, {ids: data[0].id.split(",")[2], names: data[0].name.split(",")[2], prices: data[0].price.split(",")[2]}])};
      }
  )}, []);

  return (
    <form>
      <div id="billing">
        <h1>Checkout</h1>
        <div id="billing-inputs">
          <input type="text" placeholder="Billing address" />
          <input type="tel" placeholder="Phone number" />
        </div>
        <div id="billing-items">
          {checkoutAPI.map(item => (
            <div key={item.ids} className="items-info">
              <p>{item.names}</p>
              <p>${item.prices}.00</p>
            </div>
          ))}
        </div>
        <div id="updates">
            <input type="checkbox" />
            <label>Receive updates about Shipment</label>
        </div>
        <Link to={"/"}><input id="billing-submit" type="submit" value="Place Order" /></Link>
      </div>
    </form>
  )
}

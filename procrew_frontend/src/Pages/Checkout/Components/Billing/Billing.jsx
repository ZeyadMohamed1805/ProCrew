import React from 'react';
import { Link } from 'react-router-dom';
import "../Sass/Billing/Billing.css";

export const Billing = () => {
  return (
    <form>
      <div id="billing">
        <h1>Checkout</h1>
        <div id="billing-inputs">
          <input type="text" placeholder="Billing address" />
          <input type="tel" placeholder="Phone number" />
        </div>
        <div id="billing-items">
            <div className="items-info">
                <p>Coca</p>
                <p>$25.00</p>
            </div>
            <div className="items-info">
                <p>Coca</p>
                <p>$25.00</p>
            </div>
            <div className="items-info">
                <p>Taxes</p>
                <p>$10.00</p>
            </div>
            <div id="total" className="items-info">
                <h3>Total</h3>
                <p>$60.00</p>
            </div>
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

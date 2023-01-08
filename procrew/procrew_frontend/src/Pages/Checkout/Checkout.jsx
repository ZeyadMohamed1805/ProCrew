import { Billing } from "./Components/Billing/Billing";
import "./Components/Sass/Checkout/Checkout.css";

function Checkout() {
  return (
    <div className="Checkout">
      <div id="checkout-container">
        <Billing />
      </div>
    </div>
  );
}

export default Checkout;
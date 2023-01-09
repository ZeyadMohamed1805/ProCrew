import { useState } from "react";
import { Header } from "../Header/Header";
import { Lists } from "./Components/Lists/Lists";
import "./Components/Sass/Owner/Owner.css";

function Owner() {
  const [cartItem, setCartItem] = useState([]);
  return (
    <div className="Owner">
        <Header cartItem={cartItem} />
        <Lists setCartItem={setCartItem} cartItem={cartItem} />
    </div>
  );
}

export default Owner;
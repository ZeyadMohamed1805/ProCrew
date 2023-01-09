import { useState } from "react";
import {Header} from "../Header/Header";
import { Lists } from "./Components/Lists/Lists";
import "./Components/Sass/Menu/Menu.css";

function Menu() {
  const [cartItem, setCartItem] = useState("Cart Item");

  return (
    <div className="Menu">
      <Header cartItem={cartItem} />
      <Lists setCartItem={setCartItem} />
    </div>
  );
}

export default Menu;

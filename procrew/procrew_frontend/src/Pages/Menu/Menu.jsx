import { useState } from "react";
import {Header} from "../Header/Header";
import { Lists } from "./Components/Lists/Lists";
import "./Components/Sass/Menu/Menu.css";

function Menu() {
  const [cartItem, setCartItem] = useState([]);

  return (
    <div className="Menu">
      <Header cartItem={cartItem} />
      <Lists setCartItem={setCartItem} cartItem={cartItem} />
    </div>
  );
}

export default Menu;

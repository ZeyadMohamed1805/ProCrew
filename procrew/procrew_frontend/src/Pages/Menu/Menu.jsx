import { useState } from "react";
import {Header} from "../Header/Header";
import { Lists } from "./Components/Lists/Lists";
import "./Components/Sass/Menu/Menu.css";

function Menu() {
  return (
    <div className="Menu">
      <Header />
      <Lists />
    </div>
  );
}

export default Menu;

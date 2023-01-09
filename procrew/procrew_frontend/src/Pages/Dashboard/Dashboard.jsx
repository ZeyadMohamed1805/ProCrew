import { useState } from "react";
import {Header} from "../Header/Header";
import { Restaurants } from "./Components/Restaurants/Restaurants";
import "./Components/Sass/Dashboard/Dashboard.css";

function Dashboard() {
  const [cartItem, setCartItem] = useState([]);

  return (
    <div className="Dashboard">
      <Header cartItem={cartItem} />
      <Restaurants />
    </div>
  );
}

export default Dashboard;
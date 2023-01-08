import {Header} from "./Components/Header/Header";
import { Restaurants } from "./Components/Restaurants/Restaurants";
import "./Components/Sass/Dashboard/Dashboard.css";

function Dashboard() {
  return (
    <div className="Dashboard">
      <Header />
      <Restaurants />
    </div>
  );
}

export default Dashboard;
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Form from "./Pages/Form/Form";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Menu from "./Pages/Menu/Menu";
import Checkout from "./Pages/Checkout/Checkout";
import Owner from "./Pages/Owner/Owner";
import "./Sass/App/App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/owner/:id" element={<Owner />} />
          <Route path="/menu/:id" element={<Menu />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
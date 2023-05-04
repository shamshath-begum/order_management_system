import "./App.css";
import "bootstrap";

import NavBar from "./components/NavBar";
import HomePage from "./screens/HomePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import Registration from "./screens/Registration";
import Login from "./screens/Login";

import OrderScreen from "./screens/OrderScreen";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cartscreen" element={<CartScreen />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/orders" element={<OrderScreen />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

import Home from "./pages/Home";

import { Routes, Route, Navigate } from "react-router-dom";
import Cart from "./pages/Cart";

import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";

import ProductList from "./pages/ProductList";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  let user = useSelector((state) => state.user.currentUser);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/" replace /> : <Register />}
        />
      </Routes>
    </div>
  );
};

export default App;

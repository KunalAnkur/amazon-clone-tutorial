import "./App.css";
import {BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar/Navbar";
import CartPage from "./pages/CartPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

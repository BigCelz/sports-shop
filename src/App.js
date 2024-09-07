import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./Components/back/Data/Data";
import Header from "./Components/front/Header/Header";
import { Routes, Route } from "react-router-dom";
import Products from "./Components/front/Products/Products";
import Blog from "./Components/front/Blog/Blog";
import Cart from "./Components/front/Cart/Cart";
import { CartProvider } from "react-use-cart";

function App() {
  const { productItems } = data;
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <Routes>
          <Route productItems={productItems} path="/" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route productItems={productItems} path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Products from "./components/products";
import ProductDetails from "./components/productdetails";
import Cart from "./components/cart";
import { CartProvider } from "./context/cartcontext";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contactus";
import Checkout from "./components/checkout";
import Login from "./components/login";
import Signup from "./components/signup";
import Profile from "./components/profile";

function App() {
  return (

    <CartProvider>
      <BrowserRouter>
  <Cart/>
        <main className="pt-28">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
         
            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
             <Route path="/login" element={<Login />} />
                 <Route path="/signup" element={<Signup />} />
                 <Route path="/profile" element={<Profile />} />

          </Routes>
        </main>
      </BrowserRouter>
    </CartProvider>
  );
  
}

export default App;
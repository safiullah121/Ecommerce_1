import React, { useEffect } from "react";
import { BrowserRouter, Routes,Route, useLocation } from "react-router-dom";
import './App.css'
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import ContactUs from "./pages/contactUs/ContactUs";
import Register from "./pages/login/Register";
import ShoppingCart from "./pages/shoppingCart/ShoppingCart";
import CheckOut from "./pages/check/CheckOut";
import UserAccount from "./pages/account/UserAccount";
import AboutUs from './pages/about/AboutUs';
import Header from "./Components/common/Header";
import Footer from "./Components/common/Footer";
import Afaq from "./pages/FAQ/Afaq";
import Review from "./Components/common/Review";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Product" element={<Product/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/Register" element={<Register/>}/> 
        <Route path="/ShoppingCart" element={<ShoppingCart/>}/>
        <Route path="/Checkout" element={<CheckOut/>}/>
        <Route path="/UserAccount" element={<UserAccount/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/FAQ" element={<Afaq/>}/>
      </Routes> 
       <Footer/>
    </BrowserRouter>
  );
}

export default App;

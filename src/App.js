import React, {useState  ,  useEffect } from "react";
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
import Context from "./pages/Context";
import Window from "./pages/img/11.png";
import White from "./pages/img/12.png";
import Color from "./pages/img/13.png";
import Laptop from "./pages/img/14.png";
import Laptop_2 from "./pages/img/laptop_2.png";
import Check from "./pages/img/check.svg";
import Uncheck from "./pages/img/uncheck.svg";
import Star from "./pages/img/15.svg";
import Custome from "./pages/img/20.svg";
import Monitor from "./pages/img/28.png";
import Monitor_2 from "./pages/img/monitor_2.png";
import Color_2 from "./pages/img/color_2.png";
import SearchedProducts from "./Components/SearchedProducts";
import { v4 as uuidv4 } from 'uuid';

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
   
const images = {
  Check: Check,
  Window: Window,
 Star: Star,
 White: White,
 Color: Color,
 Color_2: Color_2,
 Laptop: Laptop,
 Laptop_2: Laptop_2,
 Monitor_2: Monitor_2,
 Monitor: Monitor,
 Custome: Custome,
}
const [productToast, setproductToast] = useState(false);

const [allProducts, setallProducts] = useState([
  {
    id: 1,
    label:images.Check,
    label_2: "in stock",
    image: images.Window,
    review:images.Star,
    title:  "Microsoft Tablet Surface Pro 9 Core i7 12th Generation 16GB RAM 512GB SSD Windows 11 " ,
    price: "$499.00",
    discountedPrice: "$499.00",
    Qty : 1 ,
    new: true,
  },
  {
    id: 2,
    label: Uncheck,
    label_2: "check availability",
    image: images.White,
    review: images.Star,
    title:  "Playstation 5 Disc Version PS5 Console Horizon Forbidden West (Renewed)"
    ,
    price: "$499.00",
    discountedPrice: "$499.00",
    Qty : 1 ,
    new: true,
  },
  {
    id:3,
    label:images.Check,
    label_2: "in stock",
    image: images.Color,
    review: images.Star,
    title:  "MSI Pro 16 Intel LGA1151 · AMD AM4 · Intel LGA2066 · Socket TR4 ·"
    ,
    price: "$499.00",
    discountedPrice: "$499.00",
    Qty : 1 ,
    new: true,
  },
  {
    id: 4,
    label:images.Check,
    label_2: "in stock",
    image: images.Laptop,
    review: images.Star,
    title:  "Msi Laptop Raider GE78 HX Smart Touchpad 13V  GE78 HX Smart Touchpad"
    ,
    price: "$499.00",
    discountedPrice: "$499.00",
    Qty : 1 ,
    new: true,
  },
  {
    id: 5,
    label:images.Check,
    image: images.Color,
    label_2: "in stock",
    review: images.Star,
    title:  "MSI Pro 16 Intel LGA1151 · AMD AM4 · Intel LGA2066 · Socket TR4 ·"
    ,
    price: "$499.00",
    discountedPrice: "$499.00",
    Qty : 1 ,
    new: true,
  },
  {
    id: 6,
    label:images.Check,
    label_2: "in stock",
    image: images.Color,
    review: images.Star,
    title:  "MSI Pro 16 Intel LGA1151 · AMD AM4 · Intel LGA2066 · Socket TR4 ·"
    ,
    price: "$499.00",
    discountedPrice: "$499.00",
    Qty : 1 ,
    new: true,
  },
  {
    id: 7,
    label:images.Check,
    label_2: "in stock",
    image: images.Window,
    review: images.Star,
    title:  "Microsoft Tablet Surface Pro 9 Core i7 12th Generation 16GB RAM 512GB SSD Windows 11 "
    ,
    price: "$499.00",
    discountedPrice: "$499.00",
    Qty : 1 ,
    new: true,
  },
  {
    id: 8,
    label:images.Check,
    label_2: "in stock",
    image: images.Custome,
    review: images.Star,
    title:  "   GP63-73 of Giant Speakers is Outstanding 8/10/2018 · The Giant Speakers",
    price: "$499.00",
    discountedPrice: "$499.00",
    Qty : 1 ,
    speaker: true,
  },
  {
    id: 9,
    label:images.Check,
    label_2: "in stock",
    image: images.Custome,
    review: images.Star,
    title:  "   GP63-73 of Giant Speakers is Outstanding 8/10/2018 · The Giant Speakers",
    price: "$499.00",
    discountedPrice: "$499.00",
    Qty : 1 ,
    speaker: true,
  },
  {
    id: 10,
    label:images.Check,
    label_2: "in stock",
    image: images.Custome,
    review: images.Star,
    title:  "   GP63-73 of Giant Speakers is Outstanding 8/10/2018 · The Giant Speakers",
    price: "$499.00",
    discountedPrice: "$499.00",
    Qty : 1 ,
    speaker: true,
  },
  {
    id: 11,
    label:images.Check,
    label_2: "in stock",
    image: images.Custome,
    review: images.Star,
    title:  "   GP63-73 of Giant Speakers is Outstanding 8/10/2018 · The Giant Speakers",
    price: "$499.00",
    discountedPrice: "$499.00",
    Qty : 1 ,
    speaker: true,
  },
  {
    id: 12,
    label:images.Check,
    label_2: "in stock",
    image: images.Custome,
    review: images.Star,
    title:  "   GP63-73 of Giant Speakers is Outstanding 8/10/2018 · The Giant Speakers",
    price: "$499.00",
    discountedPrice: "$499.00",
    Qty : 1 ,
    speaker: true,
  },
  {
    id:13,
    label:images.Check,
    label_2: "in stock",
    image: images.Monitor,
    review: images.Star,
    title:  "MSI Monitors Oculux NXG252R 24.5 diagonal and FHD 1920 x 1080 ",
    price: "$499.00",
    discountedPrice: "$499.00",
    Qty : 1 ,
    monitor: true,
  },
  {
    id: 14,
    label:images.Check,
    label_2: "in stock",
    image: images.Monitor,
    review: images.Star,
    title:  "MSI Monitors Oculux NXG252R 24.5 diagonal and FHD 1920 x 1080 ",
    price: "$499.00",
    discountedPrice: "$499.00",
    Qty : 1 ,
    monitor: true,
  },
  {
    id: 15,
    label:images.Check,
    label_2: "in stock",
    image: images.Monitor,
    review: images.Star,
    title:  "MSI Monitors Oculux NXG252R 24.5 diagonal and FHD 1920 x 1080 ",
    price: "$499.00",
    discountedPrice: "$499.00",
    Qty : 1 ,
    monitor: true,
  },
  {
    id: 16,
    label:images.Check,
    label_2: "in stock",
    image: images.Monitor_2,
    review: images.Star,
    title:  "MSI monitors Optix G274RW IPS Panel – Optimize screen colors",
    price: "$499.00",
    discountedPrice: "$499.00",
    Qty : 1 ,
    monitor: true,
  },
  {
    id: 17,
    label:images.Check,
    label_2: "in stock",
    image: images.Monitor,
    review: images.Star,
    title:  "MSI Monitors Oculux NXG252R 24.5 diagonal and FHD 1920 x 1080 ",
    price: "$499.00",
    discountedPrice: "$499.00",
    Qty : 1 ,
    monitor: true,
  },
  ,
  {
    id: 18,
    label:images.Check,
    label_2: "in stock",
    image: images.Laptop_2,
    review: images.Star,
    title:"Msi Laptop 2 Raider GE78 HX Smart Touchpad 13V  GE78 HX Smart Touchpad",
    price: "$499.00",
    discountedPrice: "$499.00",
    Qty : 1 ,
    laptop: true,
  },
  {
    id: 19,
    label:images.Check,
    label_2: "in stock",
    image: images.Laptop,
    review: images.Star,
    title:  "Msi Laptop Raider GE78 HX Smart Touchpad 13V  GE78 HX Smart Touchpad"
    ,
    price: "$499.00",
    discountedPrice: "$499.00",
    Qty : 1 ,
    laptop: true,
  },
  {
    id: 20,
    label:images.Check,
    label_2: "in stock",
    image: images.Laptop,
    review: images.Star,
    title:  "Msi Laptop Raider GE78 HX Smart Touchpad 13V  GE78 HX Smart Touchpad"
    ,
    price: "$499.00",
    discountedPrice: "$499.00",
    Qty : 1 ,
    laptop: true,
  },
  {
    id: 21,
    label:images.Check,
    label_2: "in stock",
    image: images.Laptop,
    review: images.Star,
    title:  "Msi Laptop Raider GE78 HX Smart Touchpad 13V  GE78 HX Smart Touchpad"
    ,
    price: "$499.00",
    discountedPrice: "$499.00",
    Qty : 1 ,
    laptop: true,
  },
  {
    id: 22,
    label:images.Check,
    label_2: "in stock",
    image: images.Laptop_2,
    review: images.Star,
    title:  "Msi Laptop 2 Raider GE78 HX Smart Touchpad 13V  GE78 HX Smart Touchpad"
    ,
    price: "$499.00",
    discountedPrice: "$499.00",
    Qty : 1 ,
    laptop: true,
  },
  {
    id:23,
    label:images.Check,
    label_2: "in stock",
    image: images.Color_2,
    review: images.Star,
    title:  "Msi Cpu 13th Gen Intel® Core™ i9-13900H"
    ,
    price: "$499.00",
    discountedPrice: "$499.00",
    Qty : 1 ,
    color: true,
  },
  {
    id: 24,
    label:images.Check,
    label_2: "in stock",
    image: images.Color,
    review: images.Star,
    title:  "MSI Pro 16 Intel LGA1151 · AMD AM4 · Intel LGA2066 · Socket TR4 ·"
    ,
    price: "$499.00",
    discountedPrice: "$499.00",
    Qty : 1 ,
    color: true,
  },
  {
    id: 25,
    label:images.Check,
    label_2: "in stock",
    image: images.Color,
    review: images.Star,
    title:  "MSI Pro 16 Intel LGA1151 · AMD AM4 · Intel LGA2066 · Socket TR4 ·"
    ,
    price: "$499.00",
    discountedPrice: "$499.00",
    Qty : 1 ,
    color: true,
  },
  {
    id: 26,
    label:images.Check,
    label_2: "in stock",
    image: images.Color,
    review: images.Star,
    title:  "MSI Pro 16 Intel LGA1151 · AMD AM4 · Intel LGA2066 · Socket TR4 ·"
    ,
    price: "$499.00",
    discountedPrice: "$499.00",
    Qty : 1 ,
    color: true,
  },
  {
    id: 27,
    label:images.Check,
    label_2: "in stock",
    image: images.Color_2,
    review: images.Star,
    title:  "Msi Cpu 13th Gen Intel® Core™ i9-13900H"
    ,
    price: "$499.00",
    discountedPrice: "$499.00",
    Qty : 1 ,
    color: true,
  },
]);
const [selectedProducts, setselectedProducts] = React.useState([])
useEffect(()=>{
const productInLocalStorage = JSON.parse(localStorage.getItem('product')||'[]');
setselectedProducts(productInLocalStorage)

},[])
  const defaultValues = {
    allProducts,setallProducts,
    selectedProducts,setselectedProducts,
    productToast, setproductToast
  };
  return (
    <Context.Provider value={defaultValues}>
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
        <Route path="/SearchedProducts" element={<SearchedProducts/>}/>
      </Routes> 
       <Footer/>
    </BrowserRouter>
    </Context.Provider>
  );
}

export default App;

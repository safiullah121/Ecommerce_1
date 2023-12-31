import React, {useState  ,  useEffect } from "react";
import { HashRouter, Routes,Route, useLocation, BrowserRouter } from "react-router-dom";
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
import SignIn from "./pages/login/SignIn"
import { supabase } from "./SupabaseClient";
import Loading from "./Components/Loading";
import PasswordRecovery from "./pages/PasswordRecovery";
import FavProducts from "./Components/common/FavProducts";


function ScrollToTop() {
const allObj= [{
  "id": 1,
  'label':"/static/media/check.0e51d97932c7912b0d00652395236767.svg",
  "label_2": "in stock",
  "image":' /static/media/11.59dd87ca232cd1a058a1.png',
  'review':"/static/media/15.c05bff52e1df8f498e3fe0d0498f4ac0.svg",
  'title':  "Microsoft Tablet Surface Pro 9 Core i7 12th Generation 16GB RAM 512GB SSD Windows 11 " ,
  'price': "$499.00",
  "discountedPrice": "$499.00",
  'Qty' : 1 ,
  'new': true,
},
{
  "id": 2,
  'label': "/static/media/uncheck.0f27b48bcf978ca57b637556884692d8.svg",
  "label_2": "check availability",
  "image": "/static/media/laptop_2.09489b36ff32729bf1b2.png",
  'review': "/static/media/15.c05bff52e1df8f498e3fe0d0498f4ac0.svg",
  'title':  "Playstation 5 Disc Version PS5 Console Horizon Forbidden West (Re'new'ed)"
  ,
  'price': "$499.00",
  "discountedPrice": "$499.00",
  'Qty' : 1 ,
  'new': true,
},
{
  "id":3,
  'label':"/static/media/check.0e51d97932c7912b0d00652395236767.svg",
  "label_2": "in stock",
  "image": "/static/media/13.6427ea16a2deb6fdadd8.png",
  'review': "/static/media/15.c05bff52e1df8f498e3fe0d0498f4ac0.svg",
  'title':  "MSI Pro 16 Intel LGA1151 · AMD AM4 · Intel LGA2066 · Socket TR4 ·"
  ,
  'price': "$499.00",
  "discountedPrice": "$499.00",
  'Qty' : 1 ,
  'new': true,
},
{
  "id": 4,
  'label':"/static/media/check.0e51d97932c7912b0d00652395236767.svg",
  "label_2": "in stock",
  "image": "/static/media/14.6725841afdcb13e90a5b.png",
  'review': "/static/media/15.c05bff52e1df8f498e3fe0d0498f4ac0.svg",
  'title':  "Msi Laptop Raider GE78 HX Smart Touchpad 13V  GE78 HX Smart Touchpad"
  ,
  'price': "$499.00",
  "discountedPrice": "$499.00",
  'Qty' : 1 ,
  'new': true,
},
{
  "id": 5,
  'label':"/static/media/check.0e51d97932c7912b0d00652395236767.svg",
  "image": "/static/media/13.6427ea16a2deb6fdadd8.png",
  'label_2': "in stock",
  'review': "/static/media/15.c05bff52e1df8f498e3fe0d0498f4ac0.svg",
  'title':  "MSI Pro 16 Intel LGA1151 · AMD AM4 · Intel LGA2066 · Socket TR4 ·"
  ,
  'price': "$499.00",
  "discountedPrice": "$499.00",
  'Qty' : 1 ,
  'new': true,
},
{
  "id": 6,
  'label':"/static/media/check.0e51d97932c7912b0d00652395236767.svg",
  "label_2": "in stock",
  "image": "/static/media/13.6427ea16a2deb6fdadd8.png",
  'review': "/static/media/15.c05bff52e1df8f498e3fe0d0498f4ac0.svg",
  'title':  "MSI Pro 16 Intel LGA1151 · AMD AM4 · Intel LGA2066 · Socket TR4 ·"
  ,
  'price': "$499.00",
  "discountedPrice": "$499.00",
  'Qty' : 1 ,
  'new': true,
},
{
  "id": 7,
  'label':"/static/media/check.0e51d97932c7912b0d00652395236767.svg",
  "label_2": "in stock",
  "image":' /static/media/11.59dd87ca232cd1a058a1.png',
  'review': "/static/media/15.c05bff52e1df8f498e3fe0d0498f4ac0.svg",
  'title':  "Microsoft Tablet Surface Pro 9 Core i7 12th Generation 16GB RAM 512GB SSD Windows 11 "
  ,
  'price': "$499.00",
  "discountedPrice": "$499.00",
  'Qty' : 1 ,
  'new': true,
},
{
  "id": 8,
  'label':"/static/media/check.0e51d97932c7912b0d00652395236767.svg",
  "label_2": "in stock",
  "image": "/static/media/20.633a469a91052a759223b169bce98b25.svg",
  'review': "/static/media/15.c05bff52e1df8f498e3fe0d0498f4ac0.svg",
  'title':  "   GP63-73 of Giant Speakers is Outstanding 8/10/2018 · The Giant Speakers",
  'price': "$499.00",
  "discountedPrice": "$499.00",
  'Qty' : 1 ,
  'speaker': true,
},
{
  "id": 9,
  'label':"/static/media/check.0e51d97932c7912b0d00652395236767.svg",
  "label_2": "in stock",
  "image": "/static/media/20.633a469a91052a759223b169bce98b25.svg",
  'review': "/static/media/15.c05bff52e1df8f498e3fe0d0498f4ac0.svg",
  'title':  "   GP63-73 of Giant Speakers is Outstanding 8/10/2018 · The Giant Speakers",
  'price': "$499.00",
  "discountedPrice": "$499.00",
  'Qty' : 1 ,
  'speaker': true,
},
{
  "id": 10,
  'label':"/static/media/check.0e51d97932c7912b0d00652395236767.svg",
  "label_2": "in stock",
  "image": "/static/media/20.633a469a91052a759223b169bce98b25.svg",
  'review': "/static/media/15.c05bff52e1df8f498e3fe0d0498f4ac0.svg",
  'title':  "   GP63-73 of Giant Speakers is Outstanding 8/10/2018 · The Giant Speakers",
  'price': "$499.00",
  "discountedPrice": "$499.00",
  'Qty' : 1 ,
  'speaker': true,
},
{
  "id": 11,
  'label':"/static/media/check.0e51d97932c7912b0d00652395236767.svg",
  "label_2": "in stock",
  "image": "/static/media/20.633a469a91052a759223b169bce98b25.svg",
  'review': "/static/media/15.c05bff52e1df8f498e3fe0d0498f4ac0.svg",
  'title':  "   GP63-73 of Giant Speakers is Outstanding 8/10/2018 · The Giant Speakers",
  'price': "$499.00",
  "discountedPrice": "$499.00",
  'Qty' : 1 ,
  'speaker': true,
},
{
  "id": 12,
  'label':"/static/media/check.0e51d97932c7912b0d00652395236767.svg",
  "label_2": "in stock",
  "image": "/static/media/20.633a469a91052a759223b169bce98b25.svg",
  'review': "/static/media/15.c05bff52e1df8f498e3fe0d0498f4ac0.svg",
  'title':  "   GP63-73 of Giant Speakers is Outstanding 8/10/2018 · The Giant Speakers",
  'price': "$499.00",
  "discountedPrice": "$499.00",
  'Qty' : 1 ,
  'speaker': true,
},
{
  "id":13,
  'label':"/static/media/check.0e51d97932c7912b0d00652395236767.svg",
  "label_2": "in stock",
  "image": "/static/media/28.c7cf4eacf470a92a934e.png",
  'review': "/static/media/15.c05bff52e1df8f498e3fe0d0498f4ac0.svg",
  'title':  "MSI Monitors Oculux NXG252R 24.5 diagonal and FHD 1920 x 1080 ",
  'price': "$499.00",
  "discountedPrice": "$499.00",
  'Qty' : 1 ,
  'monitor': true,
},
{
  "id": 14,
  'label':"/static/media/check.0e51d97932c7912b0d00652395236767.svg",
  "label_2": "in stock",
  "image": "/static/media/28.c7cf4eacf470a92a934e.png",
  'review': "/static/media/15.c05bff52e1df8f498e3fe0d0498f4ac0.svg",
  'title':  "MSI Monitors Oculux NXG252R 24.5 diagonal and FHD 1920 x 1080 ",
  'price': "$499.00",
  "discountedPrice": "$499.00",
  'Qty' : 1 ,
  'monitor': true,
},
{
  "id": 15,
  'label':"/static/media/check.0e51d97932c7912b0d00652395236767.svg",
  "label_2": "in stock",
  "image": "/static/media/28.c7cf4eacf470a92a934e.png",
  'review': "/static/media/15.c05bff52e1df8f498e3fe0d0498f4ac0.svg",
  'title':  "MSI Monitors Oculux NXG252R 24.5 diagonal and FHD 1920 x 1080 ",
  'price': "$499.00",
  "discountedPrice": "$499.00",
  'Qty' : 1 ,
  'monitor': true,
},
{
  "id": 16,
  'label':"/static/media/check.0e51d97932c7912b0d00652395236767.svg",
  "label_2": "in stock",
  "image": "/static/media/monitor_2.fac50912b61324ab10bc.png",
  'review': "/static/media/15.c05bff52e1df8f498e3fe0d0498f4ac0.svg",
  'title':  "MSI monitors Optix G274RW IPS Panel – Optimize screen colors",
  'price': "$499.00",
  "discountedPrice": "$499.00",
  'Qty' : 1 ,
  'monitor': true,
},
{
  "id": 17,
  'label':"/static/media/check.0e51d97932c7912b0d00652395236767.svg",
  "label_2": "in stock",
  "image": "/static/media/28.c7cf4eacf470a92a934e.png",
  'review': "/static/media/15.c05bff52e1df8f498e3fe0d0498f4ac0.svg",
  'title':  "MSI Monitors Oculux NXG252R 24.5 diagonal and FHD 1920 x 1080 ",
  'price': "$499.00",
  "discountedPrice": "$499.00",
  'Qty' : 1 ,
  'monitor': true,
},
,
{
  "id": 18,
  'label':"/static/media/check.0e51d97932c7912b0d00652395236767.svg",
  "label_2": "in stock",
  "image": "/static/media/laptop_2.09489b36ff32729bf1b2.png",
  'review': "/static/media/15.c05bff52e1df8f498e3fe0d0498f4ac0.svg",
  'title':"Msi Laptop 2 Raider GE78 HX Smart Touchpad 13V  GE78 HX Smart Touchpad",
  'price': "$499.00",
  "discountedPrice": "$499.00",
  'Qty' : 1 ,
  'laptop': true,
},
{
  "id": 19,
  'label':"/static/media/check.0e51d97932c7912b0d00652395236767.svg",
  "label_2": "in stock",
  "image": "/static/media/14.6725841afdcb13e90a5b.png",
  'review': "/static/media/15.c05bff52e1df8f498e3fe0d0498f4ac0.svg",
  'title':  "Msi Laptop Raider GE78 HX Smart Touchpad 13V  GE78 HX Smart Touchpad" ,
  'price': "$499.00",
  "discountedPrice": "$499.00",
  'Qty' : 1 ,
  'laptop': true,
},
{
  "id": 20,
  'label':"/static/media/check.0e51d97932c7912b0d00652395236767.svg",
  "label_2": "in stock",
  "image": "/static/media/14.6725841afdcb13e90a5b.png",
  'review': "/static/media/15.c05bff52e1df8f498e3fe0d0498f4ac0.svg",
  'title':  "Msi Laptop Raider GE78 HX Smart Touchpad 13V  GE78 HX Smart Touchpad" ,
  'price': "$499.00",
  "discountedPrice": "$499.00",
  'Qty' : 1 ,
  'laptop': true,
},
{
  "id": 21,
  'label':"/static/media/check.0e51d97932c7912b0d00652395236767.svg",
  "label_2": "in stock",
  "image": "/static/media/14.6725841afdcb13e90a5b.png",
  'review': "/static/media/15.c05bff52e1df8f498e3fe0d0498f4ac0.svg",
  'title':  "Msi Laptop Raider GE78 HX Smart Touchpad 13V  GE78 HX Smart Touchpad" ,
  'price': "$499.00",
  "discountedPrice": "$499.00",
  'Qty' : 1 ,
  'laptop': true,
},
{
  "id": 22,
  'label':"/static/media/check.0e51d97932c7912b0d00652395236767.svg",
  "label_2": "in stock",
  "image": "/static/media/laptop_2.09489b36ff32729bf1b2.png",
  'review': "/static/media/15.c05bff52e1df8f498e3fe0d0498f4ac0.svg",
  'title':  "Msi Laptop 2 Raider GE78 HX Smart Touchpad 13V  GE78 HX Smart Touchpad" ,
  'price': "$499.00",
  "discountedPrice": "$499.00",
  'Qty' : 1 ,
  'laptop': true,
},
{
  "id":23,
  'label':"/static/media/check.0e51d97932c7912b0d00652395236767.svg",
  "label_2": "in stock",
  "image": "/static/media/color_2.aca00bb3d28002af2a1b.png",
  'review': "/static/media/15.c05bff52e1df8f498e3fe0d0498f4ac0.svg",
  'title':  "Msi Cpu 13th Gen Intel® Core™ i9-13900H" ,
  'price': "$499.00",
  "discountedPrice": "$499.00",
  'Qty' : 1 ,
  'color': true,
},
{
  "id": 24,
  'label':"/static/media/check.0e51d97932c7912b0d00652395236767.svg",
  "label_2": "in stock",
  "image": "/static/media/13.6427ea16a2deb6fdadd8.png",
  'review': "/static/media/15.c05bff52e1df8f498e3fe0d0498f4ac0.svg",
  'title':  "MSI Pro 16 Intel LGA1151 · AMD AM4 · Intel LGA2066 · Socket TR4 ·" ,
  'price': "$499.00",
  "discountedPrice": "$499.00",
  'Qty' : 1 ,
  'color': true,
},
{
  "id": 25,
  'label':"/static/media/check.0e51d97932c7912b0d00652395236767.svg",
  "label_2": "in stock",
  "image": "/static/media/13.6427ea16a2deb6fdadd8.png",
  'review': "/static/media/15.c05bff52e1df8f498e3fe0d0498f4ac0.svg",
  'title':  "MSI Pro 16 Intel LGA1151 · AMD AM4 · Intel LGA2066 · Socket TR4 ·" ,
  'price': "$499.00",
  "discountedPrice": "$499.00",
  'Qty' : 1 ,
  'color': true,
},
{
  "id": 26,
  'label':"/static/media/check.0e51d97932c7912b0d00652395236767.svg",
  "label_2": "in stock",
  "image": "/static/media/13.6427ea16a2deb6fdadd8.png",
  'review': "/static/media/15.c05bff52e1df8f498e3fe0d0498f4ac0.svg",
  'title':  "MSI Pro 16 Intel LGA1151 · AMD AM4 · Intel LGA2066 · Socket TR4 ·" ,
  'price': "$499.00",
  "discountedPrice": "$499.00",
  'Qty' : 1 ,
  'color': true,
},
{
  "id": 27,
  'label':"/static/media/check.0e51d97932c7912b0d00652395236767.svg",
  "label_2": "in stock",
  "image": "/static/media/color_2.aca00bb3d28002af2a1b.png",
  'review': "/static/media/15.c05bff52e1df8f498e3fe0d0498f4ac0.svg",
  'title':  "Msi Cpu 13th Gen Intel® Core™ i9-13900H",
  'price': "$499.00",
  "discountedPrice": "$499.00",
  'Qty' : 1 ,
  'color': true,
},];
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
  useEffect(() => {
    setproductToast(false)
  let productArr = [];
  if (localStorage.getItem('product')==null) {
    localStorage.setItem('product', JSON.stringify(productArr));
  }if (!localStorage.getItem('favProduct')) {
    
    localStorage.setItem('favProduct', JSON.stringify([]))
  }
   }, []);
  const [isLoading, setIsLoading] = useState(true);
  const [allProducts, setallProducts] = useState([]);
  useEffect(() => {
    setproductToast(false)
    if (isLoading) {
      document.body.classList.add("scroll-lock"); // Add scroll-lock class to body
    } else {
      document.body.classList.remove("scroll-lock"); // Remove scroll-lock class from body
    }
  }, [isLoading]);
  useEffect(() => {
    setproductToast(false)
    setIsLoading(true)
    const fetchingData = async () => {
      
      try {
        const { data, error } = await supabase
          .from('products')
          .select();
    
        if (error) {
          alert(error);
        }
    
        if (data) {
          setallProducts(data);
          localStorage.setItem('selectedProduct', JSON.stringify(data));
        }
      } catch (error) {
        alert(error);
      }
    };
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    fetchingData()
   }, []);
   
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
const [userData_2, setuserData_2] = useState({
  email:''
});
const [profileData, setprofileData] = useState(null);
const [productToast, setproductToast] = useState(false);
const [hidingExtra, setHidingExtra] = useState(true);
const [logout, setlogout] = useState(true);

const [selectedProducts, setselectedProducts] = React.useState([])
useEffect(()=>{
const productInLocalStorage = JSON.parse(localStorage.getItem('product')||'[]');
setselectedProducts(productInLocalStorage)

},[])
const [selectedProducts_2, setselectedProducts_2] =useState([]);
const [loginButton, setloginButton] = useState(0);
const [loginEmail , setloginEmail] = useState('');
const [productIds, setproductIds] = useState(null);
const [userProducts, setUserProducts] = useState(null);
const [hoveredItem_3, setHoveredItem_3] = useState(null);
const [favProductsName, setfavProductsName] = useState(0);
const [favProduct, setfavProduct] = useState(false);

  const defaultValues = {
    allProducts,setallProducts,
    selectedProducts,setselectedProducts,
    productToast, setproductToast,
    hidingExtra,setHidingExtra,
    logout,setlogout,
    loginButton,setloginButton,
    loginEmail,setloginEmail,
    productIds,setproductIds,
    profileData,setprofileData,
    setUserProducts,userProducts,
    setselectedProducts_2, selectedProducts_2,
    hoveredItem_3, setHoveredItem_3,
    favProductsName,setfavProductsName,
    favProduct, setfavProduct,
   
  };
  const [token, setToken] = useState(false);

   

  useEffect(() => {
     if (sessionStorage.getItem('token')) {
      let data = JSON.parse(sessionStorage.getItem('token'));
     setToken(data);
     }
     const favProducts =JSON.parse(localStorage.getItem('favProduct')) || [];
     setfavProductsName(favProducts)
  }, []);
  
  useEffect(() => {
    if (sessionStorage.getItem('token')){ 
      const user_email = JSON.parse(sessionStorage.getItem('token'))
     supabase
  .from('User_Profile')
  .select('product_ids') // Replace 'your_specific_column_name' with the column you want to retrieve
  .eq('user_email', user_email.user.email) // Add any additional conditions to uniquely identify the row
  .then(({ data, error }) => {
    if (error) {
      console.error('Error fetching data:', error);
    } else {
      // Handle the fetched data here
      if (data.length > 0) {
        setproductToast(false)
        const specificColumnValue = data[0].product_ids;
        
         const allProducts = JSON.parse( localStorage.getItem('selectedProduct'))
  const userProductIds = specificColumnValue.map(product => product.id);
  const userProducts = allProducts.filter(product => userProductIds.includes(product.id))
  localStorage.setItem('userProducts',JSON.stringify(userProducts))
  setproductToast(false)
  setselectedProducts_2(userProducts)
      } else {
        console.log('No data found.');
      }
    }
  });
  }
  }, []);
  
  const [scrollToSection, setScrollToSection] = useState(null);

  const handleCompareClick = () => {
    setScrollToSection('compare');
  };

  const handleWishListClick = () => {
    setScrollToSection('wish');
  };
  return (
    <div className="relative">
    <div className={`absolute w-screen h-screen  bg-[#ffff] z-50 ${isLoading !== true? 'hidden':'block'}`}></div>
    <Loading isLoading={isLoading} />
    <Context.Provider value={defaultValues}>
    <BrowserRouter>
    <Header token = {token} handleCompareClick={handleCompareClick}
        handleWishListClick={handleWishListClick}/>
      <ScrollToTop />
      <Routes>
      <Route path="/favProducts" element={<FavProducts/>}/>
        <Route path="/passwordRecovery" element={<PasswordRecovery/>} />
        <Route path="/Product/:id" element={<Product/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/Register" element={<Register/>}/> 
        <Route path="/login" element={<SignIn setToken = {setToken}/>}/>
        <Route path="/ShoppingCart" element={<ShoppingCart/>}/>
        <Route path="/Checkout" element={<CheckOut/>}/>
        <Route path="/UserAccount" element={<UserAccount/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/FAQ" element={<Afaq/>}/>
        <Route path="/SearchedProducts" element={<SearchedProducts/>}/>
         <Route path="/" element={<Home token={token} />} />
      </Routes> 
       <Footer/>
    </BrowserRouter>
    </Context.Provider>
    </div>
  );
}

export default App;

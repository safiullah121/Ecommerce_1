import React from "react";
import Button from "../../pages/img/1.svg";
import Ficon from "../../pages/img/2.svg";
import Iicon from "../../pages/img/3.svg";
import Clock from "../../pages/img/clock.svg";
import location from "../../pages/img/location.svg";
import Logo from "../../pages/img/Logo.svg";
import Search from "../../pages/img/search.svg";
import Cart from "../../pages/img/4.svg";
import Avatar from "../../pages/img/5.svg";
import Cross from "../../pages/img/cross.svg";
import right from "../../pages/img/right.svg";
import Check from "../../pages/img/check.svg";
import Star from "../../pages/img/15.svg";
import Window from "../../pages/img/11.svg";
import Rules from "../../pages/img/rules.svg";
import messi from "../../pages/img/msi.svg";
import Razer from "../../pages/img/razer.svg";
import Therma from "../../pages/img/therma.svg";
import Adata from "../../pages/img/adata.svg";
import Pakard from "../../pages/img/pakard.svg";
import Gig from "../../pages/img/gig.svg";
import { useState, useRef , useEffect} from "react";
import { motion } from "framer-motion";
import { Link, Router } from "react-router-dom";
import ProductDiv from "../../pages/Home/ProductDiv";
import pay from "../../pages/img/pay.svg";
import { useContext } from "react";
import Context from "../../pages/Context";
import { useNavigate } from 'react-router-dom';
import { supabase } from "../../SupabaseClient";
import { animateScroll as scroll } from 'react-scroll';

const Header = ({token ,handleCompareClick, handleWishListClick }) => {
   const [array, setarray] = useState("hello");
  const [searchMenu , setSearchMenu] = useState(false);

  const [dropDown_2, setdropDown_2] = useState(false);
  const [menu, setmenu] = useState(false);
  const [menu_2, setmenu_2] = useState(false);
  const [menu_3, setmenu_3] = useState(false);
  const [search, setsearch] = useState(false);
  const [dropDown, setdropDown] = useState(false);
  const [sideBar, setsideBar] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [resulsToggle, setResulsToggle] = useState(false);
  const [shoppingCart, setshoppingCart] = useState(false);
  const [selectedTitleIndex, setSelectedTitleIndex] = useState(0);



  const dropDownRef = useRef(null);
  const imageRef = useRef(null);
  const drop = useRef(null);
  const image = useRef(null);
  const mainSearch = useRef(null)
  const searchRef = useRef(null)
  const hoveredItem_3Ref = useRef(null);
  const cartRef = useRef(null);
  const cartimageRef = useRef(null);
  const sideRef = useRef(null);
  const sideImageRef = useRef(null);

  const user = sessionStorage.getItem('token');
const productArr = JSON.parse(localStorage.getItem('product'))
const userProducts = JSON.parse(localStorage.getItem('userProducts'))
  const firstHoveredMenu = [
    { title: "Everyday Use Notebooks", img: right },
    { title: "MSI Workstation Series  ", img: right },
    { title: "MSI Prestige Series  ", img: right },
    { title: "Gaming Notebooks", img: right },
    { title: "Tablets And Pads", img: right },
    { title: "Netbooks", img: right },
    { title: "Infinity Gaming Notebooks", img: right },
  ];
  const secondHoveredMenu = [
    { title: "MSI Workstation Series", img: right },
    { title: "  MSI Prestige Series ", img: right },
  ];
  const thirdHoveredMenu = [
    { title: "MSI WS Series", num: <p className="text-[#A2A6B0]"> (2)</p> , onClick:true },
    { title: "  MSI WT Series", num: <p className="text-[#A2A6B0]"> (0)</p> },
    { title: "  MSI WE Series", num: <p className="text-[#A2A6B0]"> (0)</p> },
  ];
  const hoveredProducts = [
    {
      id: 1,
      label:Check,
      label_2: "in stock",
      image: Window,
      review:Star,
      title:  "Microsoft Tablet Surface Pro 9 Core i7 12th Generation 16GB RAM 512GB SSD Windows 11 " ,
      price: "$499.00",
      discountedPrice: "$499.00",
      Qty : 1 ,
      new: true,
    },
    {
      id: 1,
      label:Check,
      label_2: "in stock",
      image: Window,
      review:Star,
      title:  "Microsoft Tablet Surface Pro 9 Core i7 12th Generation 16GB RAM 512GB SSD Windows 11 " ,
      price: "$499.00",
      discountedPrice: "$499.00",
      Qty : 1 ,
      new: true,
    }
  ];
  const images = [
    { img: Rules },
    { img: messi },
    { img: Razer },
    { img: Therma },
    { img: Adata },
    { img: Pakard },
    { img: Gig },
  ];

  useEffect(() => {
  
  }, []);
  const lies = [
    { title: "  Sign In", path: "/login" ,extraclass:'hidden'},
    { title: " Sign Up", path: "/Register" ,extraclass:'hidden'},
  ];
  const sale = [
    { title: "Laptops" },
    { title: "Desktop PCs" },
    { title: "Networking Devices" },
    { title: "Printers & Scanners" },
    { title: "PC Part" },
    { title: "All Other Products" },
    { title: "Repairs" },
    { title: "Contact Us", path: "/ContactUs" },
    { title: "Dashboard", path: "/UserAccount" },
    { title: "Shopping Cart", path: "/ShoppingCart" },
    { title: "Sign Up", path: "/Register" },
    { title: "Sign In", path: "/Register" },
  ];
  const product = useContext(Context);
  const navigate = useNavigate();

  useEffect(()=>{
    window.addEventListener("click", (e) => {
      if (e.target !== dropDownRef.current && e.target !== imageRef.current) {
        setdropDown(false);
      }
      if (e.target !== drop.current && e.target !== image.current) {
        setdropDown_2(false);
      }
      if (e.target !== cartimageRef.current) {
       setshoppingCart(false);
      }
      if (e.target !== sideRef.current && e.target !== sideImageRef.current) {
        setsideBar(false);
      }
      if (e.target !== searchRef.current && e.target !== mainSearch.current) {
        setSearchMenu(false);
      }
      if (e.target !== sideImageDiv.current && e.target !== sideImageRef_2.current) {
        setloginDropDown(false);
      }
    });
  
  },[])
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault(); // Prevent default behavior of scrolling the page
        setSelectedTitleIndex((prevIndex) =>
          (prevIndex + 1) % filteredProducts.length
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedTitleIndex((prevIndex) =>
          (prevIndex - 1 + filteredProducts.length) % filteredProducts.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [filteredProducts.length]);
  useEffect(() => {
    setFilteredProducts(product.allProducts);
 
  }, [product.allProducts]);

  const handleSearchClick = () => {
    setsearch(true);
  };
  const handleDropDownClick = () => {
    setdropDown(!dropDown);
  };

  const handleCrossClick = () => {
    setsearch(false);
  };
  const handleChange = (e) => {
  console.log('change');
  const searchTerm = e.target.value.toLowerCase();
  const filtered = product.allProducts.filter((item) =>
  item.title.toLowerCase().includes(searchTerm)
  );
if (e.target.value==""){
  setFilteredProducts( [{
    title:  "No Products To Show",
  }]);
}
  else if (filtered.length <= 0){
    setFilteredProducts( [{
      title:  "No Products To Show",
    }]);
  }
  else{
    setFilteredProducts(filtered)
  }
  setSearchMenu(true)

  };
  const handleProductsSearched = ()=>{
  
    if (filteredProducts[0].title!=="No Products To Show") {
      navigate('/SearchedProducts' , {state:{filteredProducts}})   
      setResulsToggle(true)   
    }
    
  }
  const handleKeyUp = (e)=>{
    if (filteredProducts[0].title!=="No Products To Show") {
    if (e.key=='Enter') {
      navigate('/SearchedProducts' , {state:{filteredProducts}})
      setSearchMenu(false)
      setResulsToggle(false)
    }}
  }
  const convertPrice = (val) => {
    return parseInt(val.slice(1));
  };
  const calculateOrderPrice = () => {
    let total = 0;
  if(!user){  products.forEach((item) => {
      total += item.Qty * convertPrice(item.price);
    });}
    else{
      userProducts.forEach((item) => {
        total += item.Qty * convertPrice(item.price);
      });
    }
    return total;
  };
  const products =  JSON.parse(localStorage.getItem('product'));
  const handleProceedClick = ()=>{
    navigate("/Checkout" , {state:{filteredProducts}})  
  }
  const userInformation = sessionStorage.getItem('token');
 


  useEffect(() => {
   if (sessionStorage.getItem('token')){
    product.setloginButton(1)
   }
  }, []);
  const sideImageRef_2 = useRef(null)
  const sideImageDiv = useRef(null)
  const [loginDropDown, setloginDropDown] = useState(false);
  const [Data, setData] = useState(null);
  const handleLogout = ()=>{
    sessionStorage.removeItem('token');
    product.setselectedProducts_2([])
    product.setlogout(false)  
    product.setHidingExtra(false)
    product.setloginButton(false)
    product.setproductIds([])
    
  }
  useEffect(() => {
    const fetch =async () =>{ 
    try {
      const { data, error } = await supabase
        .from('User_Profile')
        .select();
      if (data) {
      localStorage.setItem('profileData', JSON.stringify(data));
      }
    } catch (error) {
      alert(error);
    }
}
    fetch()
}, [handleLogout]);

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
  return (
    <header>
      <div className="xsm:hidden xl:block pt-[15px] pb-[15px] bg-[#020202] pl-[15px] pr-[15px]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 2, x: 0 }}
          transition={{ duration: 0.7 }}
          className=" relative flex lg:flex-row xsm:flex-col justify-between gap-[30px] items-center max-w-[1400px] mx-auto"
        >
          <div className="flex">
            <p className="text-[#A2A6B0]">Mon-Thu:</p>
            <p className="text-[#FFFFFF] lg:pl-[8px]">9:00 AM - 5:30 PM</p>
            <button className="lg:pt-[4px] cursor-pointer">
              <motion.img
                whileTap={{ scale: 0.6 }}
                src={Button}
                alt=""
                onClick={handleDropDownClick}
                ref={imageRef}
              />
            </button>
            {dropDown ? (
              <motion.div
                ref={dropDownRef}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 2, y: 0 }}
                transition={{ duration: 0.7 }}
                className=" absolute z-30  sm:left-[194px] xsm:left-[150px] top-[30px] mx-auto drop-shadow-md max-w-[295px] max-h-[262px] bg-white  border-[1px] border-solid border-[#CACDD8]"
              >
                <div class="h-0 w-0 mt-[-4px] ml-[18px] border-solid border-[white] border-b-8 border-l-8 transform rotate-45"></div>
                <div className="flex border-b-[#CACDD8] border-solid border-b-[1px] pl-2 pt-2 pr-3">
                  <div>
                    <img src={Clock} alt="" className="" />
                  </div>
                  <div>
                    <p className="text-[#000000] font-normal">We are open:</p>
                    <div className="flex">
                      <p className="text-[#A2A6B0]">Mon-Thu:</p>
                      <p className="text-[#000000] font-semibold ">
                        9:00 AM - 5:30 PM
                      </p>{" "}
                    </div>

                    <div className="flex">
                      <p className="text-[#A2A6B0]">Fr:</p>
                      <p className="text-[#000000] font-medium ">
                        {" "}
                        9:00 AM - 6:00 PM
                      </p>{" "}
                    </div>

                    <div className="flex pb-4">
                      <p className="text-[#A2A6B0]">Sat:</p>
                      <p className="text-[#000000] font-medium ">
                        {" "}
                        11:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex pt-2 pb-2 border-b-[#CACDD8] border-solid border-b-[1px] pl-[5.5px]">
                  <img src={location} alt="" className="mt-[-17px]" />
                  <p className="pl-2">
                    Address: 1234 Street Adress, <br /> City Address, 1234
                  </p>
                </div>
                <div className="pt-2 pb-3 pl-4">
                  <p>
                    Phones:{" "}
                    <a href="" className="text-[#0156FF]">
                      (00) 1234 5678
                    </a>{" "}
                  </p>
                  <p>
                    E-mail:{" "}
                    <a href="" className="text-[#0156FF]">
                      shop@email.com
                    </a>
                  </p>
                </div>
              </motion.div>
            ) : (
              ""
            )}
          </div>
          <div className="max-w-[525px] w-full flex xsm:flex-col sm:flex-row text-center justify-center items-center">
            <p className="text-[#ACACAC]">
              Visit our showroom in 1234 Street Adress City Address, 1234{" "}
            </p>
            <Link
              to="/ContactUs"
              className=" max-w-[80px] w-full text-[#FFFFFF] ml-[10px] border-b-2 cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex item-center">
            <p className="text-[#FFFFFF]">Call Us: (00) 1234 5678</p>
            <div className="flex mt-[3px]">
              <a href="https://www.facebook.com/">
                <img src={Ficon} alt="" className="ml-[15px] cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/">
                <img src={Iicon} alt="" className="ml-[6px] cursor-pointer" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="border-b-[1px] border-solid border-[#CACDD8]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 2, x: 0 }}
          transition={{ duration: 0.7 }}
          className="xl:pt-[15px] xl:pb-[15px]  justify-between xl:max-w-[1400px]  w-full mx-auto  flex items-center "
        >
          <div className="flex items-center justify-between xl:w-auto xsm:w-full ">
            <Link to="/">
              <img src={Logo} alt="" className="" onClick={()=>{product.setproductToast(false)}}/>
            </Link>
            <div className="xsm:block xl:hidden pr-[15px] pt-[3px]">
              {" "}
              <motion.i
                onClick={() => {
                  setsideBar(!sideBar);
                }}
                ref={sideImageRef}
                whileTap={{ scale: 0.6 }}
                className=" fa-solid fa-bars text-[27px] text-[#0156FF]  "
              ></motion.i>
            </div>

            {search === true ? (
              <div className="flex items-center justify-center  xsm:hidden xl:block">
                <div className="relative flex items-center ">
                  <motion.input
                  ref={mainSearch}
                    type="text"
                    className="bg-[#F5F7FF] text-[18px] searchinput outline-none rounded-full xsm:hidden xl:block  pl-12 pr-12  "
                    placeholder="Search entire store here..."
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 2, x: 0 }}
                    transition={{ duration: 0.7 }}
                    onChange={handleChange}
                    onKeyUp={handleKeyUp}
                  />
                  <motion.button
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 2, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="search bg-transparent outline-none rounded-full  pl-12 pr-7 absolute top-[9px] right-0 mt-3"
                    onClick={handleProductsSearched}
                    
                  >
                    <img src={Search} alt="" />
                  </motion.button>
                </div>
              </div>
            ) : (
              <motion.div className="xl:flex items-center xsm:hidden gap-[20px]">
                <motion.ul
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 2, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="flex items-center 2xl:gap-[20px] gap-[13px] "
                >
                  <li
                    className={` cursor-pointer flex items-center justify-center  font-semibold rounded-[100px] w-[80px] h-[37px] ${
                     product.hoveredItem_3 ? "bg-[#0156FF] text-[#ffff] " : ""
                    }]`}
                    onMouseEnter={() => {
                      product.setHoveredItem_3(true);
                    }}
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => {
                        product.setHoveredItem_3(false);
                      }, 1000);
                      if (hoveredItem_3Ref.current) {
                        hoveredItem_3Ref.current.addEventListener(
                          "mouseenter",
                          () => {
                            clearTimeout(timeout);
                          }
                        );
                      }
                    }}
                  >
                    Laptops
                  </li>
                  <li className=" cursor-pointer  font-semibold">
                    Desktop PCs
                  </li>
                  <li className=" cursor-pointer  font-semibold">
                    Networking Devices
                  </li>
                  <li className=" cursor-pointer  font-semibold">
                    Printers & Scanners
                  </li>
                  <li className=" cursor-pointer  font-semibold">PC Parts</li>
                  <li className=" cursor-pointer  font-semibold">
                    All Other Products
                  </li>
                  <li className=" cursor-pointer  font-semibold">Repairs</li>
                </motion.ul>
                <button className="text-[#0156FF] font-semibold border-2 border-solid border-[#0156FF]  pt-[8px] pb-[8px] pl-[28px] pr-[28px] rounded-3xl">
                  Our Deals
                </button>
              </motion.div>
            )}
            {product.hoveredItem_3 ? (
              <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 2, y: 0 }}
              transition={{ duration: 0.7 }}
                className="absolute z-20 top-[156px]"
                ref={hoveredItem_3Ref}
                onMouseLeave={() => {
                  product.setHoveredItem_3(false);
                  setmenu(false);
                  setmenu_2(false); 
                  setmenu_3(false);
                }}
              >
                <div className="divShadow">
                <div className="flex  bg-white  max-w-[1398px] w-full mx-auto border-[1px] border-[#CACDD8] border-solid">
                  <div className="max-w-[330px] w-full border-[1px] border-[#CACDD8] border-solid">
                    {firstHoveredMenu.map((item, index) => (
                      <div
                        key={index + "menu"}
                        onClick={() => {
                          setmenu((menu) => !menu);
                          setmenu_2(false);
                          setmenu_3(false);
                        }}
                        className={`cursor-pointer w-full flex justify-between items-center hover:bg-[#F5F7FF] pl-[28px] pt-[10px] pb-[13px] pr-[24px] 
                  }`}
                      >
                        <li className=" list-none text-[14px] leading-[21px] font-[600]">
                          {item.title}
                        </li>
                        {item.title=== 'Everyday Use Notebooks' && <img src={item.img} alt="" />}
                      </div>
                    ))}
                  </div>
                  {menu ? (
                    <div className="max-w-[263px] w-full border-[1px] border-[#CACDD8] border-solid">
                      {secondHoveredMenu.map((item, index) => (
                        <div
                          onClick={() => {
                            setmenu_2((menu_2) => !menu_2);
                            setmenu_3(false);
                          }}
                          key={index + "2menu"}
                          className={`cursor-pointer w-full flex justify-between items-center hover:bg-[#F5F7FF] pl-[28px] pt-[10px] pb-[13px] pr-[24px] 
                  }`}
                        >
                          <li className=" list-none text-[14px] leading-[21px] font-[600]">
                            {item.title}
                          </li>
                          {item.title === 'MSI Workstation Series' && (
                            <img src={item.img} alt="" />
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                  {menu_2 ? (
                    <div className="max-w-[263px] w-full border-[1px] border-[#CACDD8] border-solid">
                      {thirdHoveredMenu.map((item, index) => (
                        <div
                          key={index + "3menu"}
                          onClick={
                            () => {
                              item.onClick &&  setmenu_3(!menu_3);
                          }}
                          className={`w-full flex justify-center  pl-[28px] pt-[10px] pb-[13px] pr-[24px]`}
                        >
                          <li className=" cursor-pointer flex gap-[2px] list-none text-[14px] leading-[21px] font-[600]">
                            {item.title} {item.num}
                          </li>
                        </div>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                  {menu_3 ? (
                    <div className="flex w-full justify-around border-[1px] border-[#CACDD8] border-solid">
                      {hoveredProducts.map((item, index) => (
                        <ProductDiv item={item} index={index} />
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="max-w-[1398px]  mx-auto w-full flex border-[1px] border-[#CCCCCC] border-solid">
                  {images.map((item, index) => (
                    <div key={index + "imags"}>
                      {" "}
                      <img src={item.img} alt="" />
                    </div>
                  ))}
                </div>
                </div>
              </motion.div>
            ) : (
              ""
            )}
          </div>
          <div className="flex relative xsm:hidden xl:flex">
            {search ? (
              <motion.img
                whileTap={{ scale: 0.6 }}
                src={Cross}
                alt=""
                className="mr-5 cursor-pointer"
                onClick={handleCrossClick}
              />
            ) : (
              <motion.img
                whileTap={{ scale: 0.6 }}
                src={Search}
                alt=""
                className=" mr-5 cursor-pointer"
                onClick={handleSearchClick}
              />
            )}
          <div className="relative flex items-center">  <svg width={20} onClick={()=>{
            navigate('/favProducts')
            product.setfavProsuct(false)
          }} className={`mr-[15px] ${product.loginButton ?"mt-[-2px]":"mt-[-2px]"}  cursor-pointer`} height={16} viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.68513 2.82536L8.39535 3.54187L9.10557 2.82536C9.77879 2.14617 10.8139 1.375 11.8922 1.375C12.9606 1.375 13.8026 1.73075 14.3714 2.278C14.9374 2.82255 15.2936 3.61414 15.2936 4.60948C15.2936 5.68046 14.8643 6.59251 14.1287 7.47611C13.3739 8.3829 12.3563 9.19134 11.2509 10.0643L11.2252 10.0846C10.2883 10.8241 9.24578 11.647 8.39584 12.5675C7.55422 11.655 6.52157 10.8387 5.59303 10.1047L5.54239 10.0646L5.54198 10.0643C4.43628 9.19109 3.4189 8.38246 2.66433 7.47571C1.92905 6.59215 1.5 5.68023 1.5 4.60948C1.5 3.61414 1.8562 2.82257 2.42223 2.27804C2.99108 1.73079 3.83327 1.375 4.9021 1.375C5.97913 1.375 7.01114 2.14538 7.68513 2.82536Z" stroke="#000000" strokeWidth={2} />
</svg>
<div className={`count absolute  ${product.loginButton ? 'right-[7px] top-[-1px]': 'right-[6px] top-[-8px]'}  rounded-full w-[16px] h-[17px] bg-[#0156FF] flex items-center justify-center text-[10px] leading-[15px]  text-[#ffff]`}>
            {product.favProductsName.length}
            </div>
</div>
            <div className="relative flex flex-col items-center">

              <motion.img
                whileTap={{ scale: 0.6 }}
                ref={cartimageRef}
                src={Cart}
                alt=""
                className={`${product.loginButton ? 'mt-[11px] mr-5':"mt-[2.5px] mr-5"}  cursor-pointer `}
                onClick={() => {
                  if(!sessionStorage.getItem('token')){localStorage.setItem("userProducts",JSON.stringify([]))}
                  setshoppingCart(!shoppingCart);
                }}
              />
              {shoppingCart && (
                <div
                  ref={cartRef}
                  className="absolute z-50 max-h-[511px] overflow-y-auto  right-[22px] top-[22px] w-[311px]  bg-white pt-[23px] border-[#CACDD8] border-[1px] border-solid"
                >
                  <div className="relative">
                    <div class="absolute right-[15px] top-[-26px] h-[15px] w-[15px]  border-solid border-[#ffffff] border-b-8 border-l-8 transform rotate-45"></div>
                  </div>
                  <h1 className="text-center font-[600] text-[18px] leading-[26px]">
                    My Cart
                  </h1>
                  <p className="font-[400] leading-[18px] text-[12px] text-[#000000] text-center pt-[6px]">
                  {user ? product.selectedProducts_2.length : productArr.length} item in cart
                  </p>
                  <div className="pt-[17px] w-full pb-[20px] flex justify-center border-b-[1px] border-solid border-[#CACDD8]">
                    <Link to="/ShoppingCart">
                      {" "}
                      <button className="text-[#0156FF] border-solid border-[#0156FF] border-2 rounded-[50px] h-[37px] w-[250px] text-[14px] leading-[21px] font-[600]">
                        View or Edit Your Cart
                      </button>
                    </Link>
                  </div>
                  {!user ? 
                    <div>
                  {products?.map((item, index) => (
                    <div
                      key={index + "cart"}
                      className="flex justify-between pt-[17px] gap-[10px] pb-[19px] items-start pl-[15px] pr-[8px] border-b-[1px] border-solid border-[#CACDD8]"
                    >
                      <div className="flex items-center h-[70px]">
                        <h1>{item.Qty}x</h1>
                      </div>

                      <img
                        src={item.image}
                        alt=""
                        className="w-[50px] h-[50px]"
                      />
                      <p>{item.title}</p>
                    </div>
                  ))}
                  </div>
                  :<div>
                  {product.selectedProducts_2?.map((item, index) => (
                    <div
                      key={index + "cart"}
                      className="flex justify-between pt-[17px] gap-[10px] pb-[19px] items-start pl-[15px] pr-[8px] border-b-[1px] border-solid border-[#CACDD8]"
                    >
                      <div className="flex items-center h-[70px]">
                        <h1>{item.Qty}x</h1>
                      </div>

                      <img
                        src={item.image}
                        alt=""
                        className="w-[50px] h-[50px]"
                      />
                      <p>{item.title}</p>
                    </div>
                  ))}
                  </div>}
                  <h1 className="flex items-center justify-center text-[14px] leading-[18px] font-[600] text-[#A2A6B0] pt-[16px]">
                    Subtotal:
                    <p className=" text-black pl-2 text-[18px] leading-[26px] font-[600]">
                    ${calculateOrderPrice().toFixed(2)}
                    </p>
                  </h1>
                  <div className="flex items-center justify-center flex-col gap-[10px] pt-[13px] pb-[24px]">
                      <button onClick={handleProceedClick} className="w-[250px] h-[37px] bg-[#0156FF] rounded-[50px] text-[14px] leading-[21px] font-[600] text-[#ffff]">
                      Proceed To Checkout
                      </button>
                    <button className="w-[250px] h-[37px] bg-[#FFB800] rounded-[50px] text-[14px] leading-[18px] font-[600] flex items-center justify-center gap-1 ">
                      <p>Check out with </p>
                      <img src={pay} alt="" />
                    </button>
                  </div>
                </div>
              )}
            </div>
            
          {product.loginButton ?  <motion.img
              ref={image}
              whileTap={{ scale: 0.6 }}
              src={Avatar}
              alt=""
              onClick={() => {
                setdropDown_2(!dropDown_2);
              }}
              className=" cursor-pointer mr-[15px]"
            />: 
            <motion.i
            ref={sideImageRef_2}
            whileTap={{ scale: 0.6 }}
            onClick={()=>{setloginDropDown(!loginDropDown)}}
            className=" fa-solid fa-bars text-[20px] mr-[10px] text-[#0156FF] cursor-pointer "
          ></motion.i>}
            <div className={`count absolute  ${product.loginButton ? 'right-[61px] top-[-1px]': 'right-[38px] top-[-8px]'}  rounded-full w-[16px] h-[17px] bg-[#0156FF] flex items-center justify-center text-[10px] leading-[15px]  text-[#ffff]`}>
            {user  ? product.selectedProducts_2.length : product.selectedProducts.length}
            </div>
            {loginDropDown && <div ref={sideImageDiv} className="absolute right-[10px] bg-white top-[22px] z-40 p-[10px] border-[1px] border-solid border-slate-300">
              {lies?.map((item , index)=>(
                <Link key={index+"lies2"} to={item.path} className="block text-slate-400 hover:text-black">{item.title}</Link>
              ))}
            </div>}
            {dropDown_2 == 1 ? (
              <div className="relitive " ref={drop}>
                <div className="absolute bg-white w-[232px] z-20 border-[1px] border-solid border-[#CACDD8] top-[33px]  right-0  pl-[26px] pr-[17px] pt-[26px] pb-[26px]">
                  <div className="relative">
                    <div class="absolute right-[1px] top-[-26px] h-0 w-0 mt-[-4px] ml-[18px] border-solid border-[white] border-b-8 border-l-8 transform rotate-45"></div>
                  </div>
                  <div>
                  <h1  className="text-[20px] font-[600] flex items-center"><h1  className="mr-[5px] text-[16px] font-[400]"> Welcome!</h1>{userInformation && token.user.user_metadata.full_name}</h1>
                  <Link to={"/UserAccount"} className="hover:font-[600] list-none cursor-pointer text-[14px] leading-[28px] font-medium">My  Account</Link>
                  <Link to="/UserAccount?scroll=wish"   className="block hover:font-[600] list-none cursor-pointer text-[14px] leading-[28px] font-medium"> My Wish List (0)</Link>
                  <Link to="/UserAccount?scroll=compare"  className="block hover:font-[600] list-none cursor-pointer text-[14px] leading-[28px] font-medium">Compare (0)</Link>
                  {lies.map((item, index) => (
                   
                    <Link
                      to={item.path}
                      key={index + "lies"}
                      className={` ${product.hidingExtra && item.extraclass} block hover:font-[600] list-none cursor-pointer text-[14px] leading-[28px] font-medium`}
                    >
                      {item.title}
                    </Link>
                  ))}
                 
                  <Link to={'/login'} onClick={handleLogout} className="block hover:font-[600] list-none cursor-pointer text-[14px] leading-[28px] font-medium">Log out</Link>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
         
        </motion.div>
      </div>
      <div>
   {searchMenu==true &&  (<div ref={searchRef} className="max-w-[1400px] w-full relative mx-auto">
     <div className={`pt-[5px]  border-[1px] border-[solid] border-slate-300 absolute xsm:top-[64px] xl:top-[0px] z-30 left-[90px] searchinput_2 bg-[#ffffff] rounded-[20px]`}>
     {filteredProducts.map((item, index)=> (
      <h1 onClick={handleProductsSearched} key={index+'allProducts'} className={`hover:bg-slate-300 searchedTitle cursor-pointer rounded-[20px] p-[10px] border-b-[1px] border-[solid] border-slate-300${
         selectedTitleIndex === index  ? ("bg-slate-300") : ("")
      } `}  style={{
        animation: `${
          index === selectedTitleIndex ? "fadeInDown" : ""
        } 1s ease`,
      }}>{item.title}</h1>
     ))}
</div>
     </div>)}</div>
      <div className="relative xsm:flex xl:hidden  ">
        {sideBar == false ? (
          <div className="relative w-full ">
            <motion.input
              type="search"
              className="bg-[#F5F7FF] mt-[15px] w-full searchInput_2 outline-none rounded-full xsm:pl-8 xl:pl-12 pr-12  first-input"
              placeholder="Search entire store here..."
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 2, x: 0 }}
              transition={{ duration: 0.7 }}
              onChange={handleChange}
            />
            <motion.button
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 2, x: 0 }}
              transition={{ duration: 0.7 }}
              onClick={handleProductsSearched}
              className="search bg-transparent outline-none rounded-full  pl-12 pr-7 absolute top-[17px]  right-0 mt-3 sm:h-[10px]"
            >
              <img src={Search} alt="" className="xsm:w-[15px] lg:w-[18px]" />
            </motion.button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 2, x: 0 }}
            transition={{ duration: 0.7 }}
            ref={sideRef}
            className="absolute rounded-[10px] z-50 mx-auto max-w-[1280px] w-full bg-[#F5F7FF] flex flex-col gap-[5px] pl-[20px] pt-[20px] pb-[20px]  text-[#95969a]"
          >
            {sale.map((item, index) => (
              <Link
                to={item.path}
                key={index + "sale"}
                className={`list-none max-w-[200px] w-full  hover:text-[black] hover:font-[700]`}
              >
                {item.title}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    
    </header>
  );
};

export default Header;

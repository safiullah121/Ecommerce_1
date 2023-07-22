// import React from "react";
// import Button from "../../pages/img/1.svg";
// import Ficon from "../../pages/img/2.svg";
// import Iicon from "../../pages/img/3.svg";
// import Clock from "../../pages/img/clock.svg";
// import location from "../../pages/img/location.svg";
// import Logo from "../../pages/img/Logo.svg";
// import Search from "../../pages/img/search.svg";
// import Cart from "../../pages/img/4.svg";
// import Avatar from "../../pages/img/5.svg";
// import Cross from "../../pages/img/cross.svg";
// import right from "../../pages/img/right.svg";
// import Check from "../../pages/img/check.svg";
// import Star from "../../pages/img/15.svg";
// import Window from "../../pages/img/11.svg";
// import Rules from "../../pages/img/rules.svg";
// import messi from "../../pages/img/msi.svg";
// import Razer from "../../pages/img/razer.svg";
// import Therma from "../../pages/img/therma.svg";
// import Adata from "../../pages/img/adata.svg";
// import Pakard from "../../pages/img/pakard.svg";
// import Gig from "../../pages/img/gig.svg";
// import { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import ProductDiv from "../../pages/Home/ProductDiv";
// import Color from "../../pages/img/13.svg";
// import cross from "../../pages/img/cross_2.svg";
// import Edit from "../../pages/img/edit.svg";
// import pay from "../../pages/img/pay.svg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

// const Header = () => {
//   const [search, setsearch] = useState(false);
//   const [dropDown, setdropDown] = useState(false);
//   const dropDownRef = useRef();
//   const imageRef = useRef();
//   const drop = useRef();
//   const image = useRef();
//   window.addEventListener("click", (e) => {
//     if (e.target !== dropDownRef.current && e.target !== imageRef.current) {
//       setdropDown(false);
//     }
//   });
//   window.addEventListener("click", (e) => {
//     if (e.target !== drop.current && e.target !== image.current) {
//       setdropDown_2(false);
//     }
//   });
//   window.addEventListener("click", (e) => {
//     if (e.target !== cartRef.current && e.target !== cartimageRef.current) {
//       setshoppingCart(false);
//     }
//   });
//   window.addEventListener("click", (e) => {
//     if (e.target !== sideRef.current && e.target !== sideImageRef.current) {
//       setsideBar(false);
//     }
//   });
//   const handleSearchClick = () => {
//     setsearch(true);
//   };
//   const handleDropDownClick = () => {
//     setdropDown(!dropDown);
//   };

//   const handleCrossClick = () => {
//     setsearch(false);
//   };
//   const firstMenu = [
//     { title: "Everyday Use Notebooks", img: right },
//     { title: "MSI Workstation Series  ", img: right },
//     { title: "MSI Prestige Series  ", img: right },
//     { title: "Gaming Notebooks", img: right },
//     { title: "Tablets And Pads", img: right },
//     { title: "Netbooks", img: right },
//     { title: "Infinity Gaming Notebooks", img: right },
//   ];
//   const secondMenu = [
//     { title: "MSI Workstation Series", img: right },
//     { title: "  MSI Prestige Series ", img: right },
//   ];
//   const thirdMenu = [
//     { title: "MSI WS Series", num: <p className="text-[#A2A6B0]"> (12)</p> },
//     { title: "  MSI WT Series", num: <p className="text-[#A2A6B0]"> (31)</p> },
//     { title: "  MSI WE Series", num: <p className="text-[#A2A6B0]"> (7)</p> },
//   ];
//   const arrayOne = [
//     {
//       id: Math.random(),
//       label: Check,
//       label_2: "in stock",
//       image: Window,
//       review: Star,
//       title: (
//         <p className="text-[13px] font-normal leading-[19px]">
//           EX DISPLAY : MSI Pro 16 <br /> Flex-036AU 15.6 MULTITOUCH <br />{" "}
//           All-In-On...
//         </p>
//       ),
//       price: "$499.00",
//       discountedPrice: "$499.00",
//     },
//     {
//       id: Math.random(),
//       label: Check,
//       label_2: "in stock",
//       image: Window,
//       review: Star,
//       title: (
//         <p className="text-[13px] font-normal leading-[19px]">
//           EX DISPLAY : MSI Pro 16 <br /> Flex-036AU 15.6 MULTITOUCH <br />{" "}
//           All-In-On...
//         </p>
//       ),
//       price: "$499.00",
//       discountedPrice: "$499.00",
//     },
//   ];
//   const images = [
//     { img: Rules },
//     { img: messi },
//     { img: Razer },
//     { img: Therma },
//     { img: Adata },
//     { img: Pakard },
//     { img: Gig },
//   ];
//   const [hoveredItem, setHoveredItem] = useState(null);
//   const [hoveredItem_2, setHoveredItem_2] = useState(null);
//   const [hoveredItem_3, setHoveredItem_3] = useState(null);
//   const [dropDown_2, setdropDown_2] = useState(false);
//   const [menu, setmenu] = useState(false);
//   const [menu_2, setmenu_2] = useState(false);
//   const [menu_3, setmenu_3] = useState(false);
//   const lies = [
//     { title: "My  Account", path: "/UserAccount" },
//     { title: " My Wish List (0)", path: "/UserAccount" },
//     { title: " Compare (0)", path: "/UserAccount" },
//     { title: "  Create an Account", path: "/Register" },
//     { title: " Sign In", path: "/Register" },
//   ];
//   const cart = {
//     count: "1x",
//     img: Color,
//     title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
//     cross: cross,
//     edit: Edit,
//   };

//   const count = 2;
//   const hoveredItem_3Ref = useRef();
//   const cartRef = useRef();
//   const cartimageRef = useRef();
//   const [shoppingCart, setshoppingCart] = useState(false);
//   const sale = [
//     { title: "Laptops" },
//     { title: "Desktop PCs" },
//     { title: "Networking Devices" },
//     { title: "Printers & Scanners" },
//     { title: "PC Part" },
//     { title: "All Other Products" },
//     { title: "Repairs" },
//     { title: "Contact Us", path: "/ContactUs" },
//     { title: "Dashboard", path: "/UserAccount" },
//     { title: "Shopping Cart", path: "/ShoppingCart" },
//     { title: "Sign Up", path: "/Register" },
//     { title: "Sign In", path: "/Register" },
//   ];
//   const [sideBar, setsideBar] = useState(false);
//   const sideRef = useRef(null);
//   const sideImageRef = useRef(null);
//   return (
//     <header >
//       {/* <div className="xsm:hidden xl:block pt-[15px] pb-[15px] bg-[#020202] ">
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 2, x: 0 }}
//           transition={{ duration: 0.7 }}
//           className=" relative flex lg:flex-row xsm:flex-col justify-between gap-[30px] items-center max-w-[1400px] mx-auto"
//         >
//           <div className="flex">
//             <p className="text-[#A2A6B0]">Mon-Thu:</p>
//             <p className="text-[#FFFFFF] lg:pl-[8px]">9:00 AM - 5:30 PM</p>
//             <button className="lg:pt-[4px] cursor-pointer">
//               <motion.img
//                 whileTap={{ scale: 0.6 }}
//                 src={Button}
//                 alt=""
//                 onClick={handleDropDownClick}
//                 ref={imageRef}
//               />
//             </button>
//             {dropDown ? (
//               <motion.div
//                 ref={dropDownRef}
//                 initial={{ opacity: 0, y: -40 }}
//                 animate={{ opacity: 2, y: 0 }}
//                 transition={{ duration: 0.7 }}
//                 className=" absolute z-30  sm:left-[194px] xsm:left-[150px] top-[30px] mx-auto drop-shadow-md max-w-[295px] max-h-[262px] bg-white  border-[1px] border-solid border-[#CACDD8]"
//               >
//                 <div class="h-0 w-0 mt-[-4px] ml-[18px] border-solid border-[white] border-b-8 border-l-8 transform rotate-45"></div>
//                 <div className="flex border-b-[#CACDD8] border-solid border-b-[1px] pl-2 pt-2 pr-3">
//                   <div>
//                     <img src={Clock} alt="" className="" />
//                   </div>
//                   <div>
//                     <p className="text-[#000000] font-normal">We are open:</p>
//                     <div className="flex">
//                       <p className="text-[#A2A6B0]">Mon-Thu:</p>
//                       <p className="text-[#000000] font-semibold ">
//                         9:00 AM - 5:30 PM
//                       </p>{" "}
//                     </div>

//                     <div className="flex">
//                       <p className="text-[#A2A6B0]">Fr:</p>
//                       <p className="text-[#000000] font-medium ">
//                         {" "}
//                         9:00 AM - 6:00 PM
//                       </p>{" "}
//                     </div>

//                     <div className="flex pb-4">
//                       <p className="text-[#A2A6B0]">Sat:</p>
//                       <p className="text-[#000000] font-medium ">
//                         {" "}
//                         11:00 AM - 5:00 PM
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex pt-2 pb-2 border-b-[#CACDD8] border-solid border-b-[1px] pl-[5.5px]">
//                   <img src={location} alt="" className="mt-[-17px]" />
//                   <p className="pl-2">
//                     Address: 1234 Street Adress, <br /> City Address, 1234
//                   </p>
//                 </div>
//                 <div className="pt-2 pb-3 pl-4">
//                   <p>
//                     Phones:{" "}
//                     <a href="" className="text-[#0156FF]">
//                       (00) 1234 5678
//                     </a>{" "}
//                   </p>
//                   <p>
//                     E-mail:{" "}
//                     <a href="" className="text-[#0156FF]">
//                       shop@email.com
//                     </a>
//                   </p>
//                 </div>
//               </motion.div>
//             ) : (
//               ""
//             )}
//           </div>
//           <div className="max-w-[525px] w-full flex xsm:flex-col sm:flex-row text-center justify-center items-center">
//             <p className="text-[#ACACAC]">
//               Visit our showroom in 1234 Street Adress City Address, 1234{" "}
//             </p>
//             <Link
//               to="/ContactUs"
//               className=" max-w-[80px] w-full text-[#FFFFFF] ml-[10px] border-b-2 cursor-pointer"
//             >
//               Contact Us
//             </Link>
//           </div>
//           <div className="flex item-center">
//             <p className="text-[#FFFFFF]">Call Us: (00) 1234 5678</p>
//             <div className="flex mt-[3px]">
//               <a href="https://www.facebook.com/">
//                 <img src={Ficon} alt="" className="ml-[15px] cursor-pointer" />
//               </a>
//               <a href="https://www.instagram.com/">
//                 <img src={Iicon} alt="" className="ml-[6px] cursor-pointer" />
//               </a>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       <div className="border-b-[1px] border-solid border-[#CACDD8]">
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 2, x: 0 }}
//           transition={{ duration: 0.7 }}
//           className="xl:pt-[15px] xl:pb-[15px]  justify-between xl:max-w-[1400px]  w-full mx-auto   flex items-center "
//         >
//           <div className="flex items-center justify-between xl:w-auto xsm:w-full">
//             <Link to="/">
//               <img src={Logo} alt="" className="" />
//             </Link>
//             <div className="xsm:block xl:hidden pr-[15px] pt-[3px]">
//               {" "}
//               <motion.i
//                 onClick={() => {
//                   setsideBar(!sideBar);
//                 }}
//                 ref={sideImageRef}
//                 whileTap={{ scale: 0.6 }}
//                 className=" fa-solid fa-bars text-[27px] text-[#0156FF]  "
//               ></motion.i>
//             </div>

//             {search === true ? (
//               <div className="flex items-center justify-center">
//                 <div className="relative flex items-center">
//                   <motion.input
//                     type="search"
//                     className="bg-[#F5F7FF] searchinput outline-none rounded-full  pl-12 pr-12 text-xl "
//                     placeholder="Search entire store here..."
//                     initial={{ opacity: 0, x: -40 }}
//                     animate={{ opacity: 2, x: 0 }}
//                     transition={{ duration: 0.7 }}
//                   />
//                   <motion.button
//                     initial={{ opacity: 0, x: -100 }}
//                     animate={{ opacity: 2, x: 0 }}
//                     transition={{ duration: 0.7 }}
//                     className="search bg-transparent outline-none rounded-full  pl-12 pr-7 absolute top-[9px] right-0 mt-3"
//                     onClick={handleSearchClick}
//                   >
//                     <img src={Search} alt="" />
//                   </motion.button>
//                 </div>
//               </div>
//             ) : (
//               <motion.div className="xl:flex items-center xsm:hidden gap-[20px]">
//                 <motion.ul
//                   initial={{ opacity: 0, x: -40 }}
//                   animate={{ opacity: 2, x: 0 }}
//                   transition={{ duration: 0.7 }}
//                   className="flex items-center 2xl:gap-[20px] gap-[13px] "
//                 >
//                   <li
//                     className={` cursor-pointer flex items-center justify-center  font-semibold rounded-[100px] w-[80px] h-[37px] ${
//                       hoveredItem_3 ? "bg-[#0156FF] text-[#ffff] " : ""
//                     }]`}
//                     onMouseEnter={() => {
//                       setHoveredItem_3(true);
//                     }}
//                     onMouseLeave={() => {
//                       const timeout = setTimeout(() => {
//                         setHoveredItem_3(false);
//                       }, 1000);
//                       if (hoveredItem_3Ref.current) {
//                         hoveredItem_3Ref.current.addEventListener(
//                           "mouseenter",
//                           () => {
//                             clearTimeout(timeout);
//                           }
//                         );
//                       }
//                     }}
//                   >
//                     Laptops
//                   </li>
//                   <li className=" cursor-pointer  font-semibold">
//                     Desktop PCs
//                   </li>
//                   <li className=" cursor-pointer  font-semibold">
//                     Networking Devices
//                   </li>
//                   <li className=" cursor-pointer  font-semibold">
//                     Printers & Scanners
//                   </li>
//                   <li className=" cursor-pointer  font-semibold">PC Parts</li>
//                   <li className=" cursor-pointer  font-semibold">
//                     All Other Products
//                   </li>
//                   <li className=" cursor-pointer  font-semibold">Repairs</li>
//                 </motion.ul>
//                 <button className="text-[#0156FF] font-semibold border-2 border-solid border-[#0156FF]  pt-[8px] pb-[8px] pl-[28px] pr-[28px] rounded-3xl">
//                   Our Deals
//                 </button>
//               </motion.div>
//             )}
//             {hoveredItem_3 ? (
//               <div
//                 className="absolute z-20 top-[156px]"
//                 ref={hoveredItem_3Ref}
//                 onMouseLeave={() => {
//                   setHoveredItem_3(false);
//                 }}
//               >
//                 <div className="flex h-[400px] bg-white  max-w-[1398px] w-full mx-auto border-[1px] border-[#CACDD8] border-solid">
//                   <div className="max-w-[330px] w-full border-[1px] border-[#CACDD8] border-solid">
//                     {firstMenu.map((item, index) => (
//                       <div
//                         onMouseEnter={() => setHoveredItem(index)}
//                         onMouseLeave={() => setHoveredItem(null)}
//                         key={index + "menu"}
//                         onClick={() => {
//                           setmenu((menu) => !menu);
//                           setmenu_2(false);
//                           setmenu_3(false);
//                         }}
//                         className={`cursor-pointer w-full flex justify-between items-center hover:bg-[#F5F7FF] pl-[28px] pt-[10px] pb-[13px] pr-[24px] 
//                   }`}
//                       >
//                         <li className=" list-none text-[14px] leading-[21px] font-[600]">
//                           {item.title}
//                         </li>
//                         {hoveredItem === index && <img src={item.img} alt="" />}
//                       </div>
//                     ))}
//                   </div>
//                   {menu ? (
//                     <div className="max-w-[263px] w-full border-[1px] border-[#CACDD8] border-solid">
//                       {secondMenu.map((item, index) => (
//                         <div
//                           onClick={() => {
//                             setmenu_2((menu_2) => !menu_2);
//                             setmenu_3(false);
//                           }}
//                           onMouseEnter={() => setHoveredItem_2(index)}
//                           onMouseLeave={() => setHoveredItem_2(null)}
//                           key={index + "2menu"}
//                           className={`cursor-pointer w-full flex justify-between items-center hover:bg-[#F5F7FF] pl-[28px] pt-[10px] pb-[13px] pr-[24px] 
//                   }`}
//                         >
//                           <li className=" list-none text-[14px] leading-[21px] font-[600]">
//                             {item.title}
//                           </li>
//                           {hoveredItem_2 === index && (
//                             <img src={item.img} alt="" />
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   ) : (
//                     ""
//                   )}
//                   {menu_2 ? (
//                     <div className="max-w-[263px] w-full border-[1px] border-[#CACDD8] border-solid">
//                       {thirdMenu.map((item, index) => (
//                         <div
//                           key={index + "3menu"}
//                           onClick={() => {
//                             setmenu_3((menu_3) => !menu_3);
//                           }}
//                           className={`w-full flex justify-center  pl-[28px] pt-[10px] pb-[13px] pr-[24px]`}
//                         >
//                           <li className=" cursor-pointer flex gap-[2px] list-none text-[14px] leading-[21px] font-[600]">
//                             {item.title} {item.num}
//                           </li>
//                         </div>
//                       ))}
//                     </div>
//                   ) : (
//                     ""
//                   )}
//                   {menu_3 ? (
//                     <div className="flex w-full justify-around border-[1px] border-[#CACDD8] border-solid">
//                       {arrayOne.map((item, index) => (
//                         <ProductDiv item={item} index={index} />
//                       ))}
//                     </div>
//                   ) : (
//                     ""
//                   )}
//                 </div>
//                 <div className="max-w-[1398px] mx-auto w-full flex border-[1px] border-[#CCCCCC] border-solid">
//                   {images.map((item, index) => (
//                     <div key={index + "imags"}>
//                       {" "}
//                       <img src={item.img} alt="" />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               ""
//             )}
//           </div>
//           <div className="flex relative xsm:hidden xl:flex">
//             {search ? (
//               <motion.img
//                 whileTap={{ scale: 0.6 }}
//                 src={Cross}
//                 alt=""
//                 className="mr-8 cursor-pointer"
//                 onClick={handleCrossClick}
//               />
//             ) : (
//               <motion.img
//                 whileTap={{ scale: 0.6 }}
//                 src={Search}
//                 alt=""
//                 className=" mr-8 cursor-pointer"
//                 onClick={handleSearchClick}
//               />
//             )}
//             <div className="relative flex flex-col items-center">
//               <motion.img
//                 whileTap={{ scale: 0.6 }}
//                 ref={cartimageRef}
//                 src={Cart}
//                 alt=""
//                 className="mt-[10px] mr-8 cursor-pointer"
//                 onClick={() => {
//                   setshoppingCart(!shoppingCart);
//                 }}
//               />
//               {shoppingCart && (
//                 <div
//                   ref={cartRef}
//                   className="absolute z-50  right-[22px] top-[22px] w-[311px]  bg-white pt-[23px] border-[#CACDD8] border-[1px] border-solid"
//                 >
//                   <div className="relative">
//                     <div class="absolute right-[15px] top-[-26px] h-[15px] w-[15px]  border-solid border-[#ffffff] border-b-8 border-l-8 transform rotate-45"></div>
//                   </div>
//                   <h1 className="text-center font-[600] text-[18px] leading-[26px]">
//                     My Cart
//                   </h1>
//                   <p className="font-[400] leading-[18px] text-[12px] text-[#000000] text-center pt-[6px]">
//                     2 item in cart
//                   </p>
//                   <div className="pt-[17px] w-full pb-[20px] flex justify-center border-b-[1px] border-solid border-[#CACDD8]">
//                     <Link to="/ShoppingCart">
//                       {" "}
//                       <button className="text-[#0156FF] border-solid border-[#0156FF] border-2 rounded-[50px] h-[37px] w-[250px] text-[14px] leading-[21px] font-[600]">
//                         View or Edit Your Cart
//                       </button>
//                     </Link>
//                   </div>
//                   {Array.from({ length: count }).map((_, index) => (
//                     <div
//                       key={index + "cart"}
//                       className="flex justify-between pt-[17px] pb-[19px] items-start pl-[15px] pr-[8px] border-b-[1px] border-solid border-[#CACDD8]"
//                     >
//                       <div className="flex items-center h-[70px]">
//                         <h1>{cart.count}</h1>
//                       </div>

//                       <img
//                         src={cart.img}
//                         alt=""
//                         className="w-[65px] h-[65px]"
//                       />
//                       <p>{cart.title}</p>
//                       <div className="flex flex-col gap-[5px]">
//                         <div>
//                           <img
//                             src={cart.cross}
//                             alt=""
//                             className="max-w-[20px]  h-[20px]"
//                           />
//                         </div>
//                         <div>
//                           <img
//                             src={cart.edit}
//                             alt=""
//                             className="max-w-[20px]  h-[20px]"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                   <h1 className="flex items-center justify-center text-[14px] leading-[18px] font-[600] text-[#A2A6B0] pt-[16px]">
//                     Subtotal:
//                     <p className=" text-black pl-2 text-[18px] leading-[26px] font-[600]">
//                       $499.00
//                     </p>
//                   </h1>
//                   <div className="flex items-center justify-center flex-col gap-[10px] pt-[13px] pb-[24px]">
//                     <Link to="/Checkout">
//                       {" "}
//                       <button className="w-[250px] h-[37px] bg-[#0156FF] rounded-[50px] text-[14px] leading-[21px] font-[600] text-[#ffff]">
//                         Go to Checkout
//                       </button>
//                     </Link>
//                     <button className="w-[250px] h-[37px] bg-[#FFB800] rounded-[50px] text-[14px] leading-[18px] font-[600] flex items-center justify-center gap-1 ">
//                       <p>Check out with </p>
//                       <img src={pay} alt="" />
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//             <motion.img
//               ref={image}
//               whileTap={{ scale: 0.6 }}
//               src={Avatar}
//               alt=""
//               onClick={() => {
//                 setdropDown_2(!dropDown_2);
//               }}
//               className=" cursor-pointer"
//             />
//             <div className=" absolute right-[57px] rounded-full w-[16px] h-[17px] bg-[#0156FF] flex items-center justify-center text-[10px] leading-[15px]  text-[#ffff]">
//               2
//             </div>
//             {dropDown_2 == 1 ? (
//               <div className="relitive " ref={drop}>
//                 <div className="absolute bg-white w-[232px] z-20 border-[1px] border-solid border-[#CACDD8] top-[33px]  right-0  pl-[26px] pr-[17px] pt-[26px] pb-[26px]">
//                   <div className="relative">
//                     <div class="absolute right-[1px] top-[-26px] h-0 w-0 mt-[-4px] ml-[18px] border-solid border-[white] border-b-8 border-l-8 transform rotate-45"></div>
//                   </div>
//                   {lies.map((item, index) => (
//                     <Link
//                       to={item.path}
//                       key={index + "lies"}
//                       className="block hover:font-[600] list-none cursor-pointer text-[14px] leading-[28px] font-medium"
//                     >
//                       {item.title}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               ""
//             )}
//           </div>
//         </motion.div>
//       </div>
//       <div></div>
//       <div className="relative xsm:flex xl:hidden  ">
//         {sideBar == false ? (
//           <div className="relative w-full ">
//             <motion.input
//               type="search"
//               className="bg-[#F5F7FF] mt-[15px] w-full searchInput_2 outline-none rounded-full xsm:pl-8 xl:pl-12 pr-12  first-input"
//               placeholder="Search entire store here..."
//               initial={{ opacity: 0, x: -40 }}
//               animate={{ opacity: 2, x: 0 }}
//               transition={{ duration: 0.7 }}
//             />
//             <motion.button
//               initial={{ opacity: 0, x: -100 }}
//               animate={{ opacity: 2, x: 0 }}
//               transition={{ duration: 0.7 }}
//               className="search bg-transparent outline-none rounded-full  pl-12 pr-7 absolute top-[17px]  right-0 mt-3 sm:h-[10px]"
//             >
//               <img src={Search} alt="" className="xsm:w-[15px] lg:w-[18px]" />
//             </motion.button>
//           </div>
//         ) : (
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 2, x: 0 }}
//             transition={{ duration: 0.7 }}
//             ref={sideRef}
//             className="absolute rounded-[10px] z-50 mx-auto max-w-[1280px] w-full bg-[#F5F7FF] flex flex-col gap-[5px] pl-[20px] pt-[20px] pb-[20px]  text-[#95969a]"
//           >
//             {sale.map((item, index) => (
//               <Link
//                 to={item.path}
//                 key={index + "sale"}
//                 className={`list-none max-w-[200px] w-full  hover:text-[black] hover:font-[700]`}
//               >
//                 {item.title}
//               </Link>
//             ))}
//           </motion.div>
//         )}
//       </div> */}
//     </header>
//   );
// };

// export default Header;

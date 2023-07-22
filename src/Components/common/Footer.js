import React from "react";
import Support from "../../pages/img/Support.svg";
import Account from "../../pages/img/Account.svg";
import Saving from "../../pages/img/Saving.svg";
import Face from "../../pages/img/face.svg";
import Insta from "../../pages/img/insta.svg";
import Group from "../../pages/img/8.svg";
import { BrowserRouter, Link } from "react-router-dom";
import { useContext } from "react";

const Footer = () => {
  const arrayOne = [
    "About Us",
    "About Zip",
    "Privacy Policy",
    "Search",
    "Terms",
    "Orders and Returns",
    "Contact Us",
    "Advanced Search",
    "Newsletter Subscription",
  ];
  const arrayTwo = [
    "CPUS",
    "Add On Cards",
    "Hard Drives (Internal)",
    "Graphic Cards",
    "Keyboards / Mice",
    "Cases / Power Supplies / Cooling",
    "RAM (Memory)",
    "Software",
    "Speakers / Headsets",
    "Motherboards",
  ];
  const arrayThree = [
    "Custom PCs",
    "Servers",
    "MSI All-In-One PCs",
    "HP/Compaq PCs",
    "ASUS PCs",
    "Tecs PCs",
  ];
  const arrayFour = [
    "Evryday Use Notebooks",
    "MSI Workstation Series",
    "MSI Prestige Series",
    "Tablets and Pads",
    "Netbooks",
    "Infinity Gaming Notebooks",
  ];
  const arrayFive = [
    { title: "Address: 1234 Street Adress City Address, 1234" },
    {
      title: "Phones:",
      title_2: " (00) 1234 5678",
      classlist: "text-[#01A4FF]",
    },
    {
      title: (
        <p className="leading-[18 px]">
          We are open: Monday-Thursday: 9:00 AM - <br /> 5:30 PM
        </p>
      ),
    },
    { title: "Friday: 9:00 AM - 6:00 PM" },
    { title: "Saturday: 11:00 AM - 5:00 PM" },
    {
      title: "E-mail:",
      title_2: "shop@email.com",
      classlist: "text-[#01A4FF]",
    },
  ];
  return (
    <>
      <div className="bg-[#F5F7FF]">
        <div className="flex justify-between flex-col gap-[20px] lg:gap-[0px] lg:flex-row mx-auto max-w-[1055px] w-full  pb-10 pt-10">
          <div className="max-w-[265px] mx-auto  text-center flex flex-col items-center">
            <img src={Support} alt="" className="pb-[25px]" />
            <h1 className="text-[18px] font-bold leading-[18px] pb-[13px]">
              Product Support
            </h1>
            <p className=" text-[14px] font-normal leading-[19.6px]">
              Up to 3 years on-site warranty available for your peace of mind.
            </p>
          </div>
          <div className="max-w-[265px]  mx-auto text-center flex flex-col items-center">
            <img src={Account} alt="" className="pb-[25px]" />
            <h1 className="text-[18px] font-bold leading-[18px] pb-[13px]">
              Personal Account
            </h1>
            <p className=" text-[14px] font-normal leading-[19.6px]">
              With big discounts, free delivery and a dedicated support
              specialist.
            </p>
          </div>
          <div className="max-w-[265px] mx-auto  text-center flex flex-col items-center">
            <img src={Saving} alt="" className="pb-[25px]" />
            <h1 className="text-[18px] font-bold leading-[18px] pb-[13px]">
              Amazing Savings
            </h1>
            <p className=" text-[14px] font-normal leading-[19.6px]">
              Up to 70% off new Products, you can be sure of the best price.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black pt-10 ">
        <div className="flex xl:flex-row xsm:flex-col justify-between  items-center xl:pl-5 xl:pr-5 max-w-[1440px] mx-auto">
          <div>
            <h1 className="text-[#FFFFFF] pb-2 text-[38px] font-medium leading-[50px] heading">
              Sign Up To Our Newsletter.
            </h1>
            <p className="text-[#FFFFFF] text-[16px] font-light leading-[21px]">
              Be the first to hear about the latest offers.
            </p>
          </div>
          <div className="flex xsm:flex-col xsm:gap-[20px] xl:flex-row justify-center xsm:pt-12 xl:pt-8">
            <input
              type="text"
              placeholder="Your Email"
              className="text-[#FFFFFF] outline-none bg-transparent border-2 border-solid border-[#FFFFFF]  rounded-[4px] input_4 p-[8px] h-[50px]"
            />
            <button className="text-[#FFFFFF]  bg-[#0156FF] rounded-[50px] pt-[8px] pb-[8px] pl-[26px] pr-[26px] xsm:ml-0  text-[14px] font-semibold leading-5 xl:w-[151px] xsm:w-full">
              Subscribe
            </button>
          </div>
        </div>
        <div className=" border-b-[1px] border-solid border-[#FFFFFF80] ">
          <div className="flex flex-wrap xl:gap-[80px] xsm:flex-col sm:flex-row xsm:justify-center xl:justify-start max-w-[1440px] l:max-w-[1400px] gap-[40px]  mx-auto  pl-5 pb-12 pt-5">
            <div className="pt-6 ">
              <h1 className="text-[#FFFFFF80] text-[13px] leading-[18px] font-[700] pb-4 xsm:text-center sm:text-start ">
                Information
              </h1>
              <div className="flex flex-col ">
                {arrayOne.map((item, index) => (
                  <Link
                    to={item == "About Us" ? "/AboutUs" : ""}
                    key={index + "footer_1"}
                    className="text-[#FFFFFF] font-[400] text-[14px] leading-[14px] block pb-2 xsm:text-center sm:text-start "
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div className="pt-6">
              <h1 className="text-[#FFFFFF80] text-[13px] leading-[18px] font-[700] pb-4 xsm:text-center sm:text-start ">
                PC Parts
              </h1>
              <div className="flex flex-col">
                {arrayTwo.map((item, index) => (
                  <Link
                    key={index + "footer_2"}
                    className="text-[#FFFFFF] xsm:text-center sm:text-start  font-[400] text-[14px] leading-[14px] block pb-2 "
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div className="pt-6">
              <h1 className="text-[#FFFFFF80] text-[13px] leading-[18px] font-[700] pb-4 xsm:text-center sm:text-start ">
                Desktop PCs
              </h1>
              <div className="flex flex-col">
                {arrayThree.map((item, index) => (
                  <Link
                    key={index + "footer_3"}
                    className="text-[#FFFFFF] font-[400] text-[14px] leading-[14px] block pb-2 xsm:text-center sm:text-start "
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div className="pt-6">
              <h1 className="text-[#FFFFFF80] text-[13px] leading-[18px] font-[700] pb-4 xsm:text-center sm:text-start ">
                Laptops
              </h1>
              <div className="flex flex-col">
                {arrayFour.map((item, index) => (
                  <Link
                    key={index + "footer_4"}
                    className="text-[#FFFFFF] font-[400] xsm:text-center sm:text-start  text-[14px] leading-[14px] block pb-2 "
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div className="pt-6">
              <h1 className="text-[#FFFFFF80] text-[13px] leading-[18px] font-[700] pb-4 xsm:text-center sm:text-start ">
                Address
              </h1>
              <div className="">
                <div className="flex flex-col text-center mx-auto">
                  {arrayFive.map((item, index) => (
                    <Link
                      key={index + "footer_5"}
                      className={`mx-auto text-[#FFFFFF] font-[400] text-center text-[14px] leading-[14px] flex   pb-2 `}
                    >
                      {item.title}{" "}
                      <p className={`${item.classlist}`}>{item.title_2}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex xsm:flex-col md:flex-row xsm:gap-[15px]  justify-between p-5 items-center max-w-[1440px] mx-auto">
          <div className="flex">
            <img src={Face} alt="" className="mr-2 cursor-pointer" />
            <img src={Insta} alt="" className="cursor-pointer" />
          </div>
          <div className="md:pl-[60px]">
            <img src={Group} alt="" className=" cursor-pointer" />
          </div>
          <div>
            <p className="text-[#FFFFFF] font-medium text-[12px] leading-[15px] cursor-pointer">
              Copyright © 2020 Shop Pty. Ltd.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

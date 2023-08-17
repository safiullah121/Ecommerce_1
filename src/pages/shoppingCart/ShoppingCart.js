import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Edit from "../img/edit.svg";
import Cross from "../img/cross_2.svg";
import Drop from "../img/drop.svg";
import { useState, useEffect, useContext, useRef} from "react";
import Pay from "../img/pay.svg";
import Zip from "../img/10.svg";
import Drop_2 from "../img/dropup.svg";
import { Link } from "react-router-dom";
import Beautiful from "../img/beautiful.svg";
import { useLocation } from "react-router-dom";
import { parseInt } from "lodash";
import Context from '../Context';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = (props) => {
  const product = localStorage.getItem("product");
  const productArr = JSON.parse(product);
  const convertPrice = (val) => {
    return parseInt(val.slice(1));
  };
  const [productArry, setProductArry] = useState([]);
  const [dataChanged, setDataChanged] = useState(false);
  const calculateTotalPrice = () => {
    let total = 0;
    productArry.forEach((item) => {
      total += item.Qty * convertPrice(item.price);
    });
    return total;
  };
  const calculateOrderPrice = () => {
    let total = 0;
    productArry.forEach((item) => {
      total += item.Qty * convertPrice(item.price)+24.64;
    });
    return total;
  };
  const details = [
    {
      img: "image ",
      para: "MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER...",
      qty: "Qty 1",
      price: "$3,799.00",
    },
  ];
  const [country, setcountry] = useState("Australia");
  const [drop, setdrop] = useState(false);
  const [drop_1, setdrop_1] = useState(false);
  const [drop_2, setdrop_2] = useState(false);
  const [radio, setradio] = useState(false);
  const [radios, setradios] = useState(true);
  const labelArray = [
    { text: "Home" },
    { text: "›", extraClass: "text-[#0156FF] pl-2 pr-2" },
    { text: "Login" },
  ];
  const cartHeader = [
    { text: "Item" },
    { text: "Price", class: "pl-[450px] pr-[100px]" },
    { text: "Qty", t_class: "pr-[80px]" },
    { text: " Subtotal" },
  ];
  const Details = [
    {
      img: "image",
      Desc: "MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty",
      price: "$4,349.00",
      type: "number",
      subtotal: "$13,047.00",
      edit: Edit,
      cross: Cross,
    },
  ];
  const buttonClass =
    "w-[200px] h-[37px] rounded-[50px] text-[14px] leading-[21px] font-[600]";
  const detailsArray = [
    { type: "text", label: "State/Province" },
    { type: "text", label: "Zip/Postal Code" },
  ];
  const paragraph = [
    { title: "Subtotal", price:`$${calculateTotalPrice().toFixed(2)}` },
    {
      title: "Shipping ",
      price: "$21.00",
      para: "(Standard Rate - Price may vary depending on the item/destination. Shop Staff will contact you.)",
    },
    { title: "Tax", price: "$1.91" },
    { title: "GST (10%)", price: "$1.91" },
    { title: "Order Total", price: `$${calculateOrderPrice().toFixed(2)}` },
  ];
  const buttons = [
    {
      button: "Proceed to Checkout",
      extraClass: "bg-[#0156FF]  xsm:w-[300px] 2xl:w-[386px] text-[#ffffff]",
    },
    {
      button: "Check out with",
      svg: Pay,
      extraClass_2: " xsm:w-[300px] 2xl:w-[386px] bg-[#FFB800]",
    },
    {
      button: "Check Out with Multiple Addresses",
      extraClass_3:
        " xsm:w-[300px] 2xl:w-[386px]  text-[#A2A6B0] border-2 border-solid border-[#A2A6B0]",
    },
  ];
const productCart = useContext(Context)
  
  const handleDelete = (parentId) => {
    const updatedArray = productArr.findIndex((item) => item.id === parentId);
    if (updatedArray !== -1) {
      productArr.splice(updatedArray, 1);
      localStorage.setItem("product", JSON.stringify(productArr));
      setDataChanged(true);
      productCart.setselectedProducts(productArr)
    }
    setShowMultiplication(false);
  };
  useEffect(() => {
    const product = localStorage.getItem("product");
    const productArr = JSON.parse(product) || [];
    setProductArry(productArr);
    setDataChanged(false);
  }, [dataChanged]);

  const handleClearCart = () => {
    localStorage.setItem("product", JSON.stringify([]));
    setDataChanged(true);
    productCart.setselectedProducts([])
    setShowMultiplication(false)
  };

 
  const handleInputChange = (e, itemId) => {
    let quantity = e.target.value > 50 ? 50 : e.target.value;
    if (e.target.value > 50) {
      toast.info("Only 50 Products Are Allowed");
    }
    const updatedProductArr = productArry.map((productItem) => {
      if (productItem.id === itemId) {
        return { ...productItem, Qty: quantity };
      }
      return productItem;
    });
    setProductArry(updatedProductArr);
    localStorage.setItem("product", JSON.stringify(updatedProductArr));
    setShowMultiplication(false);
 
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/')
    productCart.setproductToast(false)
  }
  const [showMultiplication, setShowMultiplication] = useState(true);
  const [activeInputIndex, setActiveInputIndex] = useState(null);

  const handleImageClick = (index) => {
    console.log(activeInputIndex)
    setActiveInputIndex(activeInputIndex === index ? null : index);
  };

  return (
    <>
      <div className="max-w-[1400px] w-full mx-auto flex pl-[15px] pr-[15px] justify-center flex-wrap gap-[19px]">
        <div className="max-w-[916px] w-full pt-[21px] ">
          <div className="flex items-center pb-[19px]">
            {labelArray.map((item, index) => (
              <p
                key={index + "index"}
                className={`${item.extraClass} text-[12px] leading[18px] font-normal`}
              >
                {item.text}
              </p>
            ))}
          </div>
          <h1 className="text-[32px] font-[600] leading-[48px]">
            Shopping Cart
          </h1>
          <div className="xsm:hidden md_3:block ">
            <div className="border-b-[1px] flex border-solid mx-auto border-[#CACDD8] max-w-[916px] w-full pt-[29px] pb-[13px]">
              {cartHeader.map((item, index) => (
                <p
                  key={index + "i"}
                  className={`${item.class} ${item.t_class} font-[600] text-[14px] leading-[21px]`}
                >
                  {item.text}
                </p>
              ))}
            </div>

            {productArr.length === 0 ? (
              <div className="w-full pt-[20px] pb-[20px] flex justify-center">
                <h1>No Products To Show</h1>
              </div>
            ) : (
              <div>
                {productArr.map((item, index) => (
                  <div
                    id={item.id}
                    className="flex border-b-[1px]  border-solid border-[#CACDD8] pt-[25px] pb-[25px]"
                    key={index + "product"}
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="w-[120px] h-[120px]"
                    />
                    <p className="max-w-[291px] w-full font-[400] text-[14px] leading-[21px] pl-[29px]">
                      {item.title}
                    </p>
                    <p className="font-[600] text-[16px] leading-[24px] pl-[65px]">
                      {item.price}
                    </p>
                    <input
                      type="number"
                      value={item.Qty}
                      onChange={(e) => handleInputChange(e, item.id)} // Pass item.id here
                      min={1}
                      disabled={activeInputIndex!==index}
                      className={`${activeInputIndex==index ? ("border-[1px] border-solid border-gray-500"):("border-none")} w-[70px] h-[50px] bg-[#F5F7FF] rounded-[6px] pl-[10px] ml-[60px] outline-none`}
                    />
   {showMultiplication ? (  
                  <p className="font-[600] text-[16px] leading-[24px] pl-[40px]">
                    ${item.Qty * convertPrice(item.price)}.00
                  </p>
                ) : (
                  <p className="font-[600] text-[16px] leading-[24px] pl-[40px]">
                    $0.00
                  </p>
                )}
                    <div className="ml-[60px] flex flex-col gap-[10px]">
                      <img  onClick={() => handleImageClick(index)} src={Edit} alt="" className="cursor-pointer h-[26px] w-[26px]" />
                      <img
                        src={Cross}
                        onClick={() => {
                          handleDelete(item.id);
                        }}
                        alt=""
                        className="cursor-pointer h-[26px] w-[26px]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-between pt-[25px] pb-[30px]" >
              <div className="flex gap-[7px]">
                <button
                 onClick={handleNavigate}  className={`${buttonClass} text-[#A2A6B0] border-2 border-solid border-[#A2A6B0]`}
                >
               Continue Shopping
                </button>
                <button
                  onClick={handleClearCart}
                  className={`${buttonClass} text-[#ffffff] bg-black`}
                >
                  Clear Shopping Cart
                </button>
              </div>
              <button  onClick={() => {
            setShowMultiplication(true);
            setActiveInputIndex(null);
          }} className={`${buttonClass} text-[#ffffff] bg-black`}>
                Update Shopping Cart
              </button>
            </div>
          </div>
          <div className="pl-[10px] xsm:block  md_3:hidden ">
            {productArr.map((item, index) => (
              <div
                key={index + "details"}
                className="mx-auto flex  items-start max-w-[500px] pt-[25px] gap-[15px]"
              >
                <img src={item.image} alt="" className="h-[62px] w-[62px]" />
                <div>
                  <div>
                    <p className="text-[14px] leading-[21px] font-[400]">
                      {item.title }
                    </p>
                  </div>
                  <div className="flex pt-[5px]">
                    <p className="text-[14px] leading-[20px] font-[400] text-[#A2A6B0] pr-1">
                      Qty {item.Qty}
                    </p>
                    <p className="text-[14px] leading-[19px] font-[600]">
                    ${item.Qty * convertPrice(item.price)}.00
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-[346px] 2xl:max-w-[446px] w-full xsm:mt-[20px] xl:mt-[127px] bg-[#F5F7FF] pt-[17px] pl-[22px] 2xl:pl-[32px] 2xl:pr-[29px] pr-[19px]  pb-[25px] max-[1000px] h-full  mb-[70px]">
          <h1 className="text-[24px] font-[600] leading-[36px]">Summary</h1>
          <div className="flex justify-between pt-[18px]">
            <h1 className="font-[400] text-[18px] leading-[27px]">
              Estimate Shipping and Tax
            </h1>
            <button className="cursor-pointer">
              {drop_2 ? (
                <img src={Drop} alt="" onClick={() => setdrop_2(false)} />
              ) : (
                <img src={Drop_2} alt="" onClick={() => setdrop_2(true)} />
              )}
            </button>
          </div>

          {drop_2 ? (
            <div>
              <div className="flex flex-col ">
                <label className="text-[13px] font-[600] leading-[23px]">
                  Country
                </label>
                <div className="h-[50px] bg-white rounded-[4px] text-[14px] leading-[20px] font-[400] pl-[17px] pr-[17px] flex items-center justify-between border-[1px] border-[#A2A6B0] border-solid">
                  <p>{country}</p>{" "}
                  <img
                    src={Drop}
                    alt=""
                    className=" cursor-pointer"
                    onClick={() => {
                      setdrop((drop) => !drop);
                    }}
                  />{" "}
                </div>
                {drop ? (
                  <div className=" text-[14px] leading-[20px] font-[400] bg-white rounded-lg border-2 border-solid  ">
                    <p
                      className="pb-[5px] cursor-pointer hover:border-2 hover:border-solid hover:border-[#000000] rounded-lg  pl-[17px]"
                      onClick={() => {
                        setcountry("Australia");
                        setdrop(false);
                      }}
                    >
                      Australia
                    </p>{" "}
                    <p
                      className="pb-[5px] cursor-pointer hover:border-2 hover:border-solid hover:border-[#000000] rounded-lg  pl-[17px]"
                      onClick={() => {
                        setcountry("America");
                        setdrop(false);
                      }}
                    >
                      America
                    </p>
                    <p
                      className=" cursor-pointer hover:border-2 hover:border-solid hover:border-[#000000] rounded-lg pl-[17px]"
                      onClick={() => {
                        setcountry("Pakistan");
                        setdrop(false);
                      }}
                    >
                      Pakistan{" "}
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
              {detailsArray.map((item, index) => (
                <div key={index + "label"} className="flex flex-col pt-[5px] ">
                  <label className="font-[600] text-[13px] leading-[27px]">
                    {item.label}
                  </label>
                  <input
                    type={item.type}
                    className="h-[50px] rounded-[4px] border-[1px] border-[#A2A6B0] border-solid pl-[17px]"
                  />
                </div>
              ))}
              <div className="pt-[17px]">
                <h1 className="font-[600] text-[13px] leading-[27px]">
                  Standard Rate
                </h1>
                <div className="flex gap-[8px]">
                  <div
                    className={`h-[21px] max-w-[21px] w-full rounded-full p-[2px] border-[2px] border-solid border-[#0156FF] cursor-pointer flex items-center justify-center `}
                    onClick={() => {
                      setradios((radios) => !radios);
                    }}
                  >
                    {" "}
                    <div
                      className={`${
                        radios ? "bg-[#0156FF]" : "bg-[#ffffff]"
                      } max-w-[19px] w-full h-full rounded-full`}
                    ></div>
                  </div>
                  <p className="font-[400] text-[14px] leading-[20px]">
                    Price may vary depending on the item/destination. Shop Staff
                    will contact you. $21.00
                  </p>
                </div>
              </div>

              <div>
                <h1 className="font-[600] text-[13px] leading-[27px]">
                  Pickup from store
                </h1>
                <div className="flex gap-[8px]">
                  <div
                    className={`h-[21px] max-w-[21px] w-full rounded-full p-[2px] border-[2px] border-solid border-[#0156FF] cursor-pointer  flex items-center justify-center`}
                    onClick={() => {
                      setradio((radio) => !radio);
                    }}
                  >
                    {" "}
                    <div
                      className={`${
                        radio ? "bg-[#0156FF]" : "bg-[#ffffff]"
                      } max-w-[19px] w-full h-full rounded-full`}
                    ></div>
                  </div>
                  <p className="font-[400] text-[14px] leading-[20px]">
                    1234 Street Adress City Address, 1234 $0.00
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <p className="font-[400] text-[14px] leading-[21px] text-[#666666] pt-[12px]">
            Enter your destination to get a shipping <br /> estimate.
          </p>

          <div className="flex justify-between items-center pt-[20px] pb-[29px]">
            <h1 className="font-[400] text-[18px] leading-[27px]">
              Apply Discount Code
            </h1>
            <button className="cursor-pointer">
              {drop_1 ? (
                <img src={Drop} alt="" onClick={() => setdrop_1(false)} />
              ) : (
                <img src={Drop_2} alt="" onClick={() => setdrop_1(true)} />
              )}
            </button>
          </div>
          {drop_1 ? (
            <div className="flex flex-col pt-[5px] pb-[29px] ">
              <label className="font-[600] text-[13px] leading-[27px]">
                Enter discount code
              </label>
              <input
                type="text"
                placeholder="Enter Discount code"
                className={` placeholder:text-[#A2A6B0] placeholder:text-[14px] placeholder:font-light placeholder:leading-[20px] pl-[17px]   h-[50px] border-[1px] border-[#A2A6B0] border-solid outline-none rounded-[4px] `}
              />
              <button className="text-[#0156FF] border-2 border-[#0156FF] text-[14px] leading-[21px] font-[600] rounded-[50px] h-[50px] mt-[19px]">
                Apply Discount
              </button>
            </div>
          ) : (
            ""
          )}
          <div className="pt-[10px] pb-[10px] border-t-[1px] border-solid border-[#CACDD8]">
            {paragraph.map((item, index) => (
              <div key={index + "paragraph"}>
                <div className="flex justify-between text-[13px] font-[600] leading-[27px]">
                  <p>{item.title}</p>
                  <p>{showMultiplication==true ?
                  (item.price)
                  :("$0.00")}</p>
                </div>
                <p className="text-[10px] leading-[18px] font-[400]">
                  {item.para}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center gap-[14px] pb-[24px]">
            {buttons.map((item, index) => (
              <Link to="/CheckOut">
                <button
                  key={index + "button"}
                  className={`flex items-center justify-center text-[14px] leading-[21px] font-[600] h-[50px] rounded-[50px] ${item.extraClass} ${item.extraClass_2} ${item.extraClass_3}`}
                >
                  {item.button}{" "}
                  <img src={item.svg} alt="" className="ml-[15px]" />
                </button>
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <img src={Zip} alt="" className="w-[59px] h-[21px]" />
            <div className="flex items-center ml-[7px] w-[1px] h-[18px]  border-[1px] border-[#00AEB8] border-solid">
              <p className=""></p>
            </div>
            <p className="text-[#272560] pl-[9px] text-[12px] font-semibold leading-[14px] pr-[1px]">
              own{" "}
            </p>
            <p className="text-[#272560] text-[10px] font-[400] leading-[12px]">
              it now, up to 6 months interest free{" "}
              <a href="" className=" underline">
                learn more
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default ShoppingCart;

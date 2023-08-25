import { React, useRef , useState , useContext,useEffect} from "react";
import ProductDiv from "./ProductDiv";
import Msi from "../img/9.png";
import Zip from "../img/10.svg";
import Two from "../img/1.jpg";
import Three from "../img/2.jpg";
import Four from "../img/3.jpg";
import Five from "../img/4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import One from "../img/26.svg";
import Twoo from "../img/27.svg";
import Rules from "../img/rules.svg";
import messi from "../img/msi.svg";
import Razer from "../img/razer.svg";
import Therma from "../img/therma.svg";
import Adata from "../img/adata.svg";
import Pakard from "../img/pakard.svg";
import Gig from "../img/gig.svg";
import Whitelap from "../img/whitelap.png";
import Dragon from "../img/29.png";
import Green from "../img/30.png";
import Linux from "../img/31.png";
import Mouse from "../img/32.png";
import Keyboard from "../img/33.png";
import Gaming from "../img/34.png";
import Morning from "../img/35.png";
import Gaming_2 from "../img/36.png";
import offer from "../img/offer.png"
import { AnimatePresence } from "framer-motion";
import Context from "../Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Home = (props) => {
  const products = useContext(Context)

  const li = [
    { title:"MSI Infinute Series", extraClass:"text-[#020203] border-b-[2px] border-[#0156FF] border-solid"},
    { title:"MSI Triden"},
    { title:"MSI GL Serie s"},
   {  title:"MSI Nightblade"},
  ];
  const swiperImg = [offer, Two, Three, Four, Five];
  const images = [Rules, messi, Razer, Therma, Adata, Pakard, Gig];
  const advertisment = [
    {
      img: Whitelap,
      para_1:
        "   If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
      para_2: "    01.09.2020",
    },
    {
      img: Dragon,
      para_1:
        "  As a gamer, superior sound counts for a lot. You need to hear enemies tiptoeing up behind you for a sneak attack or a slight change in the atmospheric music signaling a new challenge or task...",
      para_2: "    01.09.2020",
    },
    {
      img: Green,
      para_1:
        "  If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
      para_2: "    01.09.2020",
    },
    {
      img: Linux,
      para_1:
        "   If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
      para_2: "    01.09.2020",
    },
    {
      img: Mouse,
      para_1:
        "   If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
      para_2: "    01.09.2020",
    },
    {
      img: Keyboard,
      para_1:
        "   If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
      para_2: "    01.09.2020",
    },
    {
      img: Gaming,
      para_1:
        "   If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
      para_2: "    01.09.2020",
    },
    {
      img: Morning,
      para_1:
        "   If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
      para_2: "    01.09.2020",
    },
    {
      img: Gaming_2,
      para_1:
        "   If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
      para_2: "    01.09.2020",
    },
  ];
const previous = useRef(null)
const next = useRef(null)
const swiperRef = useRef(null);
const [_, setInit] = useState(null);
  return (
    <div className="">
    <AnimatePresence>
      {products.productToast&& (toast.success('Product Is Added To Your Cart'))}
      <div>
        <div className="mx-auto max-h-[328px] xl:pt-[0px] xsm:pt-[15px]">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              prevEl: previous.current,
              nextEl: next.current,
            }}
            onInit={() => setInit(true)}
          >
            {swiperImg.map((item, index) => (
              <SwiperSlide key={index+"swiper_1"} className="h-[328px]">
                <div className="mx-auto max-w-[1400px] w-full max-h-[328px] object-cover object-center"><img src={item} className="mx-auto " /></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className=" relative max-w-[1400px] mx-auto flex justify-between">
          <button
        
            ref={previous}
            className=" absolute  xsm:top-[-70px] sm:top-[-90px] md:top-[-110px] lg:top-[-140px] xl:top-[-188px] left-0 z-10 rounded-l-[30px] bg-[#252931] rotate-180 opacity-50 pl-3 pb-4 pt-4 pr-2"
          >
            <img src={Twoo} alt="" />
          </button>
          <button
            ref={next}
            className="absolute xsm:top-[-70px] sm:top-[-90px] md:top-[-110px] lg:top-[-140px] xl:top-[-188px] right-0 z-10  rounded-r-[30px]  cursor-pointer bg-[#252931] rotate-180 opacity-50 pl-2 pb-4 pt-4 pr-3"
          >
            <img src={One} alt="" />
          </button>
        </div>

        <div>
          <div className="flex justify-between mx-auto items-center max-w-[1420px] xsm:mt-[20px] xl:mt-[10px] pl-3 pr-3">
            <h1 className="text-[#000000] font-semibold  text-[22px] leading-[33px]">
              New Products
            </h1>
            <a
              className="text-[#0156FF] leading-[14px] font-normal text-[13px] underline"
              href=""
            >
              See All New Products
            </a>
          </div>
        </div>
      <div className={` bg-transparent flex xsm:flex-wrap xl:flex-nowrap justify-center gap-[10px] max-w-[1440px] mx-auto pt-[4px] pl-[15px] pr-[15px]  `}>
      <Swiper
      ref={swiperRef}
      className="mx-auto flex justify-center"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={8}
           
          
            breakpoints={{
              340:{
                slidesPerView:1,   
              },
              480:{
                slidesPerView:2 ,
              },
              640:{
                slidesPerView:3,
              },
              860:{
                slidesPerView:4,
              },
              1260:{
                slidesPerView:5,
              },
              1350:{
                slidesPerView:6,
              }

            }}
      
          >
         {products.allProducts.map(
            (item, index) =>
            item.new && <SwiperSlide key={index + 'swiper_2'} className=" mx-auto">  <ProductDiv item={item} index={index} /></SwiperSlide>
          )}
    </Swiper>
        </div>
      
        <div className="xl:flex xsm:hidden max-w-[1400px] mx-auto pt-[20px] pb-[20px] mb-[14px]  flex items-center justify-center bg-[#F5F7FF]">
          <img src={Zip} alt="" />
          <div className="flex items-center ml-[11px] w-[1px] h-[23px]  border-[1px] border-[#00AEB8] border-solid">
            <p className=""></p>
          </div>
          <p className="text-[#272560] pl-[15px] text-[18px] font-semibold leading-[21px]">
            own{" "}
          </p>
          <p className="text-[#272560] text-[14px] font-normal leading-[16px]">
            it now, up to 6 months interest free{" "}
            <a href="" className=" underline">
              learn more
            </a>{" "}
          </p>
        </div>
         <div className="mx-auto max-w-[1440px]  flex justify-between  pt-[14px] pl-[15px] pr-[25px]">
         <Swiper
      className="flex justify-center "
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            breakpoints={{
              340:{
                slidesPerView:1,   
              },
              480:{
                slidesPerView:2 ,
              },
              640:{
                slidesPerView:3,
              },
              860:{
                slidesPerView:4,
              },
              1260:{
                slidesPerView:5,
              },
              1350:{
                slidesPerView:6,
              }

            }}
            onInit={(swiper) => {
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            <SwiperSlide>
<div className={` bg-custome mt-[20px] bg-cover h-[350px]  cursor-pointer max-w-[233px] w-full mx-auto  pt-[120px] pb-[32px]  bg-no-repeat flex flex-col text-center items-center `}>
            <div className="">
              <h1 className="text-[#FFFFFF] text-[22px] font-bold leading-[28px]">
                Custome <br /> Build
              </h1>
            </div>
            <div className="mt-[110px]">
              <a
                href=""
                className="text-[#FFFFFF] text-[13px] font-normal leading-[14px] underline "
              >
                See All Products
              </a>
            </div>
          </div>
</SwiperSlide>
          {products.allProducts.map(
            (item, index) =>
              item.speaker && <SwiperSlide><ProductDiv item={item} index={index} /></SwiperSlide>
          )}
          </Swiper>
        </div>
        <div className="max-w-[1440px] xsm:hidden xl:flex mx-auto pt-[30px] pl-[15px] ">
          <ul className="flex gap-[29px] items-center">
            {li.map((item, index) => (
              <li
                key={index + "lies"}
                className={`font-semibold text-[16px] leading-[28px] text-[#838383] cursor-pointer ${item.extraClass}`}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto max-w-[1440px] flex justify-between gap-[20px] pt-[23px] pl-[15px] pr-[15px]">
        <Swiper
      className="flex justify-center "
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            breakpoints={{
              340:{
                slidesPerView:1,   
              },
              480:{
                slidesPerView:2 ,
              },
              640:{
                slidesPerView:3,
              },
              860:{
                slidesPerView:4,
              },
              1260:{
                slidesPerView:5,
              },
              1350:{
                slidesPerView:6,
              }

            }}
            onInit={(swiper) => {
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          ><SwiperSlide>
         <div className="bg-laptop h-[350px] mt-[20px] mx-auto bg-cover cursor-pointer max-w-[233px] w-full pt-[120px] pb-[32px] bg-no-repeat flex flex-col text-center items-center ">
            <div className="">
              <h1 className="text-[#FFFFFF] text-[22px] font-bold leading-[28px]">
                Custome <br /> Build
              </h1>
            </div>
            <div className="mt-[110px]">
              <a
                href=""
                className="text-[#FFFFFF] text-[13px] font-normal leading-[14px] underline "
              >
                See All Products
              </a>
            </div>
          </div>
</SwiperSlide>
          {products.allProducts.map(
            (item, index) =>{
              if(item.laptop){
                return item.laptop && <SwiperSlide key={index+"swiper_4"}><ProductDiv item={item} index={index} /></SwiperSlide>
              }
            }
          )}
          </Swiper>
        </div>
        <div className="max-w-[1440px] mx-auto xsm:hidden xl:flex mt-[30px] pl-[15px]">
          <ul className="flex gap-[29px] items-center">
            {li.map((item, index) => (
              <li
                key={index + "lies"}
                className={`font-semibold text-[16px] leading-[28px] text-[#838383] cursor-pointer ${item.extraClass}`}
                >
                  {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto max-w-[1440px] flex justify-between gap-[20px] pt-[23px] pl-[15px] pr-[15px]">
        <Swiper
      className="flex justify-center "
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            breakpoints={{
              340:{
                slidesPerView:1,   
              },
              480:{
                slidesPerView:2 ,
              },
              640:{
                slidesPerView:3,
              },
              860:{
                slidesPerView:4,
              },
              1260:{
                slidesPerView:5,
              },
              1350:{
                slidesPerView:6,
              }

            }}
            onInit={(swiper) => {
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          ><SwiperSlide>
          
          <div className="bg-desktop h-[35opx] mt-[20px] mx-auto bg-cover cursor-pointer  max-w-[233px] w-full pt-[120px] pb-[32px]  bg-no-repeat flex flex-col text-center items-center ">
            <div className="">
              <h1 className="text-[#FFFFFF] text-[22px] font-bold leading-[28px]">
                Custome <br /> Build
              </h1>
            </div>
            <div className="mt-[110px]">
              <a
                href=""
                className="text-[#FFFFFF] text-[13px] font-normal leading-[14px] underline "
              >
                See All Products
              </a>
            </div>
          </div></SwiperSlide>

          {products.allProducts.map(
            (item, index) =>
              item.color && <SwiperSlide key={index+"swiper_5"}><ProductDiv item={item} index={index} /></SwiperSlide>
          )}</Swiper>
        </div>
        <div className="mx-auto max-w-[1440px] flex justify-between gap-[20px] pt-[31px] pl-[15px] pr-[15px]">
        <Swiper
      className="flex justify-between "
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            breakpoints={{
              340:{
                slidesPerView:1,   
              },
              480:{
                slidesPerView:2 ,
              },
              640:{
                slidesPerView:3,
              },
              860:{
                slidesPerView:4,
              },
              1260:{
                slidesPerView:5,
              },
              1350:{
                slidesPerView:6,
              }

            }}
            onInit={(swiper) => {
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          ><SwiperSlide>
          <div className="bg-monitor h-[350px] mt-[20px] mx-auto bg-cover cursor-pointer  max-w-[233px] w-full pt-[120px] pb-[32px]  bg-no-repeat flex flex-col text-center items-center ">
            <div className="">
              <h1 className="text-[#FFFFFF] text-[22px] font-bold leading-[28px]">
                Custome <br /> Build
              </h1>
            </div>
            <div className="mt-[100px]">
              <a
                href=""
                className="text-[#FFFFFF] text-[13px] font-normal leading-[14px] underline "
              >
                See All Products
              </a>
            </div>
          </div>
</SwiperSlide>
          {products.allProducts.map(
            (item, index) =>
              item.monitor &&<SwiperSlide key={index+'swiper_6'}> <ProductDiv item={item} index={index} /></SwiperSlide>
          )}
          </Swiper>
        </div>
        <div className="flex xsm:flex-wrap xl:flex-nowrap max-w-[1400px] mx-auto justify-between pt-[31px] pb-[40px]">
          {images.map((item, index) => (
            <div key={index + "images"} className="">
              <img src={item} alt="" />
            </div>
          ))}
        </div>
        <div className="max-w-[1400px] mx-auto pl-[15px]">
          <h1 className="font-semibold text-[22px] leading-[33px] xsm:text-center md:text-start">
            Follow us on Instagram for News, Offers & More
          </h1>
          <div className="flex flex-wrap gap-[9px] mx-auto  pb-[57px]">
            {advertisment.map((item, index) => (
              <div
                key={index + "about"}
                className="max-w-[225px] xsm:mx-auto xl:mx-0 flex flex-col items-center justify-center pt-[21px]"
              >
                <img src={item.img} alt="" />
                <p className="w-[185px] text-center font-normal text-[12px] leading-[18px] pt-[10px]">
                  {item.para_1}
                </p>
                <p className="font-normal text-[10px] leading-[15px] text-center text-[#A2A6B0] pt-[5px]">
                  {item.para_2}
                </p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
      {props.Review}
       
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={true}
        theme="light"
      />
    </AnimatePresence>
   </div>
  );
};

export default Home;

import React from "react";
import Acessories from "../img/acessories.png";
import keyBoard from "../img/keyBoard.png";
import Logo from "../img/logo_2.svg";
import cpu from "../img/cpu.webp";
import like from "../img/like.svg";
import cpu_2 from "../img/cpu_2.png";
import star from "../img/star.svg";
import truck from "../img/truck.svg";
import cpu_3 from "../img/cpu_3.png";

const AboutUs = (props) => {
  const label = [
    { label: "Home " },
    { label: " › ", extraclass: "text-[#0156FF]" },
    { label: " About Us" },
  ];
  return (
    <>
      {/* {props.Header}
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="flex gap-[2px] pt-[21px] pb-[19px]">
          {label.map((item, index) => (
            <p
              key={index + "label"}
              className={`${item.extraclass} text-[12px] font-[400] leading-[18px]`}
            >
              {item.label}
            </p>
          ))}
        </div>
        <h1 className="text-[32px] font-[600] leading-[48px] pb-[21px]">
          About Us
        </h1>
      </div>
      <div className="max-w-[1920px] mx-auto w-full bg-[#000000] ">
        <div className="max-w-[1160px] mx-auto flex gap-[20px]  flex-wrap text-[#ffffff] pt-[149px] pb-[149px]  items-center justify-between">
          <div className="mx-auto max-w-[500px] w-full text-[18px] leading-[26px] font-[300]">
            <h1 className="text-[44px] font-[500] leading-[58px] pb-[32px]">
              A Family That Keeps On Growing
            </h1>{" "}
            <p className="pb-[32px]">
              We always aim to please the home market, supplying great <br />{" "}
              computers and hardware at great prices to non-corporate <br />{" "}
              customers, through our large Melbourne CBD showroom and <br /> our
              online store.
            </p>{" "}
            <p>
              Shop management approach fosters a strong customer <br /> service
              focus in our staff. We prefer to cultivate long-term <br /> client
              relationships rather than achieve quick sales, <br /> demonstrated
              in the measure of our long-term success.
            </p>
          </div>
          <div className="mx-auto xsm:mt-[70px] md_3:mt-[0px]">
            <img src={Acessories} alt="" />
          </div>
        </div>
      </div>
      <div className="max-w-[1920px] w-full mx-auto bg-[#ffffff] ">
        <div className="max-w-[1400px]  mx-auto flex gap-[20px] flex-wrap-reverse items-center justify-between text-[#000000]   ">
          <div className="xsm:t-[20px] md_3:pt-[62px] md_3:pb-[62px] xsm:pb-[0px] mx-auto">
            <img src={keyBoard} alt="" />
          </div>
          <div className="max-w-[500px]  w-full mx-auto xsm:pt-[40px] md_3:pt-[0px]">
            <div className=" flex pb-[18px] gap-[18px]">
              <img src={Logo} alt="" />
              <h1 className="font-[500] text-[44px] leading-[58px]">
                Shop.com
              </h1>
            </div>
            <p className="text-[18px] leading-[26px] font-[300]">
              Shop.com is a proudly Australian owned, Melbourne based <br />{" "}
              supplier of I.T. goods and services, operating since 1991. Our{" "}
              <br /> client base encompasses individuals, small business,
              corporate <br /> and government organisations. We provide complete
              business <br /> IT solutions, centred on high quality hardware and
              exceptional <br /> customer service.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1920px] w-full mx-auto bg-[#000000] ">
        <div className="max-w-[1160px] mx-auto flex-wrap flex text-[#ffffff] pt-[149px] pb-[149px]  items-center justify-between">
          <div className="max-w-[500px] mx-auto w-full text-[18px] leading-[26px] font-[300]">
            <div className="flex items-start gap-[20px] pb-[32px]">
              <img src={like} alt="" />
              <h1 className="font-[500] text-[44px] leading-[58px]">
                Now You're In SafeHands
              </h1>
            </div>
            <p className="font-[300] leading-[26px] text-[16px] pb-[20px]">
              Experience a 40% boost in computing from last generation. MSI
              Desktop equips the 10th Gen. Intel® Core™ i7 processor with the
              upmost computing power to bring you an unparalleled gaming
              experience.
            </p>
            <p className="font-[300] leading-[26px] text-[16px]">
              *Performance compared to i7-9700. Specs varies by model.
            </p>
          </div>
          <div>
            <img src={cpu} alt="" className="xsm:mt-[70px] md_3:mt-[0px]" />
          </div>
        </div>
      </div>
      <div className="max-w-[1920px]  w-full mx-auto bg-[#ffffff] ">
        <div className="max-w-[1400px] flex-wrap-reverse  mx-auto flex items-center justify-between text-[#000000]   ">
          <div className="pt-[62px] pb-[62px] mx-auto">
            <img src={cpu_2} alt="" />
          </div>
          <div className="max-w-[500px] xsm:mt-[70px] md_3:mt-[0px] w-full mx-auto">
            <div className="flex pb-[18px] gap-[18px] items-start">
              <img src={star} alt="" />
              <h1 className="font-[500] text-[44px] leading-[58px] ">
                The Highest Quality of Products
              </h1>
            </div>
            <p className="text-[18px] leading-[26px] font-[300]">
              We guarantee the highest quality of the products we sell. <br />{" "}
              Several decades of successful operation and millions of happy{" "}
              <br /> customers let us feel certain about that. Besides, all
              items we <br /> sell pass thorough quality control, so no
              characteristics <br /> mismatch can escape the eye of our
              professionals.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1920px]  w-full mx-auto bg-[#000000] ">
        <div className="max-w-[1160px] flex-wrap mx-auto flex text-[#ffffff] pt-[149px] pb-[149px]  items-center 2xl:justify-between xl:gap-[100px] ">
          <div className="max-w-[500px]  mx-auto w-full text-[18px] leading-[26px] font-[300]">
            <div className="flex items-start gap-[20px] pb-[32px]">
              <img src={truck} alt="" className="" />
              <h1 className="font-[500] text-[44px] leading-[58px]">
                We Deliver to Any Regions
              </h1>
            </div>
            <p className="font-[300] leading-[26px] text-[16px] ">
              We deliver our goods all across Australia. No matter where you{" "}
              <br /> live, your order will be shipped in time and delivered
              right to <br /> your door or to any other location you have
              stated. The <br /> packages are handled with utmost care, so the
              ordered <br /> products will be handed to you safe and sound, just
              like you <br /> expect them to be.
            </p>
          </div>
          <div className="mx-auto xsm:mt-[70px] md_3:mt-[0px]">
            <img src={cpu_3} alt="" className="" />
          </div>
        </div>
      </div>
      {props.Review}
      {props.Footer} */}
    </>
  );
};

export default AboutUs;

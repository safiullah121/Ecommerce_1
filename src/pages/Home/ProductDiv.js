import React, { useState } from 'react';
import Rating from './Rating';
import White from '../img/12.svg';
import { Link, ScrollRestoration } from 'react-router-dom';
import Like from '../img/heart.svg';
import Graph from '../img/graph.svg';
import Blue from '../img/blueCart.svg';
import { useNavigate } from 'react-router-dom';

const ProductDiv = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Product', { state: { image: props.item.image } });
  };

  const Hover = [{ img: Like }, { img: Graph }];
  const [hover, setHover] = useState(false);
  const [hover_1, setHover_1] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
    setHover_1(true);
  };

  const handleClick2 = (e) =>{
    e.stopPropagation();

  }
  const handleMouseEnter_2 = () => {
    setHover_1(true);
    setHover(true)
  };

  const handleMouseLeave = () => {
    setHover(false);
    setHover_1(false);
  };

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={` cursor-pointer group ${
          hover_1 === true && 'productDiv'
        } rounded-[20px] w-[220px] relative pt-[5px] pr-[10px] pl-[17px] mx-auto h-[390px]`}
      >
        <div key={props.index}
        onClick={handleClick}

        >
          <div
            className={`flex ${
              props.item.image === White ? 'text-[#C94D3F]' : 'text-[#78A962]'
            } pl-2`}
          >
            <img src={props.item.label} alt='' />
            <p className='pl-1 text-[10px] leading-[21px] font-normal '>
              {props.item.label_2}
            </p>
          </div>
          <div className='flex gap-[15px] pb-2 items-start'>
            <div className='object-center object-cover max-w-[150px] w-full h-auto'>
              <img src={props.item.image} alt='' className='pl-[20px] pt-2' />
            </div>
          </div>
          <Rating />
          <div className='pb-3 flex items-center '>
            <p className='text-[13px] font-normal leading-[19px]'>
              {props.item.title}
            </p>
          </div>
          <div className='pb-3'>
            <h1 className='text-[14px] leading-[19px] font-normal text-[#666666]'>
              {props.item.price}
            </h1>
            <div className='discount'></div>
          </div>
          <div>
            <h1 className='text-[18px] font-semibold leading-[25px]'>
              {props.item.discountedPrice}
            </h1>
          </div>
 
            {hover ? (
              <div className=' pt-[13px] flex justify-center' onClick={handleClick2} onMouseEnter={handleMouseEnter_2}>
                <button className='flex items-center gap-[10px] pl-[20px] pr-[20px] pt-[8px] pb-[8px] h-[37px] border-[2px] border-[#0156FF] border-solid rounded-[50px]'>
                  <img src={Blue} alt='' />
                  <p className='text-[#0156FF] text-[14px] font-[600] leading-[21px]'>
                    Add To Cart
                  </p>
                </button>
              </div>
            ) : (
              ''
            )}
     
        </div>
        <div
           className='absolute top-[25px] z-20 right-[15px] flex flex-col '
         >
         {hover ? ( <div className=' flex flex-col'> <div 
           onClick={handleClick2}
           onMouseEnter={handleMouseEnter_2} className=' z-10 top-[-500px] right-[10px] w-[30px] h-[30px] mb-[3px] rounded-full border-2 border-solid border-[#A2A6B0] flex flex-col items-center justify-center'>
             <img src={Like} alt='' />
           </div>
           <div  
           onClick={handleClick2}
           onMouseEnter={handleMouseEnter_2} className=' z-10 top-[-467px] right-[10px] w-[30px] h-[30px] mb-[3px] rounded-full border-2 border-solid border-[#A2A6B0] flex flex-col items-center justify-center'>
             <img src={Graph} alt='' />
           </div> </div>) : (
          ''
        )}
         </div>  
      </div>
      
      {/* {hover ? (
          <div
           
            className='relative top-[25px] right-[25px] flex flex-col '
          >
            <div  onMouseEnter={handleMouseEnter_2} className='absolute z-10 top-[-500px] right-[10px] w-[30px] h-[30px] mb-[3px] rounded-full border-2 border-solid border-[#A2A6B0] flex flex-col items-center justify-center'>
              <img src={Like} alt='' />
            </div>
            <div  onMouseEnter={handleMouseEnter_2} className='absolute z-10 top-[-467px] right-[10px] w-[30px] h-[30px] mb-[3px] rounded-full border-2 border-solid border-[#A2A6B0] flex flex-col items-center justify-center'>
              <img src={Graph} alt='' />
            </div>
          </div>
        ) : (
          ''
        )} */}
    </>
  );
};

export default ProductDiv;

import {React, useState}  from 'react'
import Rating from './Rating'
import White from '../img/12.svg'
import { Link, ScrollRestoration } from 'react-router-dom'
import Like from '../img/heart.svg'
import Graph from '../img/graph.svg'
import Blue from '../img/blueCart.svg'
import {useNavigate } from 'react-router-dom';
import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";


const ProductDiv = (props) => {
 

  const   navigate = useNavigate();
  const handleClick = () => {
    navigate('/Product', { state: { image: props.item.image } });
  };
  const Hover =[
    {img:Like},
    {img:Graph}
  ];
  const [hover, sethover] = useState(false);
  return (
          <div onMouseEnter={()=>{sethover(true)}}  onClick={handleClick} onMouseLeave={()=>{sethover(false)}}  className='cursor-pointer productDiv rounded-[20px] w-[220px] pt-[5px] pr-[10px] pl-[17px] mx-auto h-[390px] '>
           <div key={props.index} >
              <div className={`flex text-[${props.item.image==White?('#C94D3F'):('#78A962')}] pl-2 `}><img src={props.item.label} alt='' /> <p className='pl-1 text-[10px] leading-[21px] font-normal '>{props.item.label_2}</p></div>
              <div className='flex gap-[15px]  pb-2 items-start'>
                <div className='object-center object-cover max-w-[150px] w-full h-auto '><img src={props.item.image} alt='' className='pl-[20px] pt-2 '/></div>
           <div className='h-[100px] w-[30px] mt-[-10px] '>   {hover?(  <div className='flex flex-col '>
             { Hover.map((item , index)=>(
              <div key={index+'hover'} className='w-[30px]  h-[30px] mb-[3px] rounded-full border-2 border-solid border-[#A2A6B0] flex items-center justify-center'><img src={item.img} alt="" /> </div>
             ))}
            </div>):('')}</div>
              </div>
              <Rating/>
              <div className='pb-3 flex items-center '><p className="text-[13px] font-normal leading-[19px]">{props.item.title}</p></div>
              <div className='pb-3'><h1 className='text-[14px] leading-[19px] font-normal text-[#666666]'>{props.item.price}</h1> <div  className='discount '></div></div>
              <div><h1 className='text-[18px] font-semibold leading-[25px]'>{props.item.discountedPrice}</h1></div>
           <Link to='/FAQ'> {hover?  (<div className='pt-[13px] flex justify-center'><button className='flex items-center gap-[10px] pl-[20px] pr-[20px] pt-[8px] pb-[8px] h-[37px] border-[2px] border-[#0156FF] border-solid rounded-[50px]'><img src={Blue}/><p className='text-[#0156FF] text-[14px] font-[600] leading-[21px]'>Add To Cart</p></button></div>):('')}</Link>
            </div>
            </div>
 
  )
}

export default ProductDiv

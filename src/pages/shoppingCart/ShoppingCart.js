import React from 'react'
import Center from '../img/centerpiece.svg'
import Beauty from '../img/beautiful.svg'
import Edit from '../img/edit.svg'
import Cross from '../img/cross_2.svg'
import Drop from '../img/drop.svg'
import { useState } from 'react'
import Pay from '../img/pay.svg'
import Zip from '../img/10.svg'
import Drop_2 from '../img/dropup.svg'
import { Link } from 'react-router-dom'
import Beautiful from '../img/beautiful.svg'

const ShoppingCart = (props) => {
  const details = [
    {img:Center ,para:'MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER...' ,qty:'Qty 1' ,price:'$3,799.00'},
    {img:Beautiful ,para:'MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER...' ,qty:'Qty 1' ,price:'$3,799.00'},
  ]
    const [country, setcountry] = useState('Australia');
    const [drop, setdrop] = useState(false);
    const [drop_1, setdrop_1] = useState(false);
    const [drop_2, setdrop_2] = useState(false);
    const [radio, setradio] = useState(false);
    const [radios, setradios] = useState(true);
    const labelArray =[
       {text:'Home'},
        {text:'›' , extraClass:'text-[#0156FF] pl-2 pr-2'},
       {text:'Login'},
    ]
    const cartHeader =[
        {text:'Item'},
        {text:'Price', class:'pl-[450px] pr-[100px]'},
        {text:'Qty',t_class:'pr-[80px]'},
       {text:' Subtotal'},
    ]
    const Details =[
        {img:Center , Desc:'MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty',price:'$4,349.00', type:'number',subtotal:'$13,047.00', edit:Edit , cross:Cross },
        {img:Beauty , Desc:'MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty',price:'$4,349.00', type:'number',subtotal:'$13,047.00', edit:Edit , cross:Cross }
    ]
      const buttonClass = 'w-[200px] h-[37px] rounded-[50px] text-[14px] leading-[21px] font-[600]'
      const detailsArray=[
        { type:'text', label:"State/Province"},
        { type:'text', label:"Zip/Postal Code"}
      ]
    const paragraph =[
        {title:'Subtotal', price:'$13,047.00'},
        {title:'Shipping ', price:'$21.00', para:'(Standard Rate - Price may vary depending on the item/destination. Shop Staff will contact you.)'},
        {title:'Tax', price:'$1.91'},
        {title:'GST (10%)', price:'$1.91'},
        {title:'Order Total', price:'$13,047.00'}
    ]
    const buttons= [
    {button:'Proceed to Checkout',extraClass:'bg-[#0156FF]  xsm:w-[300px] 2xl:w-[386px] text-[#ffffff]'},
    {button:'Check out with', svg:Pay, extraClass_2:' xsm:w-[300px] 2xl:w-[386px] bg-[#FFB800]'},
    {button:'Check Out with Multiple Addresses', extraClass_3:' xsm:w-[300px] 2xl:w-[386px]  text-[#A2A6B0] border-2 border-solid border-[#A2A6B0]'}
    ]
  return (
    <>
    {props.Header}
      <div className='max-w-[1400px] w-full mx-auto flex justify-between flex-wrap gap-[19px]'>
      <div className='max-w-[916px] w-full pt-[21px] '>
      <div className='flex items-center pb-[19px]'> 
         {labelArray.map((item , index)=>(
        <p key={index+'index'} className={`${item.extraClass} text-[12px] leading[18px] font-normal`}>{item.text}</p>
         ))}
         </div>
         <h1 className='text-[32px] font-[600] leading-[48px]'>Shopping Cart</h1>
                <div className='xsm:hidden md_3:block'><div className='border-b-[1px] flex border-solid border-[#CACDD8] max-w-[916px] w-full pt-[29px] pb-[13px]'>
           {cartHeader.map((item, index) =>(
                <p key={index+'i'} className={`${item.class} ${item.t_class} font-[600] text-[14px] leading-[21px]`}>{item.text}</p>
           ))}
           </div>
         {Details.map((item , index)=>(
         <div className='flex border-b-[1px]  border-solid border-[#CACDD8] pt-[25px] pb-[25px]'key={index+'details'}>
            <img src={item.img} alt="" />
            <p className='max-w-[291px] w-full font-[400] text-[14px] leading-[21px] pl-[29px]'>{item.Desc}</p>
            <p  className='font-[600] text-[16px] leading-[24px] pl-[65px]'>{item.price}</p>
            <input type={item.type}  className='w-[70px] h-[50px] bg-[#F5F7FF] rounded-[6px] pl-[10px] ml-[60px] outline-none'/>
            <p className='font-[600] text-[16px] leading-[24px] pl-[40px]'>{item.subtotal}</p>
            <div className='ml-[60px] flex flex-col gap-[10px]'>
                <img src={item.edit} alt="" className='h-[26px] w-[26px]'/>
                <img src={item.cross} alt="" className='h-[26px] w-[26px]'/>
            </div>
         </div>
         ))}
         <div className='flex justify-between pt-[25px]'>
            <div className='flex gap-[7px]'>
            <button className={`${buttonClass} text-[#A2A6B0] border-2 border-solid border-[#A2A6B0]`}>Update Shopping Cart</button>
            <button className={`${buttonClass} text-[#ffffff] bg-black`}>Clear Shopping Cart</button>
            </div>
            <button className={`${buttonClass} text-[#ffffff] bg-black`}>Update Shopping Cart</button>
         </div></div>
         <div className='pl-[10px] xsm:block  md_3:hidden '>
         {details.map((item , index)=>(
          <div key={index+'details'} className='mx-auto flex  items-start max-w-[500px] pt-[25px] gap-[15px]'>
            <img src={item.img} alt="" className='h-[62px] w-[62px]'/>
            <div>
              <div><p className='text-[14px] leading-[21px] font-[400]'>{item.para}</p></div>
              <div className='flex pt-[5px]'><p className='text-[14px] leading-[20px] font-[400] text-[#A2A6B0] pr-1'>{item.qty}</p><p className='text-[14px] leading-[19px] font-[600]'>{item.price}</p></div>
            </div>
          </div>
        ))}
         </div>
      </div>
      <div className='mx-auto max-w-[346px] 2xl:max-w-[446px] w-full xsm:mt-[20px] xl:mt-[127px] max-h-[1335px] bg-[#F5F7FF] pt-[17px] pl-[22px] 2xl:pl-[32px] 2xl:pr-[29px] pr-[19px]  pb-[25px] mb-[70px]'>
        <h1 className='text-[24px] font-[600] leading-[36px]'>Summary</h1>
        <div className='flex justify-between pt-[18px]'>
            <h1 className='font-[400] text-[18px] leading-[27px]'>Estimate Shipping and Tax</h1>
            <button className='cursor-pointer'>{drop_2?(<img src={Drop} alt="" onClick={()=>setdrop_2(false)}/>):(<img src={Drop_2} alt="" onClick={()=>setdrop_2(true)}/>)}</button>
        </div>
      
        {drop_2 ?
        (<div>
            <div className='flex flex-col '>
                <label className='text-[13px] font-[600] leading-[23px]'>Country</label>
                <div className='h-[50px] bg-white rounded-[4px] text-[14px] leading-[20px] font-[400] pl-[17px] pr-[17px] flex items-center justify-between border-[1px] border-[#A2A6B0] border-solid'><p>{country}</p>  <img src={Drop} alt="" className=' cursor-pointer' onClick={()=>{setdrop(drop => !drop)}} /> </div>
               {drop ? (<div className=' text-[14px] leading-[20px] font-[400] bg-white rounded-lg border-2 border-solid  '><p className='pb-[5px] cursor-pointer hover:border-2 hover:border-solid hover:border-[#000000] rounded-lg  pl-[17px]' onClick={()=>{setcountry('Australia')
                setdrop(false)}}>Australia</p> <p className='pb-[5px] cursor-pointer hover:border-2 hover:border-solid hover:border-[#000000] rounded-lg  pl-[17px]' onClick={()=>{setcountry('America')
                 setdrop(false)}}>America</p><p className=' cursor-pointer hover:border-2 hover:border-solid hover:border-[#000000] rounded-lg pl-[17px]' onClick={()=>{setcountry('Pakistan')
                  setdrop(false) }}>Pakistan </p></div> ):('')}
            </div>
            {detailsArray.map((item,index)=>(
             <div key={index+'label'} className='flex flex-col pt-[5px] '>
                <label className='font-[600] text-[13px] leading-[27px]'>{item.label}</label>
                <input type={item.type} className='h-[50px] rounded-[4px] border-[1px] border-[#A2A6B0] border-solid pl-[17px]'/>
             </div>
            ))}
            <div className='pt-[17px]'>
                <h1 className='font-[600] text-[13px] leading-[27px]'>Standard Rate</h1>
                <div className='flex gap-[8px]'>
                   <div className={`h-[21px] max-w-[21px] w-full rounded-full p-[2px] border-[2px] border-solid border-[#0156FF] cursor-pointer flex items-center justify-center `} onClick={()=>{setradios(radios =>!radios)}}> <div className={`bg-[${radios?('#0156FF'):('#ffffff')}] max-w-[19px] w-full h-full rounded-full`}></div></div>
                    <p className='font-[400] text-[14px] leading-[20px]'>Price may vary depending on the item/destination. Shop Staff will contact you. $21.00</p>
                </div>
            </div>
            
            <div >
                <h1 className='font-[600] text-[13px] leading-[27px]'>Pickup from store</h1>
                <div className='flex gap-[8px]'>
                   <div className={`h-[21px] max-w-[21px] w-full rounded-full p-[2px] border-[2px] border-solid border-[#0156FF] cursor-pointer  flex items-center justify-center`}  onClick={()=>{setradio(radio =>!radio)}}> <div className={`bg-[${radio?('#0156FF'):('#ffffff')}] max-w-[19px] w-full h-full rounded-full`}></div></div>
                    <p className='font-[400] text-[14px] leading-[20px]'>1234 Street Adress City Address, 1234 $0.00</p>
                </div>
            
            </div>
            </div>):('')}
            <p className='font-[400] text-[14px] leading-[21px] text-[#666666] pt-[12px]'>Enter your destination to get a shipping <br/> estimate.</p>
        
        <div className='flex justify-between items-center pt-[20px] pb-[29px]'>
            <h1 className='font-[400] text-[18px] leading-[27px]'>Apply Discount Code</h1>
            <button className='cursor-pointer'>{drop_1?(<img src={Drop} alt="" onClick={()=>setdrop_1(false)}/>):(<img src={Drop_2} alt="" onClick={()=>setdrop_1(true)}/>)}</button></div>
        {drop_1 ?(
        
        <div className='flex flex-col pt-[5px] pb-[29px] '>
        <label className='font-[600] text-[13px] leading-[27px]'>Enter discount code</label>
        <input type="text" placeholder="Enter Discount code" className={` placeholder:text-[#A2A6B0] placeholder:text-[14px] placeholder:font-light placeholder:leading-[20px] pl-[17px]   h-[50px] border-[1px] border-[#A2A6B0] border-solid outline-none rounded-[4px] `}  />
        <button className='text-[#0156FF] border-2 border-[#0156FF] text-[14px] leading-[21px] font-[600] rounded-[50px] h-[50px] mt-[19px]'>Apply Discount</button>
        </div>):('')}
        <div className='pt-[10px] pb-[10px] border-t-[1px] border-solid border-[#CACDD8]'>
            {paragraph.map((item,index)=>(
                <div key={index+'paragraph'}>
              <div  className='flex justify-between text-[13px] font-[600] leading-[27px]'>
                 <p>{item.title}</p>
                 <p>{item.price}</p>
              </div>
              <p className='text-[10px] leading-[18px] font-[400]'>{item.para}</p></div>
            ))}
        </div>
        <div className='flex flex-col justify-center items-center gap-[14px] pb-[24px]'>
            {buttons.map((item , index)=>(
             <Link to='/CheckOut'><button key={index+'button'} className={`flex items-center justify-center text-[14px] leading-[21px] font-[600] h-[50px] rounded-[50px] ${item.extraClass} ${item.extraClass_2} ${item.extraClass_3}`}>{item.button} <img src={item.svg} alt="" className='ml-[15px]'/></button></Link>
            ))}
        </div>
        <div className='flex items-center'>
        <img src={Zip} alt="" className='w-[59px] h-[21px]'/>
          <div className='flex items-center ml-[7px] w-[1px] h-[18px]  border-[1px] border-[#00AEB8] border-solid'><p className=''></p></div>
          <p className='text-[#272560] pl-[9px] text-[12px] font-semibold leading-[14px] pr-[1px]'>own </p><p className='text-[#272560] text-[10px] font-[400] leading-[12px]' >it now, up to 6 months interest free <a href="" className=' underline'>learn more</a> </p>
        </div>
      </div>
      </div>
      {props.Footer}
    </>
  )
}

export default ShoppingCart

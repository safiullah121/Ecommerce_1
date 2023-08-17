import React, { useContext } from 'react'
import Drop from '../img/drop.svg'
import Drop_2 from '../img/dropup.svg'
import Tick from '../img/tick.svg'
import Center from '../img/centerpiece.svg'
import Beautiful from '../img/beautiful.svg'
import { useState , useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import Context from '../Context'

const CheckOut = (props) => {
  const product = useContext(Context)
  const [country, setcountry] = useState('United States');
  const [Province, setProvince] = useState('Please, select a region, state or province');
  const [drop, setdrop] = useState(false);
  const [drop_2, setdrop_2] = useState(false);
  const [radio, setradio] = useState(false);
  const [radios, setradios] = useState(true);
  const [blue, setblue] = useState('farad');
  const [products, setproducts] = useState(false);

 
  const label = [
    {label:'Home'},
    {label:' › ', extraclass:'text-[#0156FF] pl-1 pr-1 font-[300]'},
    {label:'Shopping Cart'},
    {label:' › ',extraclass:'text-[#0156FF] pl-1 pr-1 font-[300]'},
    {label:' Checkout Process'}
  ];
  const inputs =[
    {type:'text', label:'Email Address', para:'You can create an account after checkout.' , extraclass:'border-b-[1px] border-solid border-[#666666] pt-[25px] mb-[21px]'},
    {type:'text', label:'First Name'},
    {type:'text', label:'Last Name'},
    {type:'text', label:'Company'},
    {type:'text', label:'Street Address ',type_2:'text'},
    {type:'text', label:'City '}
  ];
  const details = [
    {img:Center ,para:'MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER...' ,qty:'Qty 1' ,price:'$3,799.00'},
    {img:Beautiful ,para:'MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER...' ,qty:'Qty 1' ,price:'$3,799.00'},
  ]
  const convertPrice = (val) => {
    return parseInt(val.slice(1));
  };
  return (
    <>
    <div className='max-w-[1400px] w-full xsm:flex-col md:flex-row flex gap-[10px] justify-between mx-auto pl-[15px] pr-[15px]'>
     <div className='max-w-[924px] w-full pb-[87px] pt-[21px]'>
     <div className='flex'>
      {label.map((item , index)=>(
        <p key={index+'label'} className={`${item.extraclass} text-[12px] leading-[18px] font-[400] `}>{item.label}</p>
      ))}
     </div>
     <div className='flex items-center pt-[19px] pb-[43px] gap-[20px]'>
      <h1 className='text-[32px] font-[600] leading-[48px] '>Checkout</h1>
      <button className='text-[14px] leading-[21px] font-[600] text-[#0156FF] border-2 border-[#0156FF] border-solid h-[50px] rounded-[50px] max-w-[208px] w-full'>Sign In</button>
     </div>
     <div className='w-full pb-[14px] border-b-[1px] border-solid border-[#CACDD8]'>
      <p className='text-[18px] font-[600] leading-[27px]'>Shipping Address</p>
     </div>
     {inputs.map((item ,index)=>(
      <div key={index+'inputs'} className={`pt-[12px]  ${item.extraclass} max-w-[565px] w-full`}>
<label  className={`flex font-semibold text-[13px] leading-[27px] `}>{item.label} <p className='pl-1 text-[#C94D3F]' >*</p></label>
 <input type={item.type}  className={`  pl-[17px] max-w-[565px] w-full  h-[50px] border-[1px] border-[#A2A6B0] border-solid outline-none rounded-[4px] `}  />
 {item.label=='Email Address'?(<p className='text-[13px] font-[400] leading-[27px] text-[#666666] pt-[11px] pb-[20px]'>{item.para}</p>):('')}
 {item.label=='Street Address '?(<input type={item.type_2}  className={`mt-[10px]  pl-[17px] max-w-[565px] w-full  h-[50px] border-[1px] border-[#A2A6B0] border-solid outline-none rounded-[4px] `}  />):('')}
      </div>
     ))}
            <div className='flex flex-col max-w-[565px] w-full pt-[12px]'>
            <label  className={`flex font-semibold text-[13px] leading-[27px] `}>State/Province <p className='pl-1 text-[#C94D3F]' >*</p></label>
                <div className='h-[50px] bg-white rounded-[4px] text-[14px] leading-[20px] font-[400] pl-[17px] pr-[17px] flex items-center justify-between border-[1px] border-[#A2A6B0] border-solid'><p>{Province}</p>  <img src={Drop} alt="" className=' cursor-pointer' onClick={()=>{setdrop(drop => !drop)}} /> </div>
               {drop ? (<div className=' text-[14px] leading-[20px] font-[400] bg-white rounded-lg border-2 border-solid  '><p className='pb-[5px] cursor-pointer hover:border-2 hover:border-solid hover:border-[#000000] rounded-lg  pl-[17px]' onClick={()=>{setProvince('Please, select a region, state or province')
                setdrop(false)}}>Please, select a region, state or province </p><p className='pb-[5px] cursor-pointer hover:border-2 hover:border-solid hover:border-[#000000] rounded-lg  pl-[17px]' onClick={()=>{setProvince('America')
                 setdrop(false)}}>America</p><p className=' cursor-pointer hover:border-2 hover:border-solid hover:border-[#000000] rounded-lg pl-[17px]' onClick={()=>{setProvince('Pakistan')
                  setdrop(false) }}>Pakistan </p></div> ):('')}</div>
            <label  className={`flex font-semibold text-[13px] leading-[27px] pt-[12px]`}>Zip/Postal Code<p className='pl-1 text-[#C94D3F]' >*</p></label>
            <input type='text'  className={`  pl-[17px] max-w-[565px] w-full  h-[50px] border-[1px] border-[#A2A6B0] border-solid outline-none rounded-[4px] `}  />  
            
            
            <div className='flex flex-col max-w-[565px] w-full pt-[12px]'>
            <label  className={`flex font-semibold text-[13px] leading-[27px] `}>Country<p className='pl-1 text-[#C94D3F]' >*</p></label>
                <div className='h-[50px] bg-white rounded-[4px] text-[14px] leading-[20px] font-[400] pl-[17px] pr-[17px] flex items-center justify-between border-[1px] border-[#A2A6B0] border-solid'><p>{country}</p>  <img src={Drop} alt="" className=' cursor-pointer' onClick={()=>{setdrop_2(drop => !drop)}} /> </div>
               {drop_2 ? (<div className=' text-[14px] leading-[20px] font-[400] bg-white rounded-lg border-2 border-solid  '><p className='pb-[5px] cursor-pointer hover:border-2 hover:border-solid hover:border-[#000000] rounded-lg  pl-[17px]' onClick={()=>{setcountry('United States')
                setdrop_2(false)}}>United States</p> <p className='pb-[5px] cursor-pointer hover:border-2 hover:border-solid hover:border-[#000000] rounded-lg  pl-[17px]' onClick={()=>{setcountry('America')
                 setdrop_2(false)}}>America</p><p className=' cursor-pointer hover:border-2 hover:border-solid hover:border-[#000000] rounded-lg pl-[17px]' onClick={()=>{setcountry('Pakistan')
                  setdrop_2(false) }}>Pakistan </p></div> ):('')}</div>
                  <div className='pt-[12px] pb-[32px] border-b-[1px] border-solid border-[#CACDD8]'>
            <label  className={`flex font-semibold text-[13px] leading-[27px]  `}>Phone Number <p className='pl-1 text-[#C94D3F]' >*</p></label>
            <input type='text'  className={`  pl-[17px] max-w-[565px] w-full  h-[50px] border-[1px] border-[#A2A6B0] border-solid outline-none rounded-[4px] `}  />  
     </div>
     <div className='pt-[17px]'>
                <h1 className='font-[600] text-[13px] leading-[27px]'>Standard Rate</h1>
                <div className='flex gap-[8px]'>
                   <div className={`h-[21px] max-w-[21px] w-full rounded-full p-[2px] border-[2px] border-solid border-[#0156FF] cursor-pointer flex items-center justify-center `} onClick={()=>{setradios(radios =>!radios)}}> <div className={`${radios?('bg-[#0156FF]'):('bg-[#ffffff]')} max-w-[19px] w-full h-full rounded-full`}></div></div>
                  <div className='flex max-w-[700px] w-full justify-between items-center'>  <p className='font-[400] text-[14px] leading-[20px]'>Price may vary depending on the item/destination. Shop Staff will contact you. </p><p className='font-[600] text-[14px] leading-[20px]'>$21.00</p></div>
                </div>
            </div>
            
            <div className='pt-[20px] pb-[40px]'>
                <h1 className='font-[600] text-[13px] leading-[27px]'>Pickup from store</h1>
                <div className='flex gap-[8px]'>
                   <div className={`h-[21px] max-w-[21px] w-full rounded-full p-[2px] border-[2px] border-solid border-[#0156FF] cursor-pointer  flex items-center justify-center`}  onClick={()=>{setradio(radio =>!radio)}}> <div className={`${radio?('bg-[#0156FF]'):('bg-[#ffffff]')} max-w-[19px] w-full h-full rounded-full`}></div></div>
                  <div className='flex max-w-[684px] w-full justify-between items-center'>  <p className='font-[400] text-[14px] leading-[20px]'>1234 Street Adress City Address, 1234 </p> <p className='font-[600] text-[14px] leading-[20px]'>$0.00</p></div>
                </div>

            </div>
            <button className='text-[14px] font-[600] leading-[21px] bg-[#0156FF] h-[50px] w-[210px] rounded-[50px] text-[#ffffff]'>Next</button>
     </div>
     <div className='max-w-[446px] mx-auto w-full mb-[20px]'>
      <div className='flex max-w-[388px] w-full justify-between  xsm:mt-[0px] md:mt-[58px] mx-auto' >
        <div className='max-w-[194px] w-full flex items-center justify-center relative flex-col top-[20px]  '>
            <div onClick={()=>{setblue('farad')}} className={`z-10 bg-[#ffffff] rounded-full w-[40px] h-[40px] border-[2.5px] border-solid  flex items-center justify-center ${blue=='farad'?('border-[#0156FF]'):('border-[#CACDD8]')} cursor-pointer`}><img src={Tick} alt="" /></div>
            <div className={`z-5 absolute  top-[20px]  max-w-[194px] w-full border-[1.5px]  border-solid  ${blue==='farad'?(' border-[#0156FF]'):('border-[#CACDD8]')} `} ></div>
            <p className={`text-[16px] font-[400] leading-[20px] pt-[6px] ${blue=='farad'?('text-[#000000]'):('text-[#CACDD8]')}`} >Shipping</p>
        </div>
        <div className='max-w-[194px] w-full flex items-center justify-center relative flex-col top-[20px]  '>
            <div onClick={()=>{setblue('ali')}} className={`z-10 bg-[#ffffff] rounded-full w-[40px] h-[40px] border-[2.5px] border-solid ${blue=='ali'?('border-[#0156FF]'):('border-[#CACDD8]')} flex items-center justify-center cursor-pointer`}><p className='text-[15px] leading-[24px] font-[600]'>2</p></div>
            <div className={`z-5 absolute top-[20px]   max-w-[194px] w-full border-[1.5px]  border-solid  ${blue=='ali'?(' border-[#0156FF]'):('border-[#CACDD8]')}`}></div>
            <p className={`text-[16px] font-[400] leading-[20px] pt-[6px] ${blue=='ali'?('text-[#000000]'):('text-[#CACDD8]')}`}>Review & Payments</p>
        </div>
      </div>
      <div className='bg-[#F5F7FF] w-full  mt-[66px] pt-[18px] pb-[30px] pl-[32px] pr-[30px]'>
        <div className='pb-[22px] border-b-[1px] border-solid border-[#CACDD8]'>
          <h1 className='font-[600] text-[24px] leading-[36px]'>Order Summary</h1>
        </div>
        <div className='w-full flex justify-between items-center pt-[16px]'>
          <p className='text-[14px] leading-[21px] font-[400] '>{product.selectedProducts.length} Items in Cart</p>
          {products?(<img src={Drop} alt="" onClick={()=>{setproducts(false)}} className='cursor-pointer'/>):(<img src={Drop_2} alt=""  onClick={()=>{setproducts(true)}} className='cursor-pointer'/>)}
        </div>
        {products ?( 
        <div>
        {product.selectedProducts.map((item , index)=>(
          <div key={index+'details'} className='flex  items-start pt-[25px] gap-[15px]'>
            <img src={item.image} alt="" className='h-[62px] w-[62px] '/>
            <div>
              <div><p className='text-[14px] leading-[21px] font-[400]'>{item.title}</p></div>
              <div className='flex pt-[5px]'><p className='text-[14px] leading-[20px] font-[400] text-[#A2A6B0] pr-1'>{item.Qty}</p><p className='text-[14px] leading-[19px] font-[600]'> ${item.Qty * convertPrice(item.price)}.00</p></div>
            </div>
          </div>
        ))}</div>):('')
        }
      </div>
     </div>
    </div>
   
    </>
  )
}

export default CheckOut

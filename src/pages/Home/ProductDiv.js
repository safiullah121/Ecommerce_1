import React, { useState ,useContext , useEffect} from 'react';
import Rating from './Rating';
import Uncheck from "../img/uncheck.svg";
import { Link, ScrollRestoration } from 'react-router-dom';
import Like from '../img/heart.svg';
import Graph from '../img/graph.svg';
import Blue from '../img/blueCart.svg';
import { useNavigate } from 'react-router-dom';
import Context from '../Context'
import { supabase } from '../../SupabaseClient';
import { round } from 'lodash';


const ProductDiv = (props) => {
  const product = useContext(Context)

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Product', { state: { image: props.item.id } });
    product.setHoveredItem_3(false)
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
  const [Data, setData] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      
      const user_email = JSON.parse(sessionStorage.getItem('token')) || [];
    const userProfile = JSON.parse(localStorage.getItem('profileData'));
    const userProducts = JSON.parse(localStorage.getItem('userProducts'));
    const emailWanted = userProfile?.find(item => item.user_email === user_email.user.email);
    if (emailWanted.product_ids!==[] && user_email) {
      product.setproductIds(emailWanted.product_ids);
      product.setselectedProducts_2(userProducts)
    } else {
      // Handle the case where emailWanted is undefined (not found)
      console.error('User profile not found for the email:', user_email.user.email);
    }
  }
}, []);

const id = props.item.id;
  const handleClick3 =async (e) => {
     product.setproductToast(true)
    if (!sessionStorage.getItem('token')) { const existingArray = JSON.parse(localStorage.getItem("product")) || [];
    
    const existingProduct = existingArray.find((product) => product.id === id);
    if (existingProduct) {
      if (existingProduct.Qty < 50) {
        const updatedArray = existingArray.map((product) => {
          if (product.id === id) {
            const newQty = product.Qty + 1;
            return { ...product, Qty: newQty > 50 ? 50 : newQty };
          }
          return product;
        });
        localStorage.setItem("product", JSON.stringify(updatedArray));
        product.setselectedProducts(updatedArray);
      } else {
        alert("Quantity already at maximum (50)");
      }
    } else {
      const selectedArrayObj = product.allProducts.find((i) => i?.id === id);
      const newProduct = { ...selectedArrayObj, Qty: 1 };
      existingArray.push(newProduct);
      localStorage.setItem("product", JSON.stringify(existingArray));
      product.setselectedProducts(existingArray);
    }}
  e.stopPropagation();
  if (sessionStorage.getItem('token')) {
    await product.setproductToast(true)
    
    const dataArray = [...product.productIds, {id}]
    console.log(dataArray, "dataArray")
     product.setproductIds(dataArray);
    const user_email = JSON.parse(sessionStorage.getItem('token')) || []
  

  if (dataArray!==[] && user_email.user.email!=='') {
    const data = {
      user_email: user_email.user.email,
      product_ids: dataArray,
    };

    // Use the upsert method to insert or update data in the "User Profile" table
  if (sessionStorage.getItem('token')) { 
    product.setproductToast(false)
    await supabase
      .from('User_Profile') // Replace 'user_profile' with your actual table name
      .upsert([data]) // upsert() takes an array of data objects
      .then(({ data, error }) => {
        if (error) {
          console.error('Error inserting data:', error);
        } 
        
      });}
  }
  // const email = JSON.parse(sessionStorage.getItem('token'))
  await supabase
  .from('User_Profile')
  .select('product_ids') // Replace 'your_specific_column_name' with the column you want to retrieve
  .eq('user_email', user_email.user.email) // Add any additional conditions to uniquely identify the row
  .then(({ data, error }) => {
    if (error) {
      console.error('Error fetching data:', error);
    } else {
      // Handle the fetched data here
      if (data.length > 0) {
        product.setproductToast(false)
        const specificColumnValue = data[0].product_ids;
        
         const allProducts = JSON.parse( localStorage.getItem('selectedProduct'))
  const userProductIds = specificColumnValue.map(product => product.id);
  const userProducts = allProducts.filter(product => userProductIds.includes(product.id))
  localStorage.setItem('userProducts',JSON.stringify(userProducts))
  product.setproductToast(false)
  product.setselectedProducts_2(userProducts)
      } else {
        console.log('No data found.');
      }
    }
  });}
};
// useEffect(() => {

// }, [Data]);


  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={` cursor-pointer group ${
          hover_1 === true && 'productDiv'
        } rounded-[20px]  mx-auto w-[220px] relative pt-[5px] pr-[10px] pl-[17px]  pb-[20px] h-[400px] mt-[10px] mb-[10px]`}
      id={props.item.id}
      >
        <div key={props.index + Math.random()}
        onClick={handleClick}

        >
          <div
            className={`flex  pl-2`}
          >
            <img src={props.item.label} alt='' />
            <p className={`${
              props.item.label == Uncheck ? 'text-[#C94D3F]' : 'text-[#78A962]'
            } pl-1 text-[10px] leading-[21px] font-normal `}>
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
                <button onClick={handleClick3} className='flex items-center gap-[10px] pl-[20px] pr-[20px] pt-[8px] pb-[8px] h-[37px] border-[2px] border-[#0156FF] border-solid rounded-[50px]'>
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
     
    </>
  );
};

export default ProductDiv;

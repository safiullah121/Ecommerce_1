import React, { useContext } from 'react'
import ProductDiv from '../../pages/Home/ProductDiv'
import { useEffect } from 'react';
import Context from '../../pages/Context';
import { ToastContainer , toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FavProducts = () => {
    const product = useContext(Context)
    useEffect(() => {
        if(product.favProduct){ toast.success('Product Added successfully')}
    }, [product.favProduct]);
    const favProducts =  JSON.parse(localStorage.getItem('favProduct')) || []
  return (
    <>
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
    <h1 className='text-[30px] font-[600] mt-[20px] mb-[20px] pl-[15px] text-[#000000]'>Favourite Products</h1>
    {favProducts.length === 0 ? (
  <div className='mb-[20px]'>
    <p className='text-[20px] text-center font-bold'>No Favourite Products</p>
  </div>
) : (
  <div className='flex max-w-[1100px] mx-auto flex-wrap mb-[20px]'>
    {favProducts.map((item, index) => (
      <ProductDiv key={index} item={item} index={index} />
    ))}
  </div>
)}

    </>
  )
}

export default FavProducts

import React, { useContext } from 'react'
import ProductDiv from '../../pages/Home/ProductDiv'
import { useEffect } from 'react';
import Context from '../../pages/Context';
const FavProducts = () => {
    const product = useContext(Context)
    const favProducts =  JSON.parse(localStorage.getItem('favProduct')) || []
  return (
    <>
    <h1 className='text-[30px] font-[600] mt-[20px] mb-[20px] pl-[15px] text-[#000000]'>Favourite Products</h1>
{ favProducts!==[]   ?<div className='flex max-w-[1100px] mx-auto flex-wrap'>
      {favProducts.map((item , index)=>(
        <ProductDiv item={item} index={index}/>
      ))}
    </div>:
    <div>
        <p className='text-[20px] text-center font-bold'>No Favourite Products</p>
        </div>}
    </>
  )
}

export default FavProducts

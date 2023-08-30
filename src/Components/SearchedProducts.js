import React, { useState ,useContext } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import ProductDiv from '../pages/Home/ProductDiv';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Context from "../pages/Context"

const SearchedProducts = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searched = queryParams.get('array');
  const values = searched.split(",").map((value) => parseInt(value));
  const all = JSON.parse(localStorage.getItem('selectedProduct'));
    const productsToFind = all.filter((product) =>
    values.indexOf(product.id) !== -1
  );
console.log(productsToFind)
    const products = useContext(Context)
    {products.productToast&& (toast.info('Product Is Added To Your Cart'))}
  return (
    <>
    <h1 className="max-w-[1398px] mx-auto mt-[20px] pl-[20px] text-[20px] font-semibold">SEARCH RESULTS:</h1>
    <div className='flex flex-wrap gap-[15px] max-w-[1160px] mx-auto'>
      {productsToFind.map((item, index)=>(
   <ProductDiv item={item} index={index} />
      ))}
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
        pauseOnHover={true}
        theme="light"
      />
    </>
  )
}

export default SearchedProducts

import {React , useState , useContext , useEffect} from 'react'
import Pay from '../img/pay.svg'
import Heart from '../img/heart.svg'
import Graph from '../img/graph.svg'
import Message from '../img/message.svg'
import Zip from '../img/10.svg'
import Intel from '../img/intel.svg'
import Rtx from '../img/rtx.svg'
import Ssd from '../img/ssd.svg'
import Ddr from '../img/ddr.svg'
import Core from '../img/core.jpg'
import { Link, useLocation} from 'react-router-dom';
import Context from '../Context'
import { supabase } from '../../SupabaseClient'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
    const Products = JSON.parse(localStorage.getItem('selectedProduct'))
    const [tabIndex, settabindex] = useState(0);
    const location = useLocation();
    const id = location.state && location.state.image;

    const product = useContext(Context);
    const selectedImage = Products.find(p => p.id === id);
    const liArray =[
        '•  Intel Core i7-10700F',
        '•  Intel H410',
        '•  WHITE',
        '•  NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
        '•  SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
        '•  2 total slots (64GB Max)',
        '•  512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
        '•  Gaming Keyboard GK30 + Gaming Mouse GM11',
        '•  3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
        '•  Intel WGI219Vethernet (10/100/1000M)',
        '•  AX200 (WIFI 6)+BT5.1',
        '•  PSU 330W',
        '•  Fan Cooler',   
    ];
    const paraArray =[
        <p className='text-[#000000] text-[12px] leading[18px] font-normal'>Home</p>,
        <p className='text-[#0156FF] ml-1 mr-1'>›</p>,
        <p className='text-[#000000] text-[12px] leading[18px] font-normal'> Laptops</p>,
        <p className='text-[#0156FF] ml-1 mr-1'>›</p>,
        <p className='text-[#A3A3A3] text-[12px] leading[18px] font-normal'> MSI WS Series</p>,
    ];
    const [price, setprice] = useState(' $3,299.00');
    const [productVal , setproductVal] = useState(1)
    const handleAddToCart = async () => {
        toast.success('Product Is Added To Cart');
      
       if(!sessionStorage.getItem('token')){
         if (productVal >= 1 && productVal <= 50) {
          const existingArray = JSON.parse(localStorage.getItem("product")) || [];
          const existingProduct = existingArray.find((product) => product.id === id);
      
          if (existingProduct) {
         
            if (existingProduct.Qty==50) {
                alert("only 50 products are allowed");
            }
            const newQty = existingProduct.Qty + productVal;
            const updatedQty = newQty <= 50 ? newQty : 50;
            const updatedArray = existingArray.map((product) => {
              if (product.id === id) {
                return { ...product, Qty: updatedQty };
              }
              return product;
            });
            localStorage.setItem("product", JSON.stringify(updatedArray));
        } else {
            const selectedArrayObj = product.allProducts.find((i) => i?.id === id);
            const newQty = productVal <= 50 ? productVal : 50;
            const newProduct = { ...selectedArrayObj, Qty: newQty };
            existingArray.push(newProduct);
            product.setselectedProducts(existingArray)
            localStorage.setItem("product", JSON.stringify(existingArray));
          }
        } else {
          alert("only 50 products are allowed");
        }}
        else if(sessionStorage.getItem("token")){
            if (productVal >= 1 && productVal <= 50) {
                const existingArray = JSON.parse(localStorage.getItem("userProducts")) || [];
                const existingProduct = existingArray.find((product) => product.id === id);
                if (existingProduct) {
                    if (existingProduct.Qty==50) {
                      alert("only 50 products are allowed");
                  }
                    
                  const newQty = existingProduct.Qty + productVal;
                  const updatedQty = newQty <= 50 ? newQty : 50;
                  const updatedArray = existingArray.map((product) => {
                    if (product.id === id) {
                      return { ...product, Qty: updatedQty };
                    }
                    return product;
                });
                localStorage.setItem("userProducts", JSON.stringify(updatedArray));
            } else {
                const selectedArrayObj = product.allProducts.find((i) => i?.id === id);
                const newQty = productVal <= 50 ? productVal : 50;
                const newProduct = { ...selectedArrayObj, Qty: newQty };
                existingArray.push(newProduct);
                localStorage.setItem("userProducts", JSON.stringify(existingArray));
                product.setselectedProducts_2(existingArray)
                }
              } else {
                alert("only 50 products are allowed");
              }
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
  });
        }
      };
      
      
  return (
    <div className=''>
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
        <div className=' border-b-[1px] border-solid border-[#CACDD8] pl-[15px] pr-[15px]'>
        <div className='flex justify-between xsm:flex-col-reverse xl:flex-row xsm:gap-[20px] lg:-flex-row items-center max-w-[1398px] mx-auto pt-[26px] pb-[25px] '>
            <div className='flex'>
                <p><button  className={`text-[14px] font-semibold leading-[21px] ${
                    tabIndex!==0?'text-[#666666]':"text-[#000000]"
                } mr-[30px] ${
                    tabIndex==0?'border-b-2 border-[#0156FF] border-solid':""
                } `} onClick={()=>{
                    settabindex(0)
                }} id='border_1'>About Product </button></p>
                <p><button  className={`text-[14px] font-semibold leading-[21px] ${
                    tabIndex!==1?'text-[#666666]':"text-[#000000]"
                } mr-[30px] ${
                    tabIndex==1?'border-b-2 border-[#0156FF] border-solid':""
                } `} onClick={()=>{
                    settabindex(1)

                }}  id='border_2'>Details </button></p>
                <p><button  className={`text-[14px] font-semibold leading-[21px] ${
                    tabIndex!==2?'text-[#666666]':"text-[#000000]"
                }  ${
                    tabIndex==2?'border-b-2 border-[#0156FF] border-solid':""
                } `} onClick={()=>{
                    settabindex(2)

                }} id='border_3'>Specs </button></p>
            </div>
            <div className=' flex items-center flex-wrap justify-center'>
               <div className='flex'> <p className='text-[14px] leading-[21px] font-normal' >On Sale from </p> <p className='pl-1 text-[14px] leading-[21px] font-semibold'>{price}</p> </div>
                <input type="number" value={productVal}onChange={(e) => {
    if (e.target.value <= 50) {
      setproductVal(e.target.value);
    } else {
      alert("Only 50 Products Are Allowed");
    }
  }} min={1} max={50} className='ml-[10px] bg-[#F5F7FF] max-w-[70px] max-[40px] pt-[11px] pb-[12px] pr-[9px] pl-[15px] rounded-[6px] font-semibold text-[13px] leading-[27px] outline-none' />
                <button className='bg-[#0156FF] ml-[21px] text-[#FFFFFF] text-[14px] leading-[21px] xsm:mt-[15px] sm:mt-[0px] font-semibold rounded-[50px] pt-[15px] pb-[15px] pl-[32px] pr-[32px]' onClick={handleAddToCart}>Add to Cart</button>
                <button className='bg-[#FFB800] ml-[13px] rounded-[50px] pt-[15px] pb-[15px] pl-[32px] xsm:mt-[15px] sm:mt-[0px] pr-[32px]'><img src={Pay} alt="" /></button>
            </div>
        </div>
        </div>
        <div className='flex xl:flex-nowrap xsm:flex-wrap-reverse mx-auto max-w-[1920px]'>
  
        {tabIndex==0?( 
            <div className='max-w-[1064px] w-full bg-[#F5F7FF] mx-auto sm:pr-[50px] md:pr-[80px] lg:pr-[118px] flex flex-col items-end pl-[10px]'>
            <div className='max-w-[600px] w-full xl:pl-[80px]'>
            <div className='flex items-center pb-[25px] pt-[67px] '>
            {paraArray.map((item,index)=>(
                 
                <div key={index+'para_1'}>{item}</div>
                 
            ))}  </div>
            <h1 className=' font-medium text-[32px] leading-[48px]'>MSI MPG Trident 3</h1>
            <a href="" className='pt-[13px] text-[12px] leading-[18px] font-normal text-[#0156FF]'>Be the first to review this product</a>
            <p className='max-w-[567px] pt-[24px]'>MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop</p>
            <div className='flex gap-[18px] pt-[46px] items-center'>
            <div className=' p-[2px] rounded-full '>
            <svg  onClick={()=>{console.log(product.allProducts)}} width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15.5" cy="15.5" r="15.5" transform="rotate(-180 15.5 15.5)" fill="#4B4D4F"/>
            </svg>
            </div>
            <div className=' p-[2px] rounded-full '>
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15.5" cy="15.5" r="15.5" transform="rotate(-180 15.5 15.5)" fill="#F2E9DC"/>
            </svg>
            </div>
            <div className=' p-[2px] rounded-full '>            
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15.5" cy="15.5" r="15.5" transform="rotate(-180 15.5 15.5)" fill="#EAE8EB"/>
            </svg>
            </div>
            </div>
            <div className='flex items-center pt-[31px] max-w-[567px] justify-between '>
            <div className='flex '>
                <p className='text-[12px] leading-[18px] font-semibold'>Have a Question?</p>
                <Link to={'/ContactUs'} className='pl-1 text-[12px] leading-[18px] font-normal text-[#0156FF] underline'>Contact Us</Link>
            </div>
            <h1 className='text-[12px] leading-[18px] font-light text-[#000000]'>SKU D5515AI</h1>
            </div>
            </div>
            <div className='xsm:pt-[50px] md:pt-[100px] xl:pt-[166px] xl:pl-[20px] 2xl:pl-[210px] flex items-center pb-[59px] max-w-[1064px] w-full'>
                <p className=' text-[14px] leading-[21px] font-bold'>+</p>
            <p className=' text-[18px] leading-[27px] font-bold'><a href=""> More information</a></p>
            </div>
        </div>):('')}
    
        {tabIndex==1?( 
            <div className='auto max-w-[1064px] w-full bg-[#F5F7FF] xl:pr-[50px] 2xl:pr-[118px]  flex flex-col items-end pl-[10px]'>
            <div className='max-w-[600px] w-full xl:pl-[50px] '>
            <div className='flex items-center pb-[25px] pt-[67px] '>
            {paraArray.map((item,index)=>(
                 
                <div key={index+'para_2'}>{item}</div>
                 
            ))}  </div>
            <h1 className=' font-medium text-[32px] leading-[48px]'>MSI MPG Trident 3</h1>
            <button href="" className='pt-[13px] text-[12px] leading-[18px] font-normal text-[#0156FF]'>Be the first to review this product</button>
           <ul className='pt-[28px]'>
        {liArray.map((item ,index)=>(
            <li key={index + "item"}>{item}</li>
        ))}

           </ul>
             
            <div className='flex items-center pt-[31px] max-w-[567px] justify-between '>
            <div className='flex '>
                <p className='text-[12px] leading-[18px] font-semibold'>Have a Question?</p>
                <a href="" className='pl-1 text-[12px] leading-[18px] font-normal text-[#0156FF] underline'>Contact Us</a>
            </div>
            <h1 className='text-[12px] leading-[18px] font-light text-[#000000]'>SKU D5515AI</h1>
            </div>
            </div>
            <div className='pt-[82px]  flex items-center pb-[59px] xl:pl-[10px] 2xl:pl-[200px] max-w-[900px] w-full'>
                <p className=' text-[14px] leading-[21px] font-bold'>+</p>
            <p className=' text-[18px] leading-[27px] font-bold'><a href=""> More information</a></p>
            </div>
        </div>):('')}
  
        {tabIndex==2?( 
         <div className='mx-auto max-w-[1064px] w-full bg-[#F5F7FF]  flex flex-col items-end pl-[10px] xsm:pr-[30px] md:pr-[60px] lg:pr-[80px] xl:pr-[118px]'>
            <div className=' max-w-[600px] w-full xl:pl-[150px] 2xl:pl-[100px] '>
            <div className='flex items-center pb-[25px] pt-[67px] '>
            {paraArray.map((item,index)=>(
                 
                <div key={index+'para_3'}>{item}</div>
                 
            ))}  </div>
            <h1 className=' font-medium text-[32px] leading-[48px]'>MSI MPG Trident 3</h1>
            <a href="" className='pt-[13px] text-[12px] leading-[18px] font-normal text-[#0156FF]'>Be the first to review this product</a>
            <div className='border-[1px] border-solid border-[#CACDD8] mt-[23px] max-w-[401px]'>
            <div className=' flex gap-[10px] pt-[10px] pb-[10px] pl-[15px] pr-[15px] bg-[#ffffff] max-w-[401px] w-full '>
               <p className='max-w-[121px] w-full font-normal text-[14px] leading-[21px]'>CPU</p>
               <p className='max-w-[240px] w-full font-normal text-[14px] leading-[21px]'>N/A</p>
            </div>
            <div className='flex gap-[10px] pt-[10px] pb-[10px] pl-[15px] pr-[15px] bg-[#F5F7FF]  max-w-[401px] w-full'>
            <p className='max-w-[121px] w-full font-normal text-[14px] leading-[21px]'>Featured</p>
               <p className='max-w-[240px] w-full font-normal text-[14px] leading-[21px]'>N/A</p>
            </div>
            <div className='flex gap-[10px] pt-[10px] pb-[10px] pl-[15px] pr-[15px] bg-[#ffffff]  max-w-[401px] w-full'>
            <p className='max-w-[121px] w-full font-normal text-[14px] leading-[21px]'>I/O Ports</p>
               <p className='max-w-[240px] w-full font-normal text-[14px] leading-[21px]'>N/A</p>
            </div>
           </div>
            <div className='flex items-center pt-[50px] max-w-[567px] w-full justify-between '>
            <div className='flex '>
                <p className='text-[12px] leading-[18px] font-semibold'>Have a Question?</p>
                <a href="" className='pl-1 text-[12px] leading-[18px] font-normal text-[#0156FF] underline'>Contact Us</a>
            </div>
            <h1 className='text-[12px] leading-[18px] font-light text-[#000000]'>SKU D5515AI</h1>
            </div>
           
            </div>
            <div className='mt-[82px] xl:pl-[40px] 2xl:pl-[250px] flex items-center mb-[169px] max-w-[1064px] w-full '>
                <p className=' text-[14px] leading-[21px] font-bold'>+</p>
            <p className=' text-[18px] leading-[27px] font-bold'><a href=""> More information</a></p>
            </div>
        </div>):('')}
        <div className='xl:max-w-[600px] 2xl:max-w-[855px] mx-auto w-full'>
        <div className='flex pt-[74px] xsm:justify-center xl:justify-start gap_1'>
            <div className='pt-[12px] padding'>
                <div className='w-[30px] h-[30px] mb-[3px] rounded-full border-2 border-solid border-[#A2A6B0] flex items-center justify-center cursor-pointer '><img src={Heart} alt="" /> </div>
                <div className='w-[30px] h-[30px] mb-[3px] rounded-full border-2 border-solid border-[#A2A6B0] flex items-center justify-center cursor-pointer'><img src={Graph} alt="" /> </div>
                <div className='w-[30px] h-[30px] mb-[3px] rounded-full border-2 border-solid border-[#A2A6B0] flex items-center justify-center cursor-pointer'><img src={Message} alt="" /> </div>
            </div>
            <div className=' '> 
                    <img src={selectedImage.image} alt="" />
            <div className='flex items-center  max-w-[263px] pb-[98px]'>
            <img src={Zip} alt="" />
            <div className='flex items-center ml-[11.5px] w-[1px] h-[23px]  border-[1px] border-[#00AEB8] border-solid'></div>
            <p className='pl-[14.5px] text-[12px] leading-[14px] font-light'>own it now, up to 6 months interest free <a href="" className='underline text-[12px] font-normal leading-[14px]'>learn more</a> </p>
        </div></div>
        </div>
        
       </div>
        </div>
           <div className='xl:flex xsm:hidden max-w-[1920px] w-full flex justify-end mx-auto max-h-[681px] h-full bg-black'>
            <div className='2xl:max-w-[700px] xl:max-w-[500px]  w-full  bg-transparent pl-[50px] pt-[100px] pb-[110px]'>
            <div className=' flex flex-col  justify-center items-end'>
              <div className='max-w-[436px] '>
              <h1 className=' pb-[60px] text-white font-medium text-[44px] leading-[58px]'>Outplay the Competittion</h1>
              <p className='text-white pb-[40px] font-light text-[18px] leading-[26px]'>Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. <br/> Intel® Core™ i7 processor with the upmost <br/> computing power to bring you an unparalleled <br/> gaming experience.
</p><p className='text-white'>*Performance compared to i7-9700. Specs <br/> varies by model.</p>
            </div>
            </div>
            
            </div>
            <img src={Core} alt="" className='xl:max-w-[870px] 2xl:max-w-[1000px] w-full'/>
           
           </div>
          <div className='max-w-[1920px] w-full flex mx-auto'>
          
            <div className='flex justify-between bg-support_2  max-w-[1920px] w-full h-[400px] bg-no-repeat bg-center'>
            <div className=' w-full xsm:max-w-[400px] xl:max-w-[400px] 2xl:max-w-[700px] max-h-[400px] back_2 flex xsm:justify-center md:justify-end'>
            <div className=' max-w-[664px]  pt-[100px]'>
            <div className='mb-[20px] flex items-center  gap-[70px] border-[1px] border-solid border-[#CACDD8] max-w-[347px] w-full  justify-between rounded-[6px]'>
                <p className='font-medium text-[16px] leading-[24px] pl-[12px] pt-[4px] pb-[4px]'>Product Support</p>
                <button className='pr-[12px] text-[#0156FF]'>→</button>
            </div>
            <div className='mb-[20px] flex items-center  gap-[155px] border-[1px] border-solid border-[#CACDD8] max-w-[347px] justify-between rounded-[6px]'>
                <p className='font-medium text-[16px] leading-[24px] pl-[12px] pt-[4px] pb-[4px]'>FAQ</p>
                <button className='pr-[12px] text-[#0156FF]'>→</button>
            </div>
            <div className=' flex items-center  gap-[65px] border-[1px] border-solid border-[#CACDD8] max-w-[347px] justify-between rounded-[6px]'>
                <p className='font-medium text-[16px] leading-[24px] pl-[12px] pt-[4px] pb-[4px]'>Our Buyer Guide</p>
                <button className='pr-[12px] text-[#0156FF]'>→</button>
            </div>
            </div>
          </div>
          <div className='pt-[400px] sm:back'></div>
            </div>
 
          
          </div>
          <div className='max-w-[1920px] w-full mx-auto linear_1'>
             <div className='max-w-[1400px] text-[#ffffff] mx-auto pt-[76px] pb-[60px]'>
                <h1 className='font-medium text-[38px] leading-[58px] text-center pb-[28px] '>Featues</h1>
                <p className='font-light text-[18px] leading-[26px] text-center max-w-[418px] mx-auto'>The MPG series brings out the best in gamers <br/> by allowing full expression in color with <br/> advanced RGB lighting control and <br/> synchronization.</p>
            </div>
            <div className='max-w-[1160px] mx-auto flex-wrap flex justify-between items-center gap-20'>
                <div className=' mx-auto max-w-[254px] flex flex-col justify-center items-center pb-[104px]'>
                     <div className='mb-[28px] bg-[#000000] max-w-[136px] w-full h-[136px]  rounded-full flex justify-center items-center '> <img src={Intel} alt="" /></div>
                     <p className='text-[#ffffff] font-light text-[14px] leading-[22px] max-w-[254px] text-center'><a href="" className=' font-bold text-[14px] leading-[22px]'>Intel® Core™ i7</a> processor with the <br/> upmost computing power to bring <br/> you an unparalleled gaming <br/> experience.</p>
                </div>
                <div className=' mx-auto max-w-[254px] flex flex-col justify-center items-center pb-[104px]'>
                     <div className='mb-[28px] bg-[#000000] max-w-[136px] w-full h-[136px]  rounded-full flex justify-center items-center '> <img src={Rtx} alt="" /></div>
                     <p className='text-[#ffffff] font-light text-[14px] leading-[22px] max-w-[254px] text-center'>The new <a href="" className=' font-bold text-[14px] leading-[22px]'>GeForce® RTX SUPER™</a> Series has more cores and higher clocks for superfast performance compared to previous-gen GPUs.</p>
                </div>
                <div className=' mx-auto max-w-[254px] flex flex-col justify-center items-center pb-[128px]'>
                     <div className='mb-[28px] bg-[#000000] max-w-[136px] w-full h-[136px]  rounded-full flex justify-center items-center '> <img src={Ssd} alt="" /></div>
                     <p className='text-[#ffffff] font-light text-[14px] leading-[22px] max-w-[254px] text-center'>Unleash the full potential with the latest <a href="" className=' font-bold text-[14px] leading-[22px]'>SSD technology</a>, the NVM Express. 6 times faster than traditional SATA SSD.</p>
                </div>
                <div className=' mx-auto max-w-[254px] flex flex-col justify-center items-center pb-[86px]'>
                     <div className='mb-[28px] bg-[#000000] max-w-[136px] w-full h-[136px]  rounded-full flex justify-center items-center '> <img src={Ddr} alt="" /></div>
                     <p className='text-[#ffffff] font-light text-[14px] leading-[22px] max-w-[254px] text-center'> Featuring the latest <a href="" className=' font-bold text-[14px] leading-[22px]'>10th Gen Intel® Core™</a> processors, memory can <br/> support up to DDR4 2933MHz to <br/> delivers an unprecedented gaming <br/> experience.</p>
                </div>
            </div>
          </div>
    </div>
  )
}

export default Product

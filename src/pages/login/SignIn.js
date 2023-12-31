import {React , useContext, useState, useEffect , useRef } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { supabase } from '../../SupabaseClient';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Context from '../Context';

const SignIn = ({setToken}) => {

  // useEffect(() => {
   
  //   fetchingData_2();
  // }, []);
  const profileData = JSON.parse(localStorage.getItem('profileData'))
    const product = useContext(Context)
    const navigate = useNavigate()
    const [userData, setuserData] = useState({
        email:'',
        password:'',
      });
      const [loding, setloding] = useState(false);
     const handleSignIpClick = async(e) => {
  console.log(product.productIds)
      const emailWanted = profileData?.find(item => item.user_email === userData.email)
      e.preventDefault();  
      product.setHidingExtra(true);
      product.setlogout(true)
      if (emailWanted) {
        const product_ids = emailWanted.product_ids;
        // product.setproductIds((previousIds) => [...previousIds, ...product_ids]);
      }
      
      try{
        const { data, error } = await supabase.auth.signInWithPassword({
          email: userData.email,
          password: userData.password,
        })
    if (data){
    sessionStorage.setItem('token',JSON.stringify(data))
}
     if(data.user==null || data.session==null){
       toast.error(" Check Your Email or Password ")}
       if(data.session!==null || data.user!==null){
        navigate("/")
        product.setloginButton(true)
        setToken(data)
       

       }
    }catch(error){
        alert(error)
      }
     if (sessionStorage.getItem('token')){ 
      const user_email = JSON.parse(sessionStorage.getItem('token'))
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
      product.setproductToast(false)
     };
      const handleChange = (e) => {
         setuserData((previousData)=>{
           return {
            ...previousData,
            [e.target.name]:e.target.value
           }
         })
      }
  
      const label =[
          <p className='text-[#000000] '>Home</p>,
          <p className='text-[#0156FF] pl-1 pr-1'>›</p>,
          <p className='text-[#000000] '>Login</p>
      ]
      const liArray =[
  '•  Check out faster',
  '•  Keep more than one address',
  '•  Track orders and more'
      ]
      const signInButtonRef = useRef(null);
      useEffect(() => {
        const handleKeyPress = (event) => {
          if (event.key === 'Enter') {
            signInButtonRef.current.click(); // Simulate a click on the "Sign In" button
          }
        };
      
        document.addEventListener('keydown', handleKeyPress);
      
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      }, []);
      
    return (
      <>
        <div className='max-w-[1400px] w-full pt-[21px] pb-[58px] mx-auto pl-[15px] pr-[15px]'>
        <div className='flex items-center '>
              {label.map((item,index)=>(
                  <div key={index+'label'}> <p className='text-[12px] leading[18px] font-normal'>{item}</p> </div>
              ))}  </div>
          <h1 className='text-[32px] leading-[48px] font-semibold pt-[19px]'>Customer Login</h1> 
          <div className='max-w-[1162px] w-full   mx-auto  flex-wrap flex justify-between gap-[20px] pt-[21px]'>
              <div className='bg-[#F5F7FF] pr-[20px] mx-auto max-w-[564px] w-full pt-[37px] xsm:pl-[10px] xsm:pr-[5px] sm:pl-[57px] sm:pr-[60px] pb-[40px]'>
                  <h1 className='text-[18px] leading-[27px] font-semibold'>Registered Customers</h1>
                  <p  className='text-[14px] leading-[30px] font-light'>If you have an account, sign in with your email address.</p>
                  <div className='pt-[6px]'>
                  <label  className='flex font-semibold text-[13px] leading-[27px] mt-[10px]'>Email <p className='pl-1 text-[#C94D3F] ' >*</p></label>
          <input type="text" name='email' onChange={handleChange} className='cursor-text placeholder:text-[#A2A6B0] placeholder:text-[14px] placeholder:font-light placeholder:leading-[20px] pl-[17px] maxwidth_2  h-[50px] border-[1px] border-[#A2A6B0] border-solid outline-none rounded-[4px] ' placeholder='Your Email' />
          <label  className='flex font-semibold text-[13px] leading-[27px] mt-[10px]'>Password <p className='pl-1 text-[#C94D3F] ' >*</p></label>
          <input type="password" name='password' onChange={handleChange} className='cursor-text placeholder:text-[#A2A6B0] placeholder:text-[14px] placeholder:font-light placeholder:leading-[20px] pl-[17px] maxwidth_2  h-[50px] border-[1px] border-[#A2A6B0] border-solid outline-none rounded-[4px] ' placeholder='Your Password' />
                  
                  </div>
                  <div className='flex items-center w-full justify-between pt-[30px] '>
                  <button className='text-[14px] leading-[21px] font-semibold bg-[#0156FF] rounded-[50px] text-[#ffffff] w-[151px] h-[50px]'   ref={signInButtonRef} onClick={handleSignIpClick} >Sign In</button>
                 
                  </div>
              </div>
              <div className='bg-[#F5F7FF]  mx-auto max-w-[564px] w-full pt-[37px] pl-[57px] pr-[60px] pb-[146px]'>
                  <h1 className='text-[18px] leading-[27px] font-semibold'>New Customer?</h1>
                  <p className='mt-[22px] text-[14px] leading-[20px] font-normal'>Creating an account has many benefits: </p>
                  <ul className='mt-[22px] text-[14px] leading-[20px] font-normal'>
                  {liArray.map((item,index)=>(
                   
                      <li key={index +'li'}>{item}</li>
                   
                  ))}
                  </ul>
                <Link to='/Register'>  <button className='text-[14px] leading-[21px] font-semibold bg-[#0156FF] text-[#ffffff] rounded-[50px] w-[208px] h-[50px] mt-[35px]'>Create An Account</button></Link>
              </div>
        </div>   
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
export default SignIn

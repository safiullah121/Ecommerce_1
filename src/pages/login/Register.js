import {React , useState , useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../../SupabaseClient';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const [userData, setuserData] = useState({
      fullName:'',
      email:'',
      password:'',
      password_confirmation:''
    });
    const [loding, setloding] = useState(false);
   const handleSignUpClick = async(e) => {
    e.preventDefault();
    try{const { data, error } = await supabase.auth.signUp({
    email: userData.email,
    password: userData.password,
    options: {
      data: {
        full_name: userData.fullName,
        password_confirmation:userData.password,
      }
    }
  }
    )
    console.log(data);
    if (userData.password !== userData.password_confirmation){
      toast.error('passwords are different')  
    }
    else if(data.user!==null){
     alert("Please Check Your Email For Varification Link")}
 
  }catch(error){
      alert(error.message)
    }
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
  return (
    <>
      <div className='max-w-[1400px] w-full pt-[21px] pb-[58px] mx-auto '>
      <div className='flex items-center '>
            {label.map((item,index)=>(
                <div key={index+'label'}> <p className='text-[12px] leading[18px] font-normal'>{item}</p> </div>
            ))}  </div>
        <h1 className='text-[32px] leading-[48px] font-semibold pt-[19px]'>Customer Sign Up</h1> 
        <div className='max-w-[1162px] w-full   mx-auto  flex-wrap flex justify-between gap-[20px] pt-[21px]'>
            <div className='bg-[#F5F7FF] pr-[20px] mx-auto max-w-[564px] w-full pt-[37px] xsm:pl-[10px] xsm:pr-[5px] sm:pl-[57px] sm:pr-[60px] pb-[40px]'>
                <h1 className='text-[18px] leading-[27px] font-semibold'>Registered Customers</h1>
                <p  className='text-[14px] leading-[30px] font-light'>If you have an account, sign in with your email address.</p>
                <div className='pt-[3px]'>
                <label  className='flex font-semibold text-[13px] leading-[27px]'> Name <p className='pl-1 text-[#C94D3F]' >*</p></label>
        <input type="text" name='fullName' onChange={handleChange} placeholder='Full Name' className=' cursor-text placeholder:text-[#A2A6B0] placeholder:text-[14px] placeholder:font-light placeholder:leading-[20px] pl-[17px] maxwidth_2  h-[50px] border-[1px] border-[#A2A6B0] border-solid outline-none rounded-[4px] '  />
                </div>
                <div className='pt-[6px]'>
                <label  className='flex font-semibold text-[13px] leading-[27px] mt-[10px]'>Email <p className='pl-1 text-[#C94D3F] ' >*</p></label>
        <input type="text" name='email' onChange={handleChange} className='cursor-text placeholder:text-[#A2A6B0] placeholder:text-[14px] placeholder:font-light placeholder:leading-[20px] pl-[17px] maxwidth_2  h-[50px] border-[1px] border-[#A2A6B0] border-solid outline-none rounded-[4px] ' placeholder='Your Email' />
        <label  className='flex font-semibold text-[13px] leading-[27px] mt-[10px]'>Password <p className='pl-1 text-[#C94D3F] ' >*</p></label>
        <input type="password" name='password' onChange={handleChange} className='cursor-text placeholder:text-[#A2A6B0] placeholder:text-[14px] placeholder:font-light placeholder:leading-[20px] pl-[17px] maxwidth_2  h-[50px] border-[1px] border-[#A2A6B0] border-solid outline-none rounded-[4px] ' placeholder='Your Password' />
        <label  className='flex font-semibold text-[13px] leading-[27px] mt-[10px]'>Confirm Password <p className='pl-1 text-[#C94D3F] ' >*</p></label>
        <input type="password" name='password_confirmation' onChange={handleChange} className='cursor-text placeholder:text-[#A2A6B0] placeholder:text-[14px] placeholder:font-light placeholder:leading-[20px] pl-[17px] maxwidth_2  h-[50px] border-[1px] border-[#A2A6B0] border-solid outline-none rounded-[4px] ' placeholder='Password Again' />
                </div>
                <div className='flex items-center w-full justify-between pt-[30px] '>
                <button className='text-[14px] leading-[21px] font-semibold bg-[#0156FF] rounded-[50px] text-[#ffffff] w-[151px] h-[50px]' onClick={handleSignUpClick} >Sign Up</button>
                {/* <p className='text-[14px] leading-[20px] font-normal text-[#0156FF] cursor-pointer'>Forgot Your Password?</p> */}
                </div>
            </div>
            <div className='bg-[#F5F7FF]  mx-auto max-w-[564px] w-full pt-[37px] pl-[57px] pr-[60px] pb-[146px]'>
                <h1 className='text-[18px] leading-[27px] font-semibold'>Old Customer?</h1>
                <p className='mt-[22px] text-[14px] leading-[20px] font-normal'>Creating an account has many benefits: </p>
                <ul className='mt-[22px] text-[14px] leading-[20px] font-normal'>
                {liArray.map((item,index)=>(
                 
                    <li key={index +'li'}>{item}</li>
                 
                ))}
                </ul>
              <Link to='/'>  <button className='text-[14px] leading-[21px] font-semibold bg-[#0156FF] text-[#ffffff] rounded-[50px] w-[208px] h-[50px] mt-[35px]'>Log In</button></Link>
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

export default Register

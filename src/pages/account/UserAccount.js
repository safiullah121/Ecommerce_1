import React, { useState , useEffect, useRef , } from 'react';
import { supabase } from '../../SupabaseClient';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from 'react';
import Context from '../Context';
import Modal from 'react-modal';
import { useLocation } from 'react-router-dom';

const UserAccount = (props) => {
 const product = useContext(Context)
  const [dashboard, setDashboard] = useState(0);
  const label = [
    { title: 'Home ' },
    { title: '›', extraClasses: 'text-[#0156FF] pl-1 pr-1' },
    { title: 'My Dashboard' },
  ];
  const dashboardLinks = [
    { a: 'Account Dashboard' },
    { a: 'Account Information' },
    { a: 'Address Book' },
    { a: 'My Orders', extraClasses: 'border-b-[1px] border-solid border-[#CACDD8] mt-[14px] ml-[17px] mr-[17px]'},
    { a: 'My Downloadable Products' },
    { a: 'Stored Payment Methods' },
    { a: 'Billing Agreements' },
    { a: 'My Wish List', extraClasses: 'border-b-[1px] border-solid border-[#CACDD8] mt-[14px] ml-[17px] mr-[17px]' },
    { a: 'My Product Reviews' },
    { a: 'Newsletter Subscriptions' },
  ];
  const userData = JSON.parse(sessionStorage.getItem('token'));
const information_1 =[
{title:'Contact Information',desc:<p  className='font-[300] text-[16px] leading-[20px]'>{userData.user.user_metadata.full_name} <br /> {userData.user.email}</p>,link:'Edit', link_2:'Change Password'},
{title:'Newsletters',desc:<p  className='font-[300] text-[16px] leading-[20px]'>You don't subscribe to our <br/> newsletter.</p>,link:'Edit'}
];
const information_2 =[
  {title:'Default Billing Address',desc:<p  className='font-[300] text-[16px] leading-[20px]'>You have not set a default billing address.</p>,link:'Edit Address'},
  {title:'Default Shipping Address',desc:<p  className='font-[300] text-[16px] leading-[20px]'>You have not set a default shipping address.</p>,link:'Edit Address'}
  ];
  const handleDashboardClick = (index) => {
    setDashboard(index);
  };

const [PasswordRecovery, setPasswordRecovery] = useState(false);
const [email, setEmail] = useState('');

const handlePasswordChange = () => {
  setPasswordRecovery(true)
};
const handleSubmit = async () => {
 if(sessionStorage.getItem('token') && email!=='' && email.includes("@")){ await supabase.auth.resetPasswordForEmail(email)
  setPasswordRecovery(false);
 toast.info('Check Your Email')
  setEmail('')}
  if (email === '' || !email.includes("@")) {
    toast.error('Please enter a valid email')
  }
};
useEffect(() => {
  if (sessionStorage.getItem('token')){ 
    const user_email = JSON.parse(sessionStorage.getItem('token'))
   supabase
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
}, []);

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 1000,
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '430px', // Adjust to your preference
    width: '100%',
    height : '300px',
    padding: '20px',
    border: '2px solid #dad7d7',
    borderRadius: '6px',
    background: '#ffffff',
  },
};

Modal.setAppElement('#root'); // Replace '#root' with your app's root element ID
const location = useLocation();

useEffect(() => {
  const { search } = location;
  const scrollSection = new URLSearchParams(search).get('scroll');
  
  if (scrollSection) {
    const element = document.getElementById(scrollSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}, [location]);
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
      <div className=" relative max-w-[1400px] w-full  mx-auto pl-[15px] pr-[15px]">
      <Modal
  isOpen={PasswordRecovery}
  onRequestClose={() => setPasswordRecovery(false)}
  style={customStyles}
>
  <h1 className='text-[32px] mt-[40px] font-[600] text-center'>Recovery E-mail</h1>
  <input
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    type="text"
    placeholder='Recovery E-mail here'
    className='pl-[15px] outline-none border-[#dad7d7] border-solid border-[1px] rounded-[6px] h-[40px] w-[350px] mt-[40px] ml-[22px]'
  />
  <button onClick={handleSubmit} className='rounded-[10px] h-[40px] w-[200px] ml-[100px] bg-[#0156FF] text-[21px] text-[#ffff] font-[500] mt-[40px]'>Submit</button>
</Modal>

        <div className="flex pt-[21px]">
          {label.map((item, index) => (
            <p
              key={index + 'label'}
              className={`${item.extraClasses} text-[12px] font-[400] leading-[18px]`}
            >
              {item.title}
            </p>
          ))}
        </div>
        <h1 className="text-[32px] font-[600] leading-[48px] pt-[19px]">My Dashboard</h1>
        <div className='flex xsm:flex-col md:flex-row mt-[31px] gap-[81px] '>
        <div className='mx-auto max-w-[326px] w-full pb-[46px]'>
            <div className="max-w-[326px] w-full bg-[#F5F7FF] pt-[20px] pb-[6px] ">
              <ul>
                {dashboardLinks.map((item, index) => (
                    <div   key={index + 'a'} className={` flex flex-col  pb-[14px]`}>
                  <li
                    className={`pl-[17px]  ${dashboard === index ? 'text-[#000000] border-l-[3px] border-solid border-[#0156FF] font-[600]' : 'text-[#666666]'} cursor-pointer text-[15px] leading-[22px] font-[400]`}
                    onClick={() => handleDashboardClick(index)}
                  >
                    {item.a}
                  </li>
                 {item.a==='My Orders' || item.a==='My Wish List' ?( <div className={`${item.extraClasses}`}></div>):('')}
                  </div>
                ))}
              </ul>
            </div>
          <div id='compare' className='max-w-[326px] w-full bg-[#F5F7FF] mt-[7px] pb-[16px] text-center'>
           <h1 className='font-[700] text-[16px] leading-[24px] pt-[20px] pb-[20px]'>Compare Products</h1>
           <p className='font-[400] text-[13px] leading-[16px] pt-[10px] pb-[10px]'>You have no items to compare.</p>
          </div>
          <div id='wish' className='max-w-[326px] w-full bg-[#F5F7FF] mt-[7px] pb-[16px] text-center'>
           <h1 className='font-[700] text-[16px] leading-[24px] pt-[20px] pb-[20px]'>My Wish List</h1>
           <p className='font-[400] text-[13px] leading-[16px] pt-[10px] pb-[10px]'>You have no items in your wish list.</p>
          </div>
        </div>
        <div className='w-full  mx-auto'>
          <div >
          <h1 className='font-[700] text-[18px] leading-[26px] pb-[14px] border-b-[1px] border-solid border-[#CACDD8] mb-[17px]'>Account Information</h1>
         <div className='flex  md_3:gap-[117px]  xsm:gap-[10px]  xsm:flex-col md_3:flex-row'>
         {information_1.map((item , index)=>(
          <div key={index+'information'} className=' pb-[59px] justify-start'>
            <h1 className=' font-semibold text-[16px] leading-[20px] pb-[6px]'>{item.title}</h1>
            <p className='text-[16px] leading-[20px] font-[300] pb-[34px]'>{item.desc}</p>
            <div className='flex gap-[24px] text-[#0156FF] underline'>
              <p className='cursor-pointer'>Edit</p>
              <button className='cursor-pointer'  onClick={handlePasswordChange}>{item.link_2}</button>
            </div>
          </div>
          ))}
         </div>
          </div>
        <div>
        <div className=' pb-[14px] border-b-[1px] border-solid border-[#CACDD8] mb-[17px] flex gap-[18px] items-center '> <h1 className='font-[700] text-[18px] leading-[26px] '>Address Book</h1> <p className='text-[#0156FF] underline font-[300] text-[14px] leading-[20px]'>Menage Addresses</p></div> 
         <div className='flex  md_3:gap-[117px] xsm:gap-[10px]  xsm:flex-col md_3:flex-row'>
         {information_2.map((item , index)=>(
          <div key={index+'information_2'} className=' pb-[59px]'>
            <h1 className=' font-semibold text-[16px] leading-[20px] pb-[6px]'>{item.title}</h1>
            <p className='text-[16px] leading-[20px] font-[300] pb-[34px]'>{item.desc}</p>
            <div className='flex gap-[24px] text-[#0156FF] underline'>
              <p className='cursor-pointer'>{item.link}</p>
             
            </div>
          </div>
          ))}
         </div>
        </div>
       
        </div>
      </div>
      </div>

      
    </>
  );
};

export default UserAccount;

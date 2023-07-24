import React, { useState } from 'react';

const UserAccount = (props) => {
  const [dashboard, setDashboard] = useState(0);
  const label = [
    { title: 'Home ' },
    { title: '›', extraClasses: 'text-[#0156FF] pl-1 pr-1' },
    { title: 'My Dashboard' },
  ];
  const dashboardA = [
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
const information_1 =[
{title:'Contact Information',desc:<p  className='font-[300] text-[16px] leading-[20px]'>Alex Driver <br /> ExampeAdress@gmail.com</p>,link:'Edit', link_2:'Change Password'},
{title:'Newsletters',desc:<p  className='font-[300] text-[16px] leading-[20px]'>You don't subscribe to our <br/> newsletter.</p>,link:'Edit'}
];
const information_2 =[
  {title:'Default Billing Address',desc:<p  className='font-[300] text-[16px] leading-[20px]'>You have not set a default billing address.</p>,link:'Edit Address'},
  {title:'Default Shipping Address',desc:<p  className='font-[300] text-[16px] leading-[20px]'>You have not set a default shipping address.</p>,link:'Edit Address'}
  ];
  const handleDashboardClick = (index) => {
    setDashboard(index);
  };

  return (
    <>
      {props.Header}
      <div className="max-w-[1400px] w-full  mx-auto">
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
                {dashboardA.map((item, index) => (
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
          <div className='max-w-[326px] w-full bg-[#F5F7FF] mt-[7px] pb-[16px] text-center'>
           <h1 className='font-[700] text-[16px] leading-[24px] pt-[20px] pb-[20px]'>Compare Products</h1>
           <p className='font-[400] text-[13px] leading-[16px] pt-[10px] pb-[10px]'>You have no items to compare.</p>
          </div>
          <div className='max-w-[326px] w-full bg-[#F5F7FF] mt-[7px] pb-[16px] text-center'>
           <h1 className='font-[700] text-[16px] leading-[24px] pt-[20px] pb-[20px]'>My Wish List</h1>
           <p className='font-[400] text-[13px] leading-[16px] pt-[10px] pb-[10px]'>You have no items in your wish list.</p>
          </div>
        </div>
        <div className='w-full  mx-auto'>
          <div >
          <h1 className='font-[700] text-[18px] leading-[26px] pb-[14px] border-b-[1px] border-solid border-[#CACDD8] mb-[17px]'>Account Information</h1>
         <div className='flex  md_3:gap-[117px] xsm:gap-[10px]  xsm:flex-col md_3:flex-row'>
         {information_1.map((item , index)=>(
          <div key={index+'information'} className='mx-auto pb-[59px]'>
            <h1 className=' font-semibold text-[16px] leading-[20px] pb-[6px]'>{item.title}</h1>
            <p className='text-[16px] leading-[20px] font-[300] pb-[34px]'>{item.desc}</p>
            <div className='flex gap-[24px] text-[#0156FF] underline'>
              <p>{item.link}</p>
              <p>{item.link_2}</p>
            </div>
          </div>
          ))}
         </div>
          </div>
        <div>
        <div className=' pb-[14px] border-b-[1px] border-solid border-[#CACDD8] mb-[17px] flex gap-[18px] items-center '> <h1 className='font-[700] text-[18px] leading-[26px] '>Address Book</h1> <p className='text-[#0156FF] underline font-[300] text-[14px] leading-[20px]'>Menage Addresses</p></div> 
         <div className='flex  md_3:gap-[117px] xsm:gap-[10px]  xsm:flex-col md_3:flex-row'>
         {information_2.map((item , index)=>(
          <div key={index+'information_2'} className='mx-auto pb-[59px]'>
            <h1 className=' font-semibold text-[16px] leading-[20px] pb-[6px]'>{item.title}</h1>
            <p className='text-[16px] leading-[20px] font-[300] pb-[34px]'>{item.desc}</p>
            <div className='flex gap-[24px] text-[#0156FF] underline'>
              <p>{item.link}</p>
             
            </div>
          </div>
          ))}
         </div>
        </div>
       
        </div>
      </div>
      </div>
      {props.Footer}
      
    </>
  );
};

export default UserAccount;

import React ,{useRef , useState} from 'react'
import Location from '../img/location_2.svg'
import Time from '../img/time.svg'
import Email from '../img/mail.svg'
import Phone from '../img/phone.svg'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef()
  const inputRef = useRef()
    const label =[
        <p className='text-[#000000] text-[12px] leading[18px] font-normal'>Home</p>,
        <p className='text-[#0156FF] ml-1 mr-1'>›</p>,
        <p className='text-[#000000] text-[12px] leading[18px] font-normal'>Contact Us</p>
    ];  
    const inputs =[
        {label:"Your Name", placeholder:"Your Name", type:"text"  },
        {label:"Your Email", placeholder:"Your Name", type:"text",exteaClasses:"md_2:ml-[50px]"  } ,

    ];
    const aboutShop = [
     { image: Location, heading: "Address:", para : "1234 Street Adress City Address, 1234",},
     { image: Phone, heading: "Phone:", para : "(00)1234 5678",},
      {   image: Time, heading: 'We are open:', para: <p>Monday - Thursday: 9:00 AM - 5:30 PM Friday 9:00 AM - 6:00 PM <br/> Saturday: 11:00 AM - 5:00 PM</p> },
      {   image: Email,heading : "E-mail:", para: <a href="mailto:shop@email.com">shop@email.com</a> ,extraClasses:'text-[#0156FF]'}
        
]
const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_5e0s452', 'template_f42b529', form.current, '52fnrJAkBwj5yjjiH')
    .then((result) => {
      toast.success("Your message has been sent successfully");
      setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        console.log(result.text);
     
    }, (error) => {
      toast.error("Your message has not been sent successfully");
        console.log(error.text);
    });
};
  return (
    <>   
    <div className='max-w-[1400px] w-full flex-wrap mx-auto flex justify-between pl-[15px] pr-[15px]'>
    <div className='max-w-[925px] w-full pt-[21px] xsm:pb-[0px] xl:pb-[123px]'>
    <div className='flex items-center '>
            {label.map((item,index)=>(
                 
                <div key={index+'para'}>{item}</div>
                 
            ))}  </div>
              <h1 className='font-semibold text-[32px] leading-[48px]'>Contact Us</h1>
              <p className='font-light text-[16px] leading-[30px]'>We love hearing from you, our Shop customers.<br/>
Please contact us and we will make sure to get back to you as soon as we possibly can.</p>
 {/* <div className={`pl-[10px] max-w-[925px] w-full flex xsm:flex-col md_2:flex-row  xsm:gap-[0px]  md_2:gap-[50px] flex-wrap pt-[21px] `}>   {inputs.map((item,index)=>(<div key={index+'input'} className={``} >
 <label  className={`flex font-semibold text-[13px] leading-[27px] `}>{item.label} <p className='pl-1 text-[#C94D3F]' >*</p></label>
 <input type={item.type} placeholder={item.placeholder} className={``}  />

    </div>))}</div> */}
    {/* <label  className={``}>Your Phone </label>
    <input type='text' placeholder={'Your Phone'} className={`maxwidth_2 ml-[10px] placeholder:text-[#A2A6B0] placeholder:text-[14px] placeholder:font-light placeholder:leading-[20px] pl-[17px]  h-[50px] border-[1px] border-[#A2A6B0] border-solid outline-none rounded-[4px] `}  /> */}
    {/* <div className='max-w-[925px] w-full pt-[11px] pl-[10px] pr-[10px]'>
   
    <textarea ></textarea>
    </div> */}
    <form ref={form} onSubmit={sendEmail}>
    <div className='max-w-[925px] flex justify-between w-full '>
      <div>
      <label  className='flex  font-semibold text-[13px] leading-[27px] '>Your Name<p className='pl-1 text-[#C94D3F]' >*</p></label>
      <input      value={name}
          onChange={(e) => setName(e.target.value)} id='inputVal' className='block maxwidth_2 placeholder:text-[#A2A6B0] placeholder:text-[14px] placeholder:font-light placeholder:leading-[20px] pl-[17px]  h-[50px] border-[1px] border-[#A2A6B0] border-solid outline-none rounded-[4px] ' placeholder='Your Name' type="text" name="user_name" />
      </div>
      <div>
      <label className='flex font-semibold text-[13px] leading-[27px] '>Your Email<p className='pl-1 text-[#C94D3F]' >*</p></label>
      <input    value={email}
          onChange={(e) => setEmail(e.target.value)} id='inputVal' className='maxwidth_2 placeholder:text-[#A2A6B0] placeholder:text-[14px] placeholder:font-light placeholder:leading-[20px] pl-[17px]  h-[50px] border-[1px] border-[#A2A6B0] border-solid outline-none rounded-[4px] ' placeholder='Your Email' type="email" name="user_email" />
      </div>
      </div>
      <label className='flex font-semibold text-[13px] leading-[27px] '>Your Phone<p className='pl-1 text-[#C94D3F]' >*</p></label>
      <input value={phone}
          onChange={(e) => setPhone(e.target.value)} id='inputVal' className='maxwidth_2 placeholder:text-[#A2A6B0] placeholder:text-[14px] placeholder:font-light placeholder:leading-[20px] pl-[17px]  h-[50px] border-[1px] border-[#A2A6B0] border-solid outline-none rounded-[4px] ' placeholder='Your Number' type="number" name="user_number" min={0} max={9}/>
      <label  className='flex font-semibold text-[13px] leading-[27px]'>What’s on your mind? <p className='pl-1 text-[#C94D3F]' >*</p></label>
      <textarea    value={message}
          onChange={(e) => setMessage(e.target.value)} id='inputVal' name="message" className=' maxwidth w-full placeholder:text-[#A2A6B0] placeholder:text-[14px] placeholder:font-light placeholder:leading-[20px] border-[1px] border-[#A2A6B0] border-solid outline-none rounded-[4px] h-[236px] pt-3 pl-[17px]' placeholder='Jot us a note and we’ll get back to you as quickly as possible'/>
      {/* <input type="submit" value="Send" /> */}
    </form>
    <button onClick={sendEmail} className='text-[14px] leading-[21px] font-semibold bg-[#0156FF] rounded-[50px] text-[#ffffff] w-[151px] h-[50px] mt-[16px]'>Submit</button>
    </div>
  
    <div className='2xl:max-w-[401px] xl:max-w-[300px] mb-[50px] w-full bg-[#F5F7FF] max-h-[401px] xsm:mt-[20px] xl:mt-[121px] pt-[10px] pb-[74px] pl-[31px] xl:pr-[10px] 2xl:pr-[88px]'>
        {aboutShop.map((item , index)=>(
          <div key={index+'about'} className='flex pt-[19px]'>
            <img src={item.image} alt="" className='w-[25px] h-[25px]'/>
            <div className='pl-[10px]'>
                <h1 >{item.heading}</h1>
                <p className={` font-normal text-[13px] leading-[19px] pt-[5px] ${item.extraClasses}`}>{item.para}</p>
            </div>
          </div>
        ))}
    </div>
    </div>
    <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
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

export default ContactUs

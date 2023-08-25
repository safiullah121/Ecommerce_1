import React from 'react'
import { useState } from 'react';
import { supabase } from '../SupabaseClient';
import { useNavigate } from 'react-router-dom';

const PasswordRecovery = () => {
    const navigate = useNavigate()
    const [password, setpassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const handleSumit = async () =>{
    if (password == confirmPassword) {
        await supabase.auth.updateUser({ password: password})  
        navigate('/login')
        setconfirmPassword('')
        setpassword('')
    }
    else{
        alert('Passwords do not match')
    }
    }
  return (
    <div className='max-w-[1400px] w-full '>
       <div className='mx-auto mt-[30px] mb-[30px] max-w-[400px] w-full h-[400px] bg-[#ffffff] border-[#dad7d7] border-solid border-2  '>
          <h1 className='text-[32px] mt-[40px] font-[600] text-center'>Enter New Password</h1>
          <input value={password} onChange={(e)=>{setpassword(e.target.value)}} type="text" placeholder='Password' className='pl-[15px] outline-none border-[#dad7d7] border-solid border-[1px] rounded-[6px] h-[40px] w-[350px] mt-[40px] ml-[22px]' />
          <input value={confirmPassword} onChange={(e)=>{setconfirmPassword(e.target.value)}} type="text" placeholder='Confirm Password' className='pl-[15px] outline-none border-[#dad7d7] border-solid border-[1px] rounded-[6px] h-[40px] w-[350px] mt-[20px]  ml-[22px]' />
          <button onClick={handleSumit} className='rounded-[10px] h-[40px] w-[200px] ml-[100px] bg-[#0156FF] text-[21px] text-[#ffff] font-[500] mt-[40px]'>Submit</button>
        </div>
    </div>
  )
}

export default PasswordRecovery

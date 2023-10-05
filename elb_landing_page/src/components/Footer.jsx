import React from 'react'
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { BiLogoFacebook, BiLogoGmail} from 'react-icons/bi'

const Footer = () => (
  <footer className='w-full flex flex-col justify-center items-center my-10'>
      <div className='flex  w-1/4 justify-between '>
        <BiLogoFacebook size={20} className='cursor-pointer'/>
        <AiOutlineTwitter size={20} className='cursor-pointer'/>
        <AiOutlineInstagram size={20} className='cursor-pointer'/>
        <BiLogoGmail size={20} className='cursor-pointer'/>
      </div>
      <div className='w-full h-0.5 bg-dimWhite my-2'/>
      <p className='font-poppins font-normal text-[14px]'>© All Rights Reserved 2023</p>
      

    
  </footer>
)


export default Footer
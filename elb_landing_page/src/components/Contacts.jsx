import React from 'react'
import { FiMapPin, FiPhone, FiMail} from 'react-icons/fi'

const Contacts = () => (
  <section id='contact' className={`flex flex-col w-full justify-center items-center my-20`}>
    <h1 className={`mb-4 font-poppins font-bold sm:text-[45px] text-[24px] text-darkBlue`}>GET IN TOUCH</h1>
    <div className='flex md:flex-row flex-col sm:w-[700px] w-50 w-full justify-evenly bg-dimWhite py-4'>
        <div>
          <div className=' text-center font-poppins px-6 py-4'>
          <FiMail size={30} className="w-full mb-4"/>
            <h1 className="font-semibold mb-4 ">Email</h1>
            <p className='sm:text-base text-[14px]'>admin@alyusr.website</p>
            <p className='sm:text-base text-[14px]'>omar@alyusr.website</p>
            <p className='sm:text-base text-[14px]'>amash@alyusr.website</p>
          </div>
        </div>
      
        
        <div>
          <div className='md:w-40 font-poppins text-center px-6 py-4'>
          <FiMapPin size={30} className='w-full mb-4'/>
            <h1 className='font-semibold  mb-5'>Address</h1>
            <p className='sm:text-base text-[14px]'>1674 E.L. Bondoc Business Center. Dian St.Brgy. San. Isidro Makati City. 1234 Phils.</p>
          </div>
        </div>
        
       
        <div >
          <div className='text-center font-poppins px-6 py-4'>
            <FiPhone size={30} className='w-full mb-4'/>
            <h1 className='font-semibold mb-5'>Phone</h1>
            <p className='sm:text-base text-[14px]'>+63 2819 6021</p>
            <p className='sm:text-base text-[14px]'>+63 967 200 8591</p>
            <p className='sm:text-base text-[14px]'>+23-456-6588</p>
          </div>

        </div>
        
    </div>
   
    
  </section>
)

export default Contacts
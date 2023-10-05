import React from 'react'
import { services } from '../assets'
import styles, { layout } from '../style'

const Services = () => (
      <section id='services' className='bg-white w-auto my-10 flex md:flex-row flex-col items-center md:text-start text-center'>
        <img src={ services } alt="services" className='w-[700px]'/>
        <div className={`${styles.marginX}`}>
          <h1 className='font-bold sm:text-[45px] text-[24px] text-darkBlue2'>Services</h1>
          <p className='sm:text-[16px] text-[12px] text-black py-2 mb-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus at quaerat ducimus deserunt possimus aliquam repudiandae recusandae modi consequuntur eligendi. Incidunt iste voluptatum provident enim quis sint, quod aut recusandae delectus quas nesciunt culpa cum voluptas explicabo illum, exercitationem quasi commodi ipsa deleniti. Rerum, optio quo deserunt esse dolorem eos.</p>
        </div>
      </section>

  )



export default Services
import React from 'react'
import styles, { layout } from '../style'
import Button from './Button'
import Carousel from './Carousel'

const Hero = () => {
  return (
    <section id='home' className={`${layout.section}`} >
      <div className={`${styles.flexCenter} sm:flex-row flex-col sm:my-0 mt-10`}>
        <div className={`${layout.sectionInfo}`}>
          <h1 className='font-poppins font-bold sm:text-[40px] text-[32px] text-white'>Your OFW Journey <br className='md:hidden  sm:block'/>Begins Here </h1>
          <p className={`${styles.paragraph} max-w-[400px] pt-4 md:text-base text-[14px] md:leading-normal leading-tight text-dimWhite`}>With ELB International Services, your journey starts here. Please be sure to explore all our offers and choose the destination just right for your next job opportunity</p>
          <hr class="sm:w-60 w-[155px] mt-5 h-0.5 bg-gray border-0 rounded dark:bg-gray-700"/> 
          <div className='pt-4'>
            <Button />
          </div>
        </div>
        <div className={`${layout.sectionImg}`}>
          <Carousel />
        </div>
          
        
         
      </div>
      
    </section>
  )
}

export default Hero
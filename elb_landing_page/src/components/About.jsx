import React from 'react'
import styles from '../style'


const About = () => (
  <section className={`${styles.flexCenter} flex-col w-full h-[300px]`} id='about'> 
    <div className={`${styles.flexCenter} font-poppins text-center flex-col sm:max-w-[800px] max-w-[300px] md:leading-relaxed `}>
      <h1 className={`font-bold sm:text-[45px] text-[24px] text-darkBlue`}>About Us</h1>
      <p className='sm:text-[16px] text-[12px] py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sit ullam, architecto debitis illo exercitationem esse similique velit odio explicabo quae dicta quos ut porro iste. Aut ad ex omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo possimus obcaecati nemo aut consectetur ratione deleniti, quasi quisquam? Animi delectus voluptatibus sequi! Qui, molestias atque? Libero non quaerat quia dolorum!</p>

    </div>
  </section>
  
)

export default About


'use client';

import { Carousel } from 'flowbite-react';
import { france, saudi, kuwait, singapore } from '../assets'

export default function SlidingInterval() {
  return (
    <Carousel slideInterval={1500} className='sm:w-[500px] sm:h-[400px] w-[300px] h-[200px] sm:my-0 my-5'>
      <img
        className='rounded-[15px] h-[400px]'
        alt="france "
        src={ france }
      />
      <img
        className='rounded-[15px] h-[400px]'
        alt="kuwait"
        src={ saudi }
      />
      <img
        className='rounded-[15px] h-[400px]'
        alt="kuwait"
        src={ kuwait }
      />
      <img
        className='rounded-[15px] h-[400px]'
        alt="singapore"
        src={ singapore }
      />
    </Carousel>
  )
}

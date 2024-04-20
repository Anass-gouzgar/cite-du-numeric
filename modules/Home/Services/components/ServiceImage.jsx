import Image from 'next/image'
import React from 'react'
import service from '@/public/images/service.png'



const ServicesImage = () => {
  return (
    <div className='max-h-[900px] max-w-[400px]'>
      <Image
      src={service}
      width={900}
      height={900}
      alt="service Image"
      className="w-full h-full object-fill rounded-xl rounded-bl-[180px] "
      />
    </div>
  )
}

export default ServicesImage
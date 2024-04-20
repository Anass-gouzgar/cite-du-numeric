import React from 'react'
import Image from 'next/image'


const Card = ({img, title, description}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 ">
      <Image
        src={img}
        className="w-[30%] h-[50%] object-cover flex items-baseline "
        width={900}
        height={900}
        alt="Equipe Member"
      />
      <h1 className='text-white'>{title}</h1>
      <p className='text-white/80 text-center max-w-56'>{description}</p>
    </div>
  );
}

export default Card
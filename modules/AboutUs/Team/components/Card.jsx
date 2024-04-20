import React from 'react'
import Image from 'next/image'


const Card = ({img}) => {
  return (
    <div className="">
      <Image
        src={img}
        className="w-full h-full object-cover rounded-b-xl rounded-tl-xl rounded-tr-[30%]"
        width={900}
        height={900}
        alt="Equipe Member"
      />
    </div>
  );
}

export default Card
import React from 'react'
import { MdWifiCalling3 } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";



const Aside = () => {
  return (
    <div className="flex flex-col gap-10 h-full bg-white px-10 py-10 rounded-br-md rounded-tr-[23%]">
      <h1 className="text-xl">Coordonées</h1>
      {/* contact info */}
      <div className="flex flex-col gap-8 mt-7">
        <div className="flex gap-5">
          <MdWifiCalling3 className="size-4" />
          <p className="text-xs">+1012 3456 789</p>
        </div>
        <div className="flex gap-5">
          <MdEmail className="size-4" />

          <p className="text-xs">demo@gmail.com</p>
        </div>
        <div className="flex gap-4">
          <TiLocation className="size-5" />
          <p className="text-xs">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  );
}

export default Aside
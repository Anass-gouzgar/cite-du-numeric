import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/Logo/logo.svg";
import { ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";



// data
const menu = [
  {
    label: "Qui sommes-nous ?",
    navigateTo: "/AboutUs",
  },
  {
    label: "Programmes",
    navigateTo: "/",
  },
  {
    label: "Services",
    navigateTo: "/",
  },
  {
    label: "Entreprises",
    navigateTo: "/",
  }

];

const Sec_row = () => {
  return (
    <div className="flex space-x-56 px-28 py-5  ">
      <div className="flex flex-col items-center gap-y-2 ">
        <Image src={Logo} alt="logo" width={130} height={100} />
        <div className="flex gap-x-3 ">
          <Link href="">
            <BsInstagram
              className="text-Twilight-Azure hover:scale-150 duration-300"
              size={20}
            />
          </Link>
          <Link href="">
            <ImFacebook
              className="text-Twilight-Azure hover:scale-150 duration-300"
              size={20}
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-y-1 items-start">
        <p className="text-white font-bold mb-2  ">Menu</p>
        <ul className="flex flex-col items-start gap-y-1 text-white ">
          {menu?.map((item, key) => (
            <li key={key}>
              <Link
                href={item?.navigateTo}
                className="w-fit text-sm font-thin font-poppins relative before:content-[''] before:absolute before:-bottom-1 before:w-0 before:h-[1.5px] before:bg-white before:rounded-md hover:before:w-[60%] before:duration-300"
              >
                {item?.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col justify-centerg items-start mb-2 ">
        <p className="text-white font-bold mt-3">Contact</p>
      </div>
    </div>
  );
};

export default Sec_row;

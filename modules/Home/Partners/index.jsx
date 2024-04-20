"use client";
import Image from "next/image";

// Marquee
import Marquee from "react-fast-marquee";

// Logos
import Logo from "@/public/images/Logo/logo.svg";

export default function Partners() {
  return (
    <div className="w-full py-24">
      <Marquee speed={40}>
        {[Logo, Logo, Logo, Logo, Logo, Logo]?.map((item, key) => (
          <Image
            key={key}
            src={item}
            className="max-h-[100px] max-w-[200px] grayscale opacity-20 hover:grayscale-0 hover:opacity-100 duration-300 object-cover mx-16"
            alt="Logo"
          />
        ))}
      </Marquee>
    </div>
  );
}

"use client";
import { useState } from "react";
import Image from "next/image";
import profile from "@/public/images/profile.png";
import companyLogo from "@/public/images/company-logo.png";
import Card from "./Card.jsx";

// icons
import leftArrow from "@/public/images/left-arrow.png";
import rightArrow from "@/public/images/right-arrow.png";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const cardsData = [
  {
    name: "Adrien Rossignol ",
    description:
      "My team and I are strong believers that personalized videos are a powerful way to build trusted relationships with our customers, and Potion is helping us do exactly that.",
    profile: profile,
    role: "Sales & Marketing Director",
    company: "OVH",
    companyLogo: companyLogo,
  },
  {
    name: "Adrien Rossignol ",
    description:
      "My team and I are strong believers that personalized videos are a powerful way to build trusted relationships with our customers, and Potion is helping us do exactly that.",
    profile: profile,
    role: "Sales & Marketing Director",
    company: "OVH",
    companyLogo: companyLogo,
  },
  {
    name: "Adrien Rossignol ",
    description:
      "My team and I are strong believers that personalized videos are a powerful way to build trusted relationships with our customers, and Potion is helping us do exactly that.",
    profile: profile,
    role: "Sales & Marketing Director",
    company: "OVH",
    companyLogo: companyLogo,
  },
  {
    name: "Adrien Rossignol ",
    description:
      "My team and I are strong believers that personalized videos are a powerful way to build trusted relationships with our customers, and Potion is helping us do exactly that.",
    profile: profile,
    role: "Sales & Marketing Director",
    company: "OVH",
    companyLogo: companyLogo,
  },
  {
    name: "Adrien Rossignol ",
    description:
      "My team and I are strong believers that personalized videos are a powerful way to build trusted relationships with our customers, and Potion is helping us do exactly that.",
    profile: profile,
    role: "Sales & Marketing Director",
    company: "OVH",
    companyLogo: companyLogo,
  },
  {
    name: "Adrien Rossignol ",
    description:
      "My team and I are strong believers that personalized videos are a powerful way to build trusted relationships with our customers, and Potion is helping us do exactly that.",
    profile: profile,
    role: "Sales & Marketing Director",
    company: "OVH",
    companyLogo: companyLogo,
  },
  {
    name: "Adrien Rossignol ",
    description:
      "My team and I are strong believers that personalized videos are a powerful way to build trusted relationships with our customers, and Potion is helping us do exactly that.",
    profile: profile,
    role: "Sales & Marketing Director",
    company: "OVH",
    companyLogo: companyLogo,
  },
  {
    name: "Adrien Rossignol ",
    description:
      "My team and I are strong believers that personalized videos are a powerful way to build trusted relationships with our customers, and Potion is helping us do exactly that.",
    profile: profile,
    role: "Sales & Marketing Director",
    company: "OVH",
    companyLogo: companyLogo,
  },
  {
    name: "Adrien Rossignol ",
    description:
      "My team and I are strong believers that personalized videos are a powerful way to build trusted relationships with our customers, and Potion is helping us do exactly that.",
    profile: profile,
    role: "Sales & Marketing Director",
    company: "OVH",
    companyLogo: companyLogo,
  },
  {
    name: "Adrien Rossignol ",
    description:
      "My team and I are strong believers that personalized videos are a powerful way to build trusted relationships with our customers, and Potion is helping us do exactly that.",
    profile: profile,
    role: "Sales & Marketing Director",
    company: "OVH",
    companyLogo: companyLogo,
  },
];

const Index = () => {
  const [swiper, setSwiper] = useState(null);
  return (
    <div className="flex flex-col ">
      {/* <div className="w-fully max-w-[13c00px] z-10 minl-h-[700px]  "> */}
        {/* swiper */}
        <div className="w-full flex items-center gap-2 ">
          <Swiper
            spaceBetween={60}
            loop={true}
            className="h-[300px] rounded-lg "
            onSwiper={(swiper) => {
              setSwiper(swiper)
               console.log(swiper)}}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {cardsData.map((card, index) => (
              <SwiperSlide
                key={index}
                className="sm:min-w-[460px] max-w-[200px]"
              >
                <Card
                  name={card.name}
                  description={card.description}
                  profile={card.profile}
                  role={card.role}
                  company={card.company}
                  companyLogo={card.companyLogo}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* nav buttons */}
        <div className="flex h-16 justify-center gap-20 ">
          <button
            onClick={() => swiper.slidePrev()}
            type="button"
            className="border border-white min-w-[50px] min-h-[50px] size-[50px] flex justify-center items-center rounded-full hover:opacity-90 duration-300"
          >
            <Image src={leftArrow} className={`w-12`} alt="left arrow" />
          </button>
          <button
            onClick={() => swiper.slideNext()}
            type="button"
            className="border border-white min-w-[50px] min-h-[50px] size-[50px] flex justify-center items-center rounded-full hover:opacity-90 duration-300"
          >
            <Image src={rightArrow} className={`w-12`} alt="right arrow" />
          </button>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Index;

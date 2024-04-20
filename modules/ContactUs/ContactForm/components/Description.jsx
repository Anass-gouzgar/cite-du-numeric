import React from "react";

const Description = ({ description }) => {
  return (
    <div className="text-sm md:max-w-[430px] text-center text-white/80 w-full font-light leading-7 ">

      { description }
    </div>
  );
};

export default Description;

import React from "react";

const Description = ({ description }) => {
  return (
    <div className="text-sm text-white/90 max-w-[28%] mx-auto font-light leading-7">
      {description}
    </div>
  );
};

export default Description;

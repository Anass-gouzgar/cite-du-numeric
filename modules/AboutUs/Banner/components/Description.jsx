import React from "react";

const Description = ({ description }) => {
  return (
    <div className="text-sm md:max-w-[550px] text-white w-full font-light leading-7 whitespace-pre">
      {description.map((line, index) => (
        <React.Fragment key={index}>
          {line} <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Description;

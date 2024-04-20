import React from "react";
import Aside from "./Aside";
import Form from "./Form";


const Container = () => {
  return (
    <div className="flex flex-col md:flex md:flex-row justify-center items-center h-[380px] rounded-md  ">
      <Form />
      <Aside />
    </div>
  );
};

export default Container;

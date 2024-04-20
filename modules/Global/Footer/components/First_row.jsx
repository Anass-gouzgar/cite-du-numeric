import React from "react";
import Header from "./Header";
import Description from "./Description";
import Button from "./Button";


const FirstRow = () => {
  return (
    <div className="footerBg h-[300px] flex flex-col justify-center px-2">
      <div className="flex flex-col gap-y-4 items-center  ">
        <Header title="Rejoignez notre communauté" />
        <Description description="Restez à la pointe de l'entrepreneuriat ! Inscrivez-vous et recevez nos actualités, événements et conseils directement dans votre boîte de réception." />
        <Button />
      </div>
    </div>
  );
};

export default FirstRow;

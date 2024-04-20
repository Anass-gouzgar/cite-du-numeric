import Header from "@/modules/AboutUs/Banner/components/Header";
import Button from "@/modules/AboutUs/Banner/components/Button";
import Description from "@/modules/AboutUs/Banner/components/Description";
import React from "react";

const Banner = () => {
  return (
    <div className="AboutUsBg w-full max-w-[1400px] min-h-[500px] flex mx-auto sm:px-5 px-2 ">
      <div className="ml-32 mt-44 flex flex-col gap-y-6 w-[60%]">
        <Header header="Qui sommes-nous ?" />
        <Description
          description={[
            "Bienvenue à la Cité du Numérique : Votre Partenaire pour l'Innovation.",
            "Où les idées deviennent réalité.",
          ]}
        />
        <Button />
      </div>
    </div>
  );
};

export default Banner;

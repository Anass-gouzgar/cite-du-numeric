import Image from "next/image";

// components
import Header from "./Header";
import Description from "./Description";
import Button from "./Button";

// images
import business_img from "@/public/images/business.png";

export default function About() {
  return (
    <div className="w-full md:flex-row md:justify-between flex flex-col">
      <div className="max-w-[500px] text-white flex flex-col gap-8 py-5">
        <Header title="Qui sommes-nous ?" />
        <Description
          description="La Cité du Numérique est plus qu'un simple incubateur. C'est un écosystème
      dynamique dédié à soutenir les entrepreneurs passionnés. De la validation
      de votre idée à la mise en œuvre de votre vision, nous sommes là à chaque
      étape"
        />
        <Button />
      </div>
      <div className="h-[320px] min-w-[400px] w-[400px]">
        <Image
          src={business_img}
          className="w-full h-full object-cover rounded-t-xl rounded-br-xl rounded-bl-[40%]"
          width={900}
          height={900}
          alt="About Pic"
        />
      </div>
    </div>
  );
}

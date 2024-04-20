import Image from "next/image";

// components
import Header from "./Header";
import Description from "./Description";
import Button from "./Button";

// images
import work_img from "@/public/images/work.png";

export default function Programs() {
  return (
    <div className="w-full md:flex-row md:justify-between flex flex-col-reverse items-center">
      <div className="h-[500px] min-w-[400px] w-[400px]">
        <Image
          src={work_img}
          className="w-full h-full object-cover rounded-b-xl rounded-tl-xl rounded-tr-[30%]"
          width={900}
          height={900}
          alt="Program Pic"
        />
      </div>
      <div className="max-w-[500px] text-white flex flex-col gap-8 py-5">
        <Header title="Nos programmes d'accompagnement" />
        <Description
          description="La Cité du Numérique est plus qu'un simple incubateur. C'est un écosystème
      dynamique dédié à soutenir les entrepreneurs passionnés. De la validation
      de votre idée à la mise en œuvre de votre vision, nous sommes là à chaque
      étape"
        />
        <Button />
      </div>
    </div>
  );
}

import Image from "next/image";

// components
import Header from "./components/Header";
import Description from "./components/Description";
import Button from "./components/Button";
import work_img from "@/public/images/work.png";



export default function History() {
  return (
      <div className="w-full max-w-[1200px] md:flex-row md:justify-between flex flex-col-reverse items-center py-20">
        <div className="max-w-[500px] flex flex-col gap-8 py-5">
          <Header title="Notre histoire" />
          <Description description="Depuis notre création en [Année], la Cité du Numérique a évolué pour devenir un incubateur de premier plan, soutenant des centaines d'entreprises innovantes." />
          <Button />
        </div>
        <div className="h-[500px] min-w-[450px]">
          <Image
            src={work_img}
            className="w-full h-full object-cover rounded-b-xl rounded-tl-xl rounded-tr-[30%]"
            width={900}
            height={900}
            alt="Mission Image"
          />
        </div>
      </div>
  );
}

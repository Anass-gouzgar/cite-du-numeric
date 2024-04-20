import Image from 'next/image'
import Description from '@/modules/AboutUs/Mission/components/Description'
import Header from "@/modules/AboutUs/Mission/components/Header";

import img from "@/public/images/mission.webp"
const Mission = () => {
  return (
    <div className='flex flex-col gap-10 justify-center items-center py-24'>
      <Header header="Notre mission" />
      <Description description="À la Cité du Numérique, notre mission est d'accompagner les visionnaires dans la transformation de leurs idées innovantes en succès commerciaux. Nous offrons un soutien personnalisé, des ressources adaptées et un environnement propice à la croissance et à l'innovation." />
      <div>
        <Image src={img} alt="Mission" width={900} height={900} className="w-full object-cover" />
      </div>
    </div>
  );
}

export default Mission
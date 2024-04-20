// comonents
import Header from "./components/Header";
import Description from "./components/Description";
import Card from "./components/Card";

// card images
import Excellence from "@/public/images/Excellence.webp";
import Collaboration from "@/public/images/Collaboration.webp";
import Innovation from "@/public/images/Innovation.webp";
import Intégrité from "@/public/images/Intégrité.webp";


// card data
const cardData = [
  {
    img: Intégrité,
    title: "Intégrité",
    description: "Agir avec honnêteté et transparence.",
  },

  {
    img: Innovation,
    title: "Innovation",
    description: "Pousser les limites de la créativité.",
  },

  {
    img: Collaboration,
    title: "Collaboration",
    description: "Unir les talents pour créer ensemble.",
  },

  {
    img: Excellence,
    title: "Excellence",
    description: "Viser la qualité supérieure en tout.",
  },
];


const Values = () => {
  return (
    <div className="w-full max-w-[1200px] flex flex-col items-center py-20">
      <div className="max-w-[500px] flex flex-col items-center gap-8 py-5 ">
        <Header title="Nos valeurs" />
        <Description description="Nos valeurs - Intégrité, Innovation, Collaboration, Excellence, Engagement - sont le cœur de notre action." />
      </div>
      <div className="grid grid-cols-4 gap-8 py-10 ">
        {cardData.map((data, index) => (
          <Card
            img={data.img}
            title={data.title}
            description={data.description}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Values
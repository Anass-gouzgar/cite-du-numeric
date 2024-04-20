import React from "react";
import Card from "./Card";
import bgNews1 from "@/public/images/news-1.png";
import bgNews2 from "@/public/images/news-2.png";

const CardsContainer = () => {
  const cardsData = [
    {
      title: "Lorem ipsum dolor sit amet",
      Description: "Lorem ipsum dolor sit amet",
      bgImage: "news-1.png",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      Description: "Lorem ipsum dolor sit amet",
      bgImage: "news-2.png",
    },
  ];
  return (
    <div className="sm:flex sm:flex-row flex flex-col sm:space-x-10 justify-center max-w-[1200px] p-4">
      {cardsData.map((card, index) => (
           <Card key={index} title={card.title} description={card.Description} bgImage={card.bgImage} />
       
      ))}
    </div>
  );
};

export default CardsContainer;

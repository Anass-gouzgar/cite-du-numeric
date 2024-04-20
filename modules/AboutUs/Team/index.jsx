import team_member from "@/public/images/team.webp";
// components
import Header from "./components/Header";
import Description from "./components/Description";
import Card from "./components/Card";

// card data

const cardData = [
  {
    img:  team_member ,
  },
  {
    img:  team_member ,
  },
  {
    img:  team_member ,
  },
  {
    img:  team_member ,
  },
  {
    img:  team_member ,
  },
  {
    img:  team_member ,
  },
  {
    img:  team_member ,
  },
  {
    img:  team_member ,
  }
];

export default function Team() {
  return (
    <div className="w-full max-w-[1200px] flex flex-col items-center py-20">
      <div className="max-w-[500px] flex flex-col items-center gap-8 py-5 ">
        <Header title="Notre équipe" />
        <Description description="Notre équipe est notre plus grande force, composée de mentors, conseillers, et créatifs passionnés." />
      </div>
      <div className="grid grid-cols-4 gap-8 py-10 ">
        {cardData.map((card, index) => (
          <Card img={card.img} key={index} />
        ))}
      </div>
    </div>
  );
}

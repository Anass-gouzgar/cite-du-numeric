import Description from "./components/Description";
import Header from "./components/Header";
import Slide from "./components/Slide";

const Testimonials = function () {
  return (
    <div className="w-[100%] flex flex-col gap-10 text-white text-center px-2 py-10">
      <Header header="Témoignages" />
      <Description description="Découvrez les histoires inspirantes de nos entrepreneurs et comment CDN a joué un rôle clé dans leur succès." />
      <div className=" ">
        <Slide />
      </div>
    </div>
  );
};

export default Testimonials;

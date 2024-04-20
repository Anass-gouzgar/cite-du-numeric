import Header from "@/modules/AboutUs/Banner/components/Header";
import Description from "@/modules/AboutUs/Banner/components/Description";

const Banner = () => {
  return (
    <div className="ContactUsBg w-full max-w-[1400px] min-h-[500px] flex mx-auto sm:px-5 px-2 ">
      <div className="ml-32 mt-44 flex flex-col gap-y-6 w-[60%]">
        <Header header="Contactez-nous" />
        <Description
          description={[
            "Cité du Numérique : Là où les Idées Prennent Vie.",
            "Votre partenaire pour l'innovation et le succès entrepreneurial.",
          ]}
        />
      </div>
    </div>
  );
};

export default Banner;

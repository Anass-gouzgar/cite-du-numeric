// components
import Header from "./components/Header";
import Description from "./components/Description";
import ServicesContainer from "./components/ServicesContainer";

export default function Services() {
  return (
    <div className="w-full max-w-[1200px] sm:px-5 px-2 py-10">
      <div className="flex flex-col items-center gap-7">
        <Header />
        <Description />
        <ServicesContainer />
      </div>
    </div>
  );
}

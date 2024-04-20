import ServiceImage from "./ServiceImage";
import ServicesList from "./ServicesList";

export default function ServicesContainer() {
  return (
    <div className="w-full max-w-[1200px] flex justify-between gap-10 sm:px-5 px-2 py-10">
    <ServicesList />
    <ServiceImage />
  </div>
  
)
}

// components
import About from "./components/About";
import Programs from "./components/Programs";

export default function AboutUs() {
  return (
    <div className="w-full max-w-[1200px] flex flex-col gap-10 sm:px-5 px-2 py-10">
      <About />
      <Programs />
    </div>
  );
}

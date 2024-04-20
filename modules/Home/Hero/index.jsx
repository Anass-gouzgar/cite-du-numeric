// components
import Header from "./components/Header";
import Description from "./components/Description";
import Buttons from "./components/Buttons";
import CountUp from "./components/CountUp";
import Video from "./components/Video";

export default function Hero() {
  return (
    <div className="w-full max-w-[1400px] h-screen min-h-[700px] max-h-[750px] flex justify-between items-center sm:px-5 px-2">
      <div className="flex flex-col gap-20 -mb-32">
        <div className="flex flex-col gap-10">
          <Header />
          <Description />
          <Buttons />
        </div>
        <CountUp />
      </div>
      <Video />
    </div>
  );
}

import Sec_row from "./components/Sec_row";
import First_row from "./components/First_row";
import Copyrights from "./components/Copyrights";

export default function Footer() {
  return (
    <div className="text-white text-center ">
      <First_row />
      <Sec_row />
      <Copyrights />

    </div>
  );
}

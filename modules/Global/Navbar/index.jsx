// components
import Logo from "./components/Logo";
import Menu from "./components/Menu";

export default function Navbar() {
  return (
    <header className="w-full flex justify-center items-center absolute left-0 right-0 top-10 z-50">
      <div className="w-full max-w-[1400px] flex justify-between items-center sm:px-5 px-2">
        <Logo />
        <Menu />
      </div>
    </header>
  );
}

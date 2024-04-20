import Link from "next/link";
import Image from "next/image";

// Logo
import LogoSVG from "@/public/images/Logo/logo.svg";

export default function Logo() {
  return (
    <Link href="/">
      <Image src={LogoSVG} className="h-[50px]" alt="Logo" />
    </Link>
  );
}

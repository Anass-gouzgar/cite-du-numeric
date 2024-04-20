import Link from "next/link";

// data
const menu = [
  {
    label: "Qui sommes-nous ?",
    navigateTo: "/AboutUs",
  },
  {
    label: "Programmes",
    navigateTo: "/",
  },
  {
    label: "Services",
    navigateTo: "/",
  },
  {
    label: "Entreprises",
    navigateTo: "/",
  },
  {
    label: "Contact",
    navigateTo: "/Contact",
  },
];

export default function Menu() {
  return (
    <nav>
      <ul className="hidden lg:flex items-center text-white space-x-16">
        {menu?.map((item, key) => (
          <li key={key}>
            <Link
              href={item?.navigateTo}
              className="w-fit text-sm relative before:content-[''] before:absolute before:-bottom-1 before:w-0 before:h-[1.5px] before:bg-white before:rounded-md hover:before:w-[60%] before:duration-300"
            >
              {item?.label}
            </Link>
          </li>
        ))}
      </ul>

      <button className="lg:hidden block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </button>
    </nav>
  );
}

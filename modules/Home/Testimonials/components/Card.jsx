import Image from "next/image";

const Card = ({ name, description, profile, role, company, companyLogo  }) => {
  return (
    <div className=" mx-auto rounded-[50px] w-full h-auto bg-white py-2 text-center  ">
      <div className="mx-auto flex h-20 w-20 border-4 border-white items-center justify-center rounded-full ">
        <Image
          src={profile}
          alt="Profile"
          className=" rounded-full w-full h-full"
        />
      </div>

      <p className="px-4 text-sm text-center font-medium text-black">
        {description}
      </p>
      <h1 className="text-sm mb-3 text-black">
        {name},
        <span className="text-xs text-black/50">
          {role}, {company}
        </span>
      </h1>
      <div className="flefx justify-ceenter mx-auto w-10 h-8 bg-yellow-n400">
        <Image
          src={companyLogo}
          alt="company logo"
          className=" object-covefr w-full h-full"
        />
      </div>
    </div>
  );
};

export default Card;

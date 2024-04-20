import Button from "./Button";

const Card = ({ title, description, bgImage }) => {
  return (
    <div className="group relative flex flex-col gap-y-2 z-50 rounded-4xl justify-center items-center mt-8 w-[430px] h-[400px] p-6">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-3xl transition-opacity opacity-40 duration-300 group-hover:opacity-100"
        style={{
          backgroundImage: `url(/images/${bgImage})`,
          zIndex: -1,
        }}
      />
      <div className="relative z-10 flex flex-col items-center ">
        <p className="pt-20 text-white/70 group-hover:text-white text-lg">
          {title}
        </p>
        <p className="text-white/70 group-hover:text-white text-sm pb-6 ">
          {description}
        </p>
        <Button />
      </div>
    </div>
  );
};

export default Card;

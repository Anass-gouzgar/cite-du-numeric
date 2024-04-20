export default function CountUp() {
  return (
    <ul className="w-fit flex items-center space-x-20">
      {["25,300", "56", "300+"]?.map((item, key) => (
        <li key={key} className="flex flex-col items-center text-white">
          <span className="text-2xl relative">
            <div
              className={`absolute -top-[7px] -left-[9px] size-5 rotate-[50deg] ${
                key % 3 === 0
                  ? "bg-Calm-Azure"
                  : key % 3 === 1
                  ? "bg-Twilight-Azure"
                  : "bg-Skyline-Azure"
              } `}
              style={{ clipPath: "circle(50% at 100% 50%)" }}
            />
            <span className="relative z-10">{item}</span>
          </span>
          <p className="font-light text-sm">Lorem Ipsum</p>
        </li>
      ))}
    </ul>
  );
}

export default function ServicesList() {
    const servicesList = [
      {
        id: "01",
        title: "Création de site web",
      },
      {
        id: "02",
        title: "Design professionnel",
      },
      {
        id: "03",
        title: "Étude de marché approfondie",
      },
      {
        id: "04",
        title: "Lounge café & espace événementiel",
      },
      {
        id: "05",
        title: "Studios pour podcasts & clips",
      },
      {
        id: "06",
        title: "Domiciliation d'entreprise",
      },
    ]; 


  return (
    <ul className="w-[300px] flex flex-col items-start space-y-4">
      {servicesList?.map((item, key) => (
        <li key={key} className="flex flex-col text-white ">
          <span className={`relative ${key !== servicesList.length - 1 ? 'mb-14' : ''}`}>
            <div
              className={`absolute -top-[16px] -left-[18px] size-8 rotate-[50deg] ${
                key % 3 === 0
                  ? "bg-Calm-Azure"
                  : key % 3 === 1
                  ? "bg-Twilight-Azure"
                  : "bg-Skyline-Azure"
              } `}
              style={{ clipPath: "circle(50% at 100% 50%)" }}
            />
            <p className="relative z-10 font-semibold text-4xl">{item.id}</p>
            <p className="font-light text-xl max-w-[100px}">{item.title}</p>
          </span>
        </li>
      ))}
    </ul>
  );
}

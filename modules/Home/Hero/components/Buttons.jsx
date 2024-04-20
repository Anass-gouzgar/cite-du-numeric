export default function Buttons() {
  return (
    <div className="flex flex-row flexg flex-colg gap-x-6 md:gap-10">
      <button className="md:w-[200px] w-[150px] h-[50px] bg-Calm-Azure border-2 border-solid border-Calm-Azure rounded-br-4xl rounded-bl-[4px] rounded-tl-4xl rounded-tr-[4px] text-sm text-white hover:bg-transparent hover:text-Calm-Azure duration-300">
        En savoir plus
      </button>

      <button className="md:w-[200px] w-[150px] h-[50px] bg-transparent border-2 border-solid border-Calm-Azure rounded-br-4xl rounded-bl-[4px] rounded-tl-4xl rounded-tr-[4px] text-sm text-Calm-Azure hover:bg-Calm-Azure hover:text-white duration-300">
        Contact
      </button>
    </div>
  );
}

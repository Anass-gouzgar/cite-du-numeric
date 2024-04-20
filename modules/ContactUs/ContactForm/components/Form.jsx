import React from "react";

const Form = () => {
  return (
    <main className="flex justify-center py-5 px-8 sm:px-12 lg:col-span-7 lg:px-6 h-[380px] xl:col-span-6 rounded-tl-md rounded-bl-md bg-Twilight-Azure">
      <div className="max-w-xl lg:max-w-xl">
        <form action="#" className="grid grid-cols-6 gap-6 mb-[-10]">
          <div className="col-span-6 sm:col-span-3 ">
            <label
              htmlFor="FirstName"
              className="block text-sm font-medium text-white/80"
            >
              Prénom
            </label>

            <input
              type="text"
              id="Prénom"
              name="Prénom"
              className="mt-1 w-full  text-sm text-white shadow-sm bg-transparent border-b-2 ring-0 outline-none"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label className="block text-sm font-medium text-white/80">
              Nom
            </label>

            <input
              type="text"
              id="Nom"
              name="Nom"
              className="mt-1 w-full text-sm text-white bg-transparent border-b-2 ring-0 outline-none"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label className="block text-sm font-medium text-white/80 ">
              Email
            </label>

            <input
              type="Email"
              id="Email"
              name="Email"
              className="mt-1 w-full  text-sm bg-transparent border-b-2 ring-0 outline-none"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label className="block text-sm font-medium text-white/80">
              Téléphone
            </label>

            <input
              type="text"
              id="Téléphone"
              name="Téléphone"
              className="mt-1 w-full  text-sm bg-transparent border-b-2 ring-0 outline-none"
            />
          </div>
          <div className="col-span-6">
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-white/80"
            >
              Message
            </label>

            <textarea
              id="text"
              name="text"
              className="mt-1 w-full text-sm bg-transparent border-b-2 ring-0 outline-none"
            />
          </div>

          <div className="col-span-6">
            <label className="flex gap-4">
              <input
                type="checkbox"
                id="réglementation "
                name="réglementation "
                className="size-5 shadow-sm"
              />

              <span className="text-xs text-white/80">
                Je certifie avec pris connaissance des réglementation concernant
                la gestion des données personnelles décrite ici.
              </span>
            </label>
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4 justify-center">
            <button className="text-center w-[200px] h-[40px] bg-Calm-Azure border-2 border-solid border-Calm-Azure rounded-br-4xl rounded-bl-[4px] rounded-tl-4xl rounded-tr-[4px] text-sm text-white hover:bg-transparent hover:text-Calm-Azure duration-300">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Form;

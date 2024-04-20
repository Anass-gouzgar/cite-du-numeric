import dynamic from "next/dynamic";

// Modules
const Banner = dynamic(() => import("@/modules/AboutUs/Banner"), {
    loading: () => <div></div>,
  }),
  Mission = dynamic(() => import("@/modules/AboutUs/Mission"), {
    loading: () => <div></div>,
  }),
  History = dynamic(() => import("@/modules/AboutUs/History"), {
    loading: () => <div></div>,
  }),
  Team = dynamic(() => import("@/modules/AboutUs/Team"), {
    loading: () => <div></div>,
  }),
  Values = dynamic(() => import("@/modules/AboutUs/Values"), {
    loading: () => <div></div>,
  }),
  Successes = dynamic(() => import("@/modules/AboutUs/Successes"), {
    loading: () => <div></div>,
  });

export default function AboutUs() {
  return (
    <main className="w-full flex flex-col items-center">
      <Banner />
      <Mission />
      <History />
      <Team />
      <Values />
      <Successes /> 
    </main>
  );
}

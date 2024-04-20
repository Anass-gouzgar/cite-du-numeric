import dynamic from "next/dynamic";

// Modules
const Hero = dynamic(() => import("@/modules/Home/Hero"), {
    loading: () => <div></div>,
  }),
  Partners = dynamic(() => import("@/modules/Home/Partners"), {
    loading: () => <div></div>,
  }),
  AboutUs = dynamic(() => import("@/modules/Home/AboutUs"), {
    loading: () => <div></div>,
  }),
  Services = dynamic(() => import("@/modules/Home/Services"), {
    loading: () => <div></div>,
  }),
  Testimonials = dynamic(() => import("@/modules/Home/Testimonials"), {
    loading: () => <div></div>,
  }),
  News = dynamic(() => import("@/modules/Home/News"), {
    loading: () => <div></div>,
  });

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <Hero />
      <Partners />
      <AboutUs />
      <Services />
      <Testimonials />
      <News />
    </main>
  );
}

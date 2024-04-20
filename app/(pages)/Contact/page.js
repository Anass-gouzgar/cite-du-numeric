import dynamic from "next/dynamic";

// Modules
const Banner = dynamic(() => import("@/modules/ContactUs/Banner"), {
    loading: () => <div></div>,
  }),
  ContactUs = dynamic(() => import("@/modules/ContactUs/Contactform"), {
    loading: () => <div></div>,
  });

export default function Contact() {
  return (
    <main className="w-full flex flex-col items-center">
      <Banner />
      <ContactUs />

    </main>
  );
}

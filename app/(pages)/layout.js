// components
import Navbar from "@/modules/Global/Navbar";
import Footer from "@/modules/Global/Footer";

export default function RootLayout({ children }) {
  return (
    <div className="w-full h-auto min-h-screen bg-Midnight-Slate relative">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

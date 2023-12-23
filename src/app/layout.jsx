import Footer from "@/components/Landing/Footer";
import Navbar from "@/components/Nav/Navbar";
import "./globals.css";

export const metadata = {
  title: "INSEES Official",
  description: "Build by INSEES",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

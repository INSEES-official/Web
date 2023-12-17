import "./globals.css";
import Navbar from "@/components/Nav/Navbar";

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
      </body>
    </html>
  );
}

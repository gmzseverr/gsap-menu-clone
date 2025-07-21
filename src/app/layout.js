import Navbar from "@/components/Navbar";
import "./globals.css";
import Hero from "@/components/Hero";
import Coktails from "@/components/Coktails";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Navbar />
        <Hero />
        <Coktails />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

// COMPONENTS IMPORT
import StarsCanvas from "@/components/main/StarBackground";
import NavBar from "@/components/main/NavBar";

const fontNunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Ali Shariatian | Front-end Developer",
   description: "Ali Shariatian, a front-end developer blog",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={`${fontNunito.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
            <StarsCanvas />
            <NavBar />
            {children}
         </body>
      </html>
   );
}

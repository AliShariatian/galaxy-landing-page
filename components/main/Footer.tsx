import { FooterNavBarSocials } from "@/constants";
import Social from "./Social";
import Link from "next/link";

function Footer() {
   return (
      <footer className="w-full flex flex-col h-96 z-20">
         <div className="flex-1"></div>
         <div className="h-20 flex flex-col justify-start items-center gap-9 mb-12">
            <div className="w-full flex justify-center items-center gap-6">
               <Social socials={FooterNavBarSocials} />
            </div>
            <div className="flex">
               <p className="text-gray-200 flex">
                  Develope with <img src="/img/heart.svg" alt="heart" className="mx-2 drop-shadow-lg" /> by
               </p>
               <Link href="/">
                  <h2 className="ml-2 underline decoration-wavy decoration-purple-500 text-white">Ali Shariatian</h2>
               </Link>
            </div>
         </div>
      </footer>
   );
}

export default Footer;

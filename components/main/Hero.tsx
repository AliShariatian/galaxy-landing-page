import HeroContent from "../sub/HeroContent";

function Hero() {
   return (
      <div className="relative flex flex-col h-full w-full">
         <video autoPlay muted loop className="hidden sm:block absolute sm:top-[-250px] lg:top-[-315px] xl:top-[-340px] 2xl:top-[-360px] inset-x-0 mx-auto w-[1500px] h-full object-cover rotate-180 z-[1]">
            <source src="/video/blackhole.webm" type="video/webm" />
         </video>
         <HeroContent />
      </div>
   );
}

export default Hero;

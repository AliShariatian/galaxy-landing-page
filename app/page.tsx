import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";
import Footer from "@/components/main/Footer";

function HomePage() {
   return (
      <main className="size-full">
         <div className="flex flex-col gap-20">
            <Hero />
            <Skills />
            <Projects />
            <Footer />
         </div>
      </main>
   );
}

export default HomePage;

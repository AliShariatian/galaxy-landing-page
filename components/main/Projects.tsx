import ProjectCard from "../sub/ProjectCard";

function Projects() {
   return (
      <section id="projects" className="flex flex-col items-center justify-center py-0 md:py-20 z-20">
         <h4 className="font-extrabold text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">My Projects</h4>
         <div className="size-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
            <ProjectCard
               link="/"
               src="/img/Personal-portfolio.jpg"
               title="Personal Portfolio"
               description="Personal Portfolio for write blog and show projects."
               skills={["React JS", "Next JS", "Tailwind CSS", "Framer Motion"]}
            />
         </div>
      </section>
   );
}

export default Projects;

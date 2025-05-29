const ProjectCard = ({ title, description, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg
              border border-white/10 transition-all duration-300
              hover:scale-[1.02] hover:shadow-blue-500/20"
  >
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </a>
);

export const Projects = ({ sectionRef }) => {
  return (
    <section ref={sectionRef} className="bg-gray-950 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Netflix Clone"
            description="A web application with REACT, NODE, EXPRESS, MONGODB, MONGOOSE"
            link="https://netflix-frontend-inky.vercel.app/"
          />
          <ProjectCard
            title="E-commerce Site"
            description="A web application with REACT, TAILWIND, VANILLA CSS, NODE, EXPRESS, MONGODB, MONGOOSE"
            link="https://my-shop-client-sage.vercel.app/"
          />
          <ProjectCard
            title="Brain Tumor Detection System"
            description="A web application with HTML, CSS, PYTHON, DJANGO, MYSQL"
            link="https://github.com/krishnagautam11/BrainTumorDetectionSystem" // Replace with actual deployed link if available
          />
        </div>
      </div>
    </section>
  );
};

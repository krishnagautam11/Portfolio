
import { Rocket, Code2, Laptop2, Projector } from 'lucide-react';

const ServiceCard = ({ title, description, icon }) => (
  <div
    className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg
              border border-white/10 transition-all duration-300
              hover:scale-[1.02] hover:shadow-blue-500/20
              flex flex-col items-start gap-4"
  >
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

export const Services = ({ sectionRef }) => {
  return (
    <section ref={sectionRef} className="bg-gray-950 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          My Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Frontend Development"
            description="I build responsive and user-friendly websites using HTML, CSS, JavaScript, and React."
            icon={<Code2 size={24} />}
          />
          <ServiceCard
            title="Backend Development"
            description="I create robust and scalable APIs using Node.js, Express.js, and databases like MongoDB and MySQL."
            icon={<Laptop2 size={24} />}
          />
          <ServiceCard
            title="Full Stack Development"
            description="I offer end-to-end solutions, combining my frontend and backend skills to deliver complete web applications."
            icon={<Rocket size={24} />}
          />
        </div>
      </div>
    </section>
  );
};
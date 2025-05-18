export const HeroSection = ({ sectionRef, scrollToProjects }) => {
  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4
                            bg-clip-text text-transparent
                            bg-gradient-to-r from-blue-400 to-purple-400">
          Hi, I'm Krishna
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          I'm a MERN Stack Developer passionate about creating
          innovative and visually stunning web experiences.
        </p>
        <button
          onClick={scrollToProjects}
          className="bg-gradient-to-r from-blue-500 to-purple-500
                            text-white px-8 py-3 rounded-full shadow-lg
                            hover:shadow-blue-500/50 hover:scale-105
                            transition-all duration-300 font-semibold
                            text-lg cursor-pointer"
        >
          Explore My Work
        </button>
      </div>
      <div className="absolute inset-0 bg-grid-gray-900/[0.05] opacity-50 pointer-events-none"></div>

    </section>
  );
};
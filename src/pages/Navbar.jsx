export const Navbar = ({ scrollToSection }) => {
  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Portfolio
        </div>
        <div className="flex gap-6">
          <button
            onClick={() => scrollToSection('home')}
            className="text-gray-300 hover:text-white transition-colors duration-300
                       border-b-2 border-transparent hover:border-blue-500
                       px-2 py-1 rounded-md cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-gray-300 hover:text-white transition-colors duration-300
                       border-b-2 border-transparent hover:border-blue-500
                       px-2 py-1 rounded-md cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-gray-300 hover:text-white transition-colors duration-300
                       border-b-2 border-transparent hover:border-blue-500
                       px-2 py-1 rounded-md cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-300 hover:text-white transition-colors duration-300
                       border-b-2 border-transparent hover:border-blue-500
                       px-2 py-1 rounded-md cursor-pointer"
          >
            About Me
          </button>
        </div>
      </div>
    </nav>
  );
};
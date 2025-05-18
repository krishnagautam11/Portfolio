import React, { useRef } from 'react';


import { Projects } from './pages/Projects';
import { Navbar } from './pages/Navbar';
import {HeroSection} from './pages/HeroSection';
import { Services } from './pages/Services';
import { About } from './pages/About';

function App() {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null); // Ref for projects section
  const aboutRef = useRef(null);

  const scrollToSection = (section) => {
    let ref;
    switch (section) {
      case 'home':
        ref = homeRef;
        break;
      case 'services':
        ref = servicesRef;
        break;
      case 'projects': // Handle 'projects' case
        ref = projectsRef;
        break;
      case 'about':
        ref = aboutRef;
        break;
      default:
        ref = homeRef;
    }
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
      scrollToSection('projects');
  }

  return (
    <div className="bg-gray-950">
      <Navbar scrollToSection={scrollToSection} />
      <HeroSection sectionRef={homeRef} scrollToProjects={scrollToProjects}/>
      <Services sectionRef={servicesRef} />
      <Projects sectionRef={projectsRef} />
      <About sectionRef={aboutRef} />
      {/* You'll add other sections here */}
    </div>
  );
}

export default App;
export const About = ({ sectionRef }) => {
  return (
    <section ref={sectionRef} className="bg-gray-950 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          About Me
        </h2>


        <div className="grid md:grid-cols-2 gap-12 items-start">

          <div>

            <h3 className="text-2xl font-semibold text-blue-400 mb-6">My Journey</h3>
            <p className="text-gray-300 leading-relaxed w-160">
              Hello! I'm Krishna, a MERN stack developer with a passion
              for creating dynamic and engaging web applications. I graduated
              with first-class distinction from Parul University with a CGPA of
              7.91. My journey in web development has been driven by a desire
              to learn and build things that make a difference.
            </p>
            <p className="text-gray-300 mt-4 leading-relaxed w-160">
              My education began with CBSE schooling in Lunavada, followed by high school under the Gujarat Secondary and Higher Secondary Education Board (GSHSEB) curriculum at Achievers Gandhinagar.
               Throughout this journey, my passion for technology has remained constant.
            </p>


            <div className="mt-19">
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">Work Experience</h3>
              <div className="text-gray-300 space-y-6">
                <div>
                  <h4 className="text-white font-semibold">Web Developer Intern - Lets Grow More</h4>
                  <p className="text-sm text-gray-400">Remote | June 2022 - July 2022</p>
                  <ul className="list-disc list-inside">
                    <li>Completed virtual Web Development Internship</li>
                    <li>Served as Web Developer Intern</li>
                    <li>Contributed to five impactful projects</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold">Web Developer Intern - Oasis Infobyte</h4>
                  <p className="text-sm text-gray-400">Remote | May 2022 - June 2022</p>
                  <ul className="list-disc list-inside">
                    <li>Completed virtual Web Development Internship</li>
                    <li>Functioned as a pivotal Web Developer Intern</li>
                    <li>Executed three sophisticated web projects independently</li>
                    <li>Demonstrated problem-solving, innovation, and project excellence</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold">Web Developer Intern (Bootstrap) - Suven Consultants</h4>
                  <p className="text-sm text-gray-400">Remote | April 2022 - May 2022</p>
                  <ul className="list-disc list-inside">
                    <li>Completed 4-week online UI/UX (Bootstrap) Coding Internship</li>
                    <li>Invested 140 hours in the program</li>
                    <li>Developed six projects using the Bootstrap framework</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-5">My Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold text-white">Frontend</h4>
                <ul className="list-disc list-inside text-gray-300">
                  <li>HTML</li>
                  <li>CSS (Vanilla, Tailwind)</li>
                  <li>JavaScript</li>
                  <li>React</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white">Backend</h4>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                  <li>MySQL</li>
                </ul>
              </div>
            </div>


            <div className="mb-15 mt-15">
              <h3 className="text-xl font-semibold text-blue-400 mb-5">Resume</h3>
              <a
                href="/resume.pdf"
                download
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition duration-300"
              >
                Download My Resume
              </a>
            </div>


            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Contact Me</h3>
              <ul className="text-gray-300 space-y-1">
                <li>Email: krishnagautam.work@gmail.com</li>
                <li>LinkedIn: https://www.linkedin.com/in/krishna-gautam-69a75219b</li>
                <li>GitHub: https://github.com/krishnagautam11</li>
                <li>Phone: +91 6354465803</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

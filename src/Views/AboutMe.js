import React, {useState} from 'react';
import { Fade } from "react-awesome-reveal";

const AboutMe= () => {
  const [currentProject, setCurrentProject] = useState(0);

  const aboutMe = [
    {
      title: 'Fitness Enthusiast 🏋️‍♂️🌟',
      description:
        "Beyond the keyboard, you'll often find me at the gym or outdoors, pushing my physical limits. Fitness isn't just about reps and sets—it's a mindset. Just as I optimize algorithms, I optimize my workouts, seeking that perfect balance between strength, endurance, and flexibility.",
    },
    {
      title: 'My Loyal Canine Companion 🐾🐶',
      description:
        "Meet my faithful sidekick: a four-legged furball with boundless energy and unwavering loyalty. My pet dog (Tofik) is my daily dose of joy. Whether we're exploring trails, playing fetch, or simply cuddling on the couch, Tofik reminds me to appreciate life's simple pleasures.",
    },
    {
      title: "Gaming enthusiast 🎮🕹️",
      description:'When the code compiles and the tests pass, I switch gears. Video games transport me to fantastical realms where I battle dragons, solve puzzles, and forge alliances. From retro classics to cutting-edge RPGs, gaming fuels my imagination and provides a well-deserved escape.'
    },
    {
      title: "Culinary Explorer 🍽️🌟",
      description:"Beyond the lines of code, I embark on culinary adventures. From savoring street food in bustling markets to experimenting with exotic spices in my kitchen, food is my passport to diverse cultures. Whether it's a perfectly spiced curry or a delicate pastry, I appreciate the artistry that goes into each dish.",
    }
  ];

  const handleNextProject = () => {
    setCurrentProject((prevProject) => (prevProject + 1) % aboutMe.length);
  };

  const handlePrevProject = () => {
    setCurrentProject((prevProject) =>
      prevProject === 0 ? aboutMe.length - 1 : prevProject - 1
    );
  };
  return (
    <section className="projects-section">
      <Fade>
      
      <div className="mainProjectsContainer">
      <h1>So, who am I?</h1>
        <h2>{aboutMe[currentProject].title}</h2>
        
        <div
          className="innerProjectsContainer"
        >
          
          <p >{aboutMe[currentProject].description}</p>
        </div> {/* Add project links/buttons */}
        {aboutMe[currentProject].website &&
      <a href={aboutMe[currentProject].website} target="_blank">
        <button className='project-button'>Visit Project Website</button>
      </a>}
      {aboutMe[currentProject].github &&
      <a href={aboutMe[currentProject].github} target="_blank">
        <button className='project-button'>Discover GitHub Repository</button>
      </a>}
      
    </div>
    </Fade>
    <div className='arrows'>
    <button className='button-left' onClick={handlePrevProject}>←</button>
    <button className='button-right' onClick={handleNextProject}>→</button>
    </div>
    </section>
  );
};

export default AboutMe;
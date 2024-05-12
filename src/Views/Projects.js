import React, { useState } from 'react';
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: 'Bits of Cryptos',
      description:
        'Developed the “Bits of Cryptos” website using React library. It displays real-time prices of the top 100 cryptocurrencies using APIs. Implemented news and blog sections for registered users.',
      website:'https://secret-price.surge.sh/',
      github: 'https://github.com/Martingminchev/BitsofCryptos-Full-Stack-Website',
    },
    {
      title: 'That Shopping List',
      description:
        '“That Shopping List” enables users to create and manage shopping lists. Features include item check-off, secured login, and storage of lists and items in a dedicated backend server.',
        github:'bananas',
      
    },
    {
      title: 'More to come soon!',
      description:'∞'
    }
   
  ];

  const handleNextProject = () => {
    setCurrentProject((prevProject) => (prevProject + 1) % projects.length);
  };

  const handlePrevProject = () => {
    setCurrentProject((prevProject) =>
      prevProject === 0 ? projects.length - 1 : prevProject - 1
    );
  };
  return (
    <section className="projects-section">
      
      <div className="mainProjectsContainer">
      <Fade>
      <h1>Projects</h1>
        <h2>{projects[currentProject].title}</h2>
        
        <div
          className="innerProjectsContainer"
        >
          
          <p >{projects[currentProject].description}</p>
        </div>
        </Fade> 
        {projects[currentProject].website &&
      <a href={projects[currentProject].website} target="_blank">
        <button className='project-button'>Visit Project Website</button>
      </a>}
      {projects[currentProject].github &&
      <a href={projects[currentProject].github} target="_blank">
        <button className='project-button'>Discover GitHub Repository</button>
      </a>}
      
    </div>
    <div className='arrows'>
    <button className='button-left' onClick={handlePrevProject}>←</button>
    <button className='button-right' onClick={handleNextProject}>→</button>
    </div>
    </section>
  );
};

export default Projects;
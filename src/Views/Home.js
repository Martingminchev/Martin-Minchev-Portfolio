import React from 'react';
import TypewritterEffect from '../components/TypewritterEffect';
import LogoLinkedin from '../resources/logo-linkedin.png';
import LogoGithub from '../resources/logo-github.png';
import LogoGmail from '../resources/logo-gmail.png';
import LogoPhone from '../resources/logo-phone.png';
import { Fade } from "react-awesome-reveal";

const Home = () => {

  return (
    <div className="home-screen">
    <Fade>
      
      <h1>Martin Minchev</h1>
      <h2>Developer</h2>
      <img className="self-portrait" src={ require('../resources/Self-portrait-removebg-preview.png') } alt='self-portrait-photo'/>
      <p className='text-align-left'>Hello, I'm Martin</p>
     
      <div className='text-align-left'>
      <TypewritterEffect text="Full-stack web developer." />
      <div className='socials'>
      
      <a href="https://www.linkedin.com/in/martin-minchev/" target="_blank">
      <img className='logo' src={LogoLinkedin} alt='logo-linkedin' />
      </a>
      <a href="https://github.com/Martingminchev" target="_blank">
      <img className='logo' src={LogoGithub} alt='logo-Github' />
      </a>
      <a href="mailto:martingminchev@gmail.com" target="_blank">
      <img className='logo' src={LogoGmail} alt='logo-Gmail' />
      </a>
      <a href="tel:+34663861858" target="_blank">
      <img className='logo' src={LogoPhone} alt='logo-Phone' />
      </a>

        </div>
      </div>
      </Fade>
    </div>
  );
};

export default Home;
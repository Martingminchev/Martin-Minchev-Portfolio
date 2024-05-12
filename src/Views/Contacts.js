import React from 'react';
import TypewritterEffect from '../components/TypewritterEffect';
import LogoLinkedin from '../resources/logo-linkedin.png';
import LogoGithub from '../resources/logo-github.png';
import LogoGmail from '../resources/logo-gmail.png';
import LogoPhone from '../resources/logo-phone.png';
import { Fade } from "react-awesome-reveal";

const Contacts = () => {

  return (
    <div className="home-screen">
      <Fade>
      
      <h1>Contacts</h1>
      <p>Feel free to reach out via email to me at:
      <TypewritterEffect text='martingminchev@gmail.com'/>
        </p>
      
    
      <div className='text-align-left'>
      <div className='socials bottom-left'>
        
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

export default Contacts;
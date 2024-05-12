import React from 'react';
import LogoHTML from '../resources/logo-html.png';
import LogoCSS from '../resources/logo-css.png';
import LogoJS from '../resources/logo-js.png';
import LogoReact from '../resources/logo-react.png';
import LogoReactNative from '../resources/logo-react-native.png';
import LogoNodejs from '../resources/logo-nodejs.png';
import LogoExpress from '../resources/logo-express.png';
import LogoMongoDB from '../resources/logo-mongoDB.png';
import LogoGit from '../resources/logo-git.png';
import LogoGithub from '../resources/logo-github.png';
import LogoNPM from '../resources/logo-npm.png';
import LogoBash from '../resources/logo-bash.png';
import { Fade } from "react-awesome-reveal";


const Education = () => {

  return (
    <section className="education">
      <Fade>
      
     <h1>Education</h1>
     <h2>Barcelona Code School</h2>
    <p> Topics, technologies and methods:</p>
    <ul>
      <li>Back-end, front-end and full-stack development
</li>
<li>Building native mobile apps for iOS and Android
</li>
<li>Using databases, external API's</li>
<li>How to build fast, modern, dynamic and responsive web apps
</li>
<li>Version control with Git and GitLab/GitHub</li>
    </ul>
        <div>
          <img className='logo' src={LogoHTML} alt="HTML logo" />
          <img className='logo' src={LogoCSS} alt="CSS logo" />
          <img className='logo' src={LogoJS} alt="JS logo" />
          <img className='logo' src={LogoReact} alt="React logo" />
          <img className='logo' src={LogoReactNative} alt="React Native logo" />
          <img className='logo' src={LogoNodejs} alt="Node.js logo" />
          <img className='logo' src={LogoExpress} alt="Express logo" />
          <img className='logo' src={LogoMongoDB} alt="MongoDB logo" />
          <img className='logo' src={LogoGit} alt="Git logo" />
          <img className='logo' src={LogoGithub} alt="Github logo" />
          <img className='logo' src={LogoNPM} alt="NPM logo" />
          <img className='logo' src={LogoBash} alt="Bash logo" />
        </div>
    
        </Fade>
    </section>
  );
};

export default Education;
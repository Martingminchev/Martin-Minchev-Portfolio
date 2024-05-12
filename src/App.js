import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './Views/Home.js';
import Projects from './Views/Projects.js'
import Education from './Views/Education.js'
import AboutMe from './Views/AboutMe.js';
import Contacts from './Views/Contacts.js'
import Helmet from 'react-helmet';



function App() {
  return (
   
    <Router>
    <div className="App">
    <Helmet>
                <title>Portfolio-Martin Martin</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Personal portfolio website created by Martin Minchev" />
                <meta name="keywords" content="portfolio website, portfolio, react" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

    </Helmet>

    <Navbar />
      <div className='background'></div>
      <div className='content-container'>
    <Routes>
    <Route path="/" exact element={<Home/>} />
    <Route path="/Projects" element={<Projects/>}/>
    <Route path="/Education" element={<Education/>}/>
    <Route path="/AboutMe" element={<AboutMe/>}/>
    <Route path="/Contacts" element={<Contacts/>}/>
    </Routes>
    </div>
    </div>
    </Router>
    
  );
}

export default App;

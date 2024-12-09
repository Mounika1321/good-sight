import logo from './Logo.png';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import image from './download.jpeg';
import { BrowserRouter,HashRouter ,Routes,Route} from 'react-router-dom';
import { Instagram } from 'react-bootstrap-icons';
import About from './About';
import EyeGlasses from './EyeGlasses';
import SunGlasses from './SunGlasses';
import Footer from './Footer';
import Services from './Services';
import StoreLocator from './StoreLocator';
import ContactLenses from './ContactLenses';
import NavbarHeader from './NavbarHeader';
import GS from './GS';
import SunGlassesDetail from './SunGlassesDetail';
import EyeGlassesDetail from './EyeGlassesDetail';
import ScrollTop from './ScrollTop';
import Lenses from './Lenses';




const App = ()=> {
  return (
   
      <HashRouter>
      <ScrollTop/>
      
      <Routes>
        <Route path="/" element={<GS />}/>
        <Route path="/StoreLocator" element={<StoreLocator />} />
        <Route path="/About" element={<About />} />
        <Route path="/EyeGlasses" element={<EyeGlasses />} />
        <Route path="/EyeGlasses/:id" element={<EyeGlassesDetail/>} />
        <Route path="/SunGlasses" element={<SunGlasses/>} />
        <Route path="/SunGlasses/:id" element={<SunGlassesDetail/>} />
        <Route path="/Footer" element={<Footer/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Lenses" element={<Lenses/>} />
        <Route path="/ContactLenses" element={<ContactLenses/>} />
        
      </Routes>
      
      </HashRouter>
      

    
  );
}

export default App;

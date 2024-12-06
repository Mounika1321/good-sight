import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './Logo.png';
import { Instagram,Sunglasses,Eyeglasses,GeoAltFill, Fire,Whatsapp,EyeFill,PhoneFill,EnvelopeFill, Globe, LightningChargeFill } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import './Footer.css';
import {Img} from 'react-image';
import {Row,Col} from 'react-bootstrap'
import { MdPanoramaFishEye} from "react-icons/md";
import { Youtube } from "react-bootstrap-icons";


  export const Footer = () =>{
    return(
        <div>
             <Row style={{background:"gray"}} >
                <Col xs={6} md={6} lg={6} data-aos="fade-right">
                <center style={{paddingTop:"10%"}}>
                  <h3 class="tg" style={{color:"#FCFBF4 "}}><i>See, connect, thrive!</i></h3>
                <h1><Youtube style={{color:"red"}} class="tg2"/> <span>&nbsp;</span>
               <a href="https://www.instagram.com/good_sight_opticians/" style={{textDecoration:"none"}}><Instagram  class="tg1" style={{}} /><span>&nbsp;&nbsp;</span></a>
               <a href="https://wa.me/+919848118844" style={{textDecoration:"none"}}> <Whatsapp class="tg2" style={{color:"green"}}/></a><span>&nbsp;&nbsp;</span>
               <a href="mailto:goodsight154@gmail.com" style={{textDecoration:"none"}}> <EnvelopeFill class="tg2" style={{color:"#2F8BE6"}}/></a>
                </h1>
                
                  </center>
                </Col>       
                <Col xs={6} md={6} lg={6} data-aos="fade-left">
               <center><h3 style={{color:"#FCFBF4 "}} class="tg2"><i>HeadOffice</i> <GeoAltFill style={{color:"red"}}/></h3></center>
                <iframe  class="tg2" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60912.23225808503!2d78.494708!3d17.411091!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9996bfffffff%3A0x25b713050c02d14a!2sGood%20Sight%20Opticals!5e0!3m2!1sen!2sau!4v1713160944941!5m2!1sen!2sau" width="90%" height="70%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                 <br></br>
                </Col> 
                <Col md={4} xs={4} lg={4}>
               
                </Col>
                <Col md={4} xs={4} lg={4}>
                <center><h2 class="line"><span><Sunglasses class="tg2" /> <Eyeglasses class="tg2" style={{color:"orange"}}/></span></h2></center>
                </Col>
                <Col md={4} xs={4} lg={4}>
              
                </Col>
                <Container>
                <Row>
                <Col md={3} sm={3} xs={3} lg={3}>
              <center>
               <Link to="/" style={{textDecoration:"none"}}> <h4><img src={logo} height="43px" width="43px" alt="img"/><b style={{color:"white"}}>Good Sight Opticians</b></h4></Link>
                </center>
                </Col>
                <Col md={3} sm={3} xs={3} lg={3}>
                <center data-aos="fade-right">
                 <h4 style={{color:"#FCFBF4 "}} class="tg2"><i>Eyewear</i></h4>
                 <br></br>
                
                 <Link style={{textDecoration:"none"}} to="/Sunglasses" > <p   class="tg2" style={{color:"#FCFBF4 "}}><i > <Sunglasses style={{color:"black"}}/> <i  className="nav-link2" >SunGlasses</i></i></p></Link>
               
                 <Link  style={{textDecoration:"none"}} to="/Eyeglasses"><p class="tg2" style={{color:"#FCFBF4 "}}><i><Eyeglasses  style={{color:"orange"}}/> <i  className="nav-link2" >EyeGlasses</i></i></p></Link>
                 <br></br>
                 </center>
                 
                </Col>
                <Col md={3} sm={3} xs={3} lg={3}>
                <center data-aos="fade-up">
                 <h4 style={{color:"#FCFBF4 "}} class="tg2"><i>Lenswear</i></h4>
                 <br></br>
                
                <Link style={{textDecoration:"none"}} as={Link} to="/Lenses" > <p class="tg2" style={{color:"#FCFBF4 "}}><i ><MdPanoramaFishEye  style={{color:"skyblue"}}/> <i  className="nav-link2" >Lenses</i></i></p></Link>
              
                <Link style={{textDecoration:"none"}} to="/ContactLenses"><p class="tg2" style={{color:"#FCFBF4 ",fontSize:"88%"}}><i><EyeFill style={{color:"orange"}}/> <i  className="nav-link2" >ContactLenses</i></i></p></Link>
                <br></br>
                 </center>
                </Col>
                <Col md={3} sm={3} xs={3} lg={3}>
                <center data-aos="fade-left">
                 <h4 style={{color:"#FCFBF4 "}} class="tg2"><i>OptiInfo</i></h4>
                 <br></br>
                
                <Link style={{textDecoration:"none"}} to="/About" > <p class="tg2" style={{color:"#FCFBF4 "}}><i><PhoneFill  style={{color:"black"}}/> <i  className="nav-link2" >About</i></i></p></Link>
              
                <Link style={{textDecoration:"none"}} to="/Services"><p class="tg2" style={{color:"#FCFBF4 "}}><i><EyeFill  style={{color:"orange"}}/> <i  className="nav-link2" >Services</i></i></p></Link>

                <Link style={{textDecoration:"none"}} to="/StoreLocator"><p class="tg2" style={{color:"#FCFBF4 "}}><i><GeoAltFill  style={{color:"red",fontSize:"88%"}}/> <i  className="nav-link2" >StoreLocator</i></i></p></Link>
                <br></br>
                 </center>
                </Col>
                <br></br>
                <p style={{textAlign:"right"}}><i style={{color:"#FCFBF4"}} > <LightningChargeFill/> Powered by Mounika Nerlakanti <span>&nbsp;</span></i></p>
               </Row>
               </Container>
        
               </Row>
               

        </div>
    )
}

export default Footer;
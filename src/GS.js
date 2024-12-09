import React from "react";
import { useEffect,useState } from "react";
import image from './download.jpeg';
import NavbarHeader from './NavbarHeader';
import CarouselImage from "./CarouselImage";
import GSV from './GS/GSvideo.mp4';
import Aos from "aos";
import 'aos/dist/aos.css';
import './GS.css';
import { Row,Col, Container } from "react-bootstrap";
import { Display, EnvelopeFill, EyeFill, Eyeglasses, GeoAltFill, Instagram, Eye,Mailbox, Sunglasses, Whatsapp, PhoneFill } from "react-bootstrap-icons";
import { GiSunglasses } from "react-icons/gi";
import WomanGlasses from './GS/WMGlasses.png';
import Glass1 from './GS/Glass1.png';
import Glass2 from './GS/Glass2.png';
import Glass3 from './GS/Glass3.png';
import WMR from './GS/WMR.png';
import WMC from './GS/WMC.png';
import WomanGlassesNull from './GS/WMN.png';
import Marquee from "react-fast-marquee";
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom"
import Bluecut from "./GS/bluecut4.jpeg";
import { MdPanoramaFishEye } from "react-icons/md";
import { useSpring, animated } from 'react-spring';
import Insights from './Insights';
import { motion } from "framer-motion";
import ImageTransition from "./ImageTransition";
import { FaEye } from "react-icons/fa"
import Eyecareimg from './GS/EyeCareimg.png';
import Eyeframes1 from './GS/Eyeframes1.jpg'
import Eyeframes2 from './GS/Eyeframes2.jpg'
import { FaRegEye } from "react-icons/fa";
import { MdWorkspacePremium  } from "react-icons/md";
import DAG from './GS/Dolce Gabbana.jpeg'
import Scott from './GS/Scott.jpg';
import lac from './GS/Lacoste.jpg';
import tran from './GS/Transitions.jpeg';
import VG from './GS/VG.jpg'
import Logo from './Logo.png';
import About1 from "./About/About1.jpeg";
import views3 from "./About/360view.JPG";
import { Card } from "react-bootstrap";
import { AnimationWrapper } from "react-hover-animation";
import { Youtube } from "react-bootstrap-icons";
import logo from './Logo.png'
import Brands from "./Brands";
import Footer from "./Footer";
import Radha from './GS/radha.jpg';
import CEO from './GS/ramesh.JPG';
import Transi from'./GS/Transition.mp4'

  const GS = () =>{
    const props = useSpring({
      from: { transform: 'translate3d(100%, 0, 0)' },
      to: { transform: 'translate3d(-100%, 0, 0)' },
      config: { duration: 1000 },
      loop: { reverse: true },
    });
    const [currentImage, setCurrentImage] = useState(WomanGlassesNull);
   
    const changeimg=(param)=>{
  
      
      setCurrentImage(param);
      
    }
    
    useEffect(()=>{
      Aos.init({duration:2000});
  },[]);


    return(
        <div style={{overflowX:"hidden",overflowY:"hidden"}}>
             <NavbarHeader/>
             
             <CarouselImage/>
             <video className="myVideo"  playsinline width="100%" height="100%"  src={GSV}  loop muted autoPlay></video>
             
              
      
                         <Row >
               <Col md={6} lg={6} xs={6} sm={6} data-aos="fade-right">
               <iframe width="100%" height="100%" src="https://www.youtube.com/embed/SPPqZo0rblY?si=k4pGMnRSWyo2h9YS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
               
              
               </Col>
               <Col md={6} lg={6} xs={6} sm={6} data-aos="fade-left">
               
               <video className="myVideo" width="100%" height="100%"  src={Transi} playsinline loop muted autoPlay></video>
               </Col>
              </Row>
              
              <Row style={{background:"black"}} data-aos="flip-down">
                <Col md={6} xs={6} lg={6}>
                <img src={Bluecut} height="100%" width="100%"  data-aos="fade-right"/>
                </Col>
                <Col md={6} xs={6} lg={6}>
               <h6 style={{color:"#f5f5e4",paddingTop:"50%"}} class="tg"><i data-aos="fade-left">
                     Explore our collection of blue-cut lenses, crafted to protect your eyes from digital screens while offering enhanced visual comfort. Discover the perfect blend of style and functionality today!</i></h6>
               <br></br>
               <center><Link to={'./Lenses'}><motion.h1 animate={{rotate:[0,15,15,0]}}
             transition={{repeat:Infinity,duration:0}}
              style={{color:"#f5f5e4"}} class="tg"><b><MdPanoramaFishEye class="tg" style={{color:"skyblue"}}/></b></motion.h1></Link></center>
                </Col>
               </Row>
            
              <Row>
                <Col md={6} xs={6} sm={6} lg={6} data-aos="fade-right">
                <Link to="/EyeGlasses"> <img src={DAG} class="tg" alt="DG" height="100%" width="100%"/></Link>
                </Col>
                <Col md={6} xs={6} sm={6} lg={6} data-aos="fade-left">
                <Link to="/SunGlasses"><img src={Scott} class="tg" alt="DG" height="100%" width="100%"/></Link>
                </Col>
              </Row>
             
              <Row style={{background:"#ffd7b5"}} data-aos="fade-up" height="10%">
                
                <Col md={6} xs={6} sm={6} lg={6} data-aos="fade-up" >
             
                <img src={currentImage} class="tg" height="70%" width="100%" alt='image'  onClick={()=>changeimg(WomanGlassesNull)}/>
              
                </Col>
                <Col md={6} xs={6} sm={6} lg={6}  >
                <center data-aos="fade-down">
    
                <img src={Glass1} class="tg" onClick={()=>changeimg(WMR)} height="49%" width="49%" alt='image' style={{borderRadius:"50%"}} /><span>&nbsp;</span>
                <img src={Glass2} class="tg" onClick={()=>changeimg(WMC)} height="49%" width="49%" alt='image' style={{borderRadius:"50%"}} /><span>&nbsp;</span>
                </center>
                <center data-aos="fade-up"><img src={Glass3} class="tg" onClick={()=>changeimg(WomanGlasses)}height="40%" width="40%" alt='image'style={{borderRadius:"50%"}} /></center>
                <br></br><br></br>
                <center data-aos="fade-left"><b><h6 style={{fontFamily:"Times New Roman"}} class="tg"> <b ><i>
                Explore a variety of shapes and sizes available in our stores for more options. Discover the full range.!</i><br></br> <Link to={'/EyeGlasses'}><Button variant="warning"><i><h1><GiSunglasses/></h1></i></Button></Link></b></h6></b></center>
                
                </Col>
                
              </Row>
              
              <Row>
                <Col md={6} xs={6} sm={6} lg={6} data-aos="fade-right">
                <Link to="/EyeGlasses"><img src={lac} class="tg" alt="DG" height="100%" width="100%"/></Link>
                </Col>
                <Col md={6} xs={6} sm={6} lg={6} data-aos="fade-left">
                <Link to="/EyeGlasses"> <img src={VG} class="tg" alt="DG" height="100%" width="100%"/></Link>
                </Col>
              </Row>
              <Row data-aos="fade-up" style={{background:"linear-gradient(315deg, #2b4162 0%, #12100e 74%)"}} >
                <Col md={6} lg={6} xs={6} sm={6} data-aos="fade-right">
               <p class="tg" style={{color:"#f5f5e4",paddingTop:"20%" ,paddingLeft:"10%"}}><i>Elevate your vision with our premium contact lenses, crafted for optimal comfort and clarity. Explore our range to find the perfect fit for your lifestyle and visual needs.</i></p>
               <br></br>
                    <center><Link to={'./ContactLenses'}><motion.h1 animate={{rotate:[0,10,10,0]}}
             transition={{repeat:Infinity,duration:0}}
              style={{color:"#f5f5e4"}} class="tg"><b><FaEye class="tg"/></b></motion.h1></Link></center>
                </Col>
                <Col md={6} lg={6} xs={6} sm={6} data-aos="fade-left"  >
                <center >
                  <br></br>
                <Link to="./ContactLenses"><ImageTransition   /></Link>
                <br></br>
                
             </center>
                </Col>
              </Row>
              
               <Row data-aos="fade-right"><Link to="./Lenses"><img src={tran} height="100%" width="100%" class="tg"/></Link></Row>
               <center><h3 class="tg"><i data-aos="fade-up">OUR BRAND PARTNERS</i><span>&nbsp;&nbsp;</span>
        
              <EyeFill  class="blink" height="100%"/></h3> </center>
              
               <Container fluid >
              <Row >
                
                <br></br>
                
                <Col xs={4} sm={4} md={4} lg={4} data-aos="fade-right">
                <img src={Eyeframes1} height="70%" width="100%" class="tg"/>
                 </Col>
                
                <Col xs={4} sm={4} md={4} lg={4}><Marquee speed="250" pauseOnHover gradientWidth="0%">
                
                {
                  Brands.map((curelm)=>{
                    return(
                      <img src={curelm.IMG} height="40%" width="35%"/> 
                    )
                  })
                }
              

             
              
              </Marquee></Col>
              <Col xs={4} sm={4} md={4} lg={4}  data-aos="fade-left">
              <img src={Eyeframes2} height="70%" width="100%" class="tg" />
                </Col>
              
               </Row>
               </Container>
               <br></br>
               <center><h3 class="tg"><i data-aos="fade-up">Eye Care</i><span>&nbsp;&nbsp;</span>
               <FaRegEye  class="blink" height="100%"/></h3> </center>
              
                <Link to="./Services"><h1 data-aos="fade-up"><img src={Eyecareimg} class="tg" alt="eyecare" height="100%" width="100%"/></h1></Link>
             
                <center><h3 class="tg"><i data-aos="fade-up">Visionary Excellence</i> <MdWorkspacePremium   class="blink" height="100%"/></h3> </center>
               <Container fluid><Insights /></Container>
               <center><h3 class="tg"><i data-aos="fade-up">Our Opticians</i> <FaRegEye   class="blink" height="100%"/></h3> </center>
               <Container>
               <Row>
      <Col md={2}></Col>
        <Col md={4} data-aos="fade-up">
        <Card   className="Abhover" style={{border:"none"}} >
      <Card.Img variant="top" src={CEO}  style={{borderRadius:"100%",overflow:"hidden"}}  />
      <Card.Body>
        <Card.Title><center>Mr.Ramesh Kumar Nerlakanti</center></Card.Title>
        <Card.Text>
        <center>CEO
          <p>Optician</p></center>.
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
       
        <Col md={4 }data-aos="fade-up">
        <Card   className="Abhover" style={{border:"none"}} >
      <Card.Img variant="top" src={Radha} height="20%" width="20%" style={{ borderRadius:"100%",overflow:"hidden"}}  />
      <Card.Body>
        <Card.Title><center>Mrs.Radha Nerlakanti</center></Card.Title>
        <Card.Text>
          <center>CEO<p>Optician</p></center>
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
          <Col md={6} data-aos="fade-right">
          <center><p><AnimationWrapper config={{color: {initial: 'black',onHover: 'black',},}}> <i><b>
            <h5>Welcome to Good Sight Opticians - Enhancing Vision Since 1992</h5><br></br>
            
            Good Sight Opticians has been a cornerstone of quality eye care and fashionable eyewear in our community. We offer a comprehensive range of services including precise clinical examinations, a vast selection of frames and glasses, advanced lenses tailored to your needs, comfortable contact lenses, and complimentary eye repairs to ensure your eyewear stays in top condition. Our team of highly skilled optometrists cum salespersons, Eye doctors is dedicated to providing personalized care, guiding you through every step to find the perfect eyewear solution that matches your lifestyle and preferences.
            <br></br><br></br>
            <h5>Why Choose Good Sight Opticians?</h5><br></br>
            At Good Sight Opticians, we combine decades of experience with a passion for vision health and customer satisfaction. Our commitment to excellence is reflected in our meticulous clinical services, diverse eyewear offerings, and the expertise of our optometrists who are also knowledgeable salespersons. Whether you're due for an eye exam, looking to update your eyeglasses, or exploring the convenience of contact lenses, trust Good Sight Opticians to deliver exceptional care and premium eyewear options that enhance your vision and style.
            </b></i></AnimationWrapper></p></center>
          </Col>
          <Col data-aos="fade-left" >
          <Link to="https://www.google.com/local/place/fid/0x3bcb9996bfffffff:0x25b713050c02d14a/photosphere?iu=https://lh5.googleusercontent.com/p/AF1QipMbiQTaefNQaQl0ZkljbgUi7MIyiFZLulcZ_NUN%3Dw160-h106-k-no-pi-0-ya0-ro-0-fo100&ik=CAoSLEFGMVFpcE1iaVFUYWVmTlFhUWwwWmtsamJnVWk3TUl5aUZaTHVsY1pfTlVO">
            <img src={views3}  alt="gs" height="100%" width="100%" style={{borderRadius:"100%"}}  />
            <div class="middle">
      <div class="text"><center><h4><i><b>Click here for 360 view</b></i></h4></center></div>
    </div>
            
          </Link>
          </Col>
        </Row>
        </Container>
               <br></br>    
           <Footer/>
        

        </div>
    )
}

export default GS;
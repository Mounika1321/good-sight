import React, { useState } from "react";
import NavbarHeader from "./NavbarHeader";
import { useEffect } from "react";
import Footer from "./Footer";
import { Container,Row,Col } from "react-bootstrap";
import { Eyeglasses, GeoAltFill, PatchCheckFill, PeopleFill } from "react-bootstrap-icons";
import Aos from "aos";
import 'aos/dist/aos.css';
import CountUp from "react-countup";
import { AnimationWrapper } from "react-hover-animation";
import ScrollTrigger from "react-scroll-trigger";
import { Link } from "react-router-dom";
import About1 from "./About/About1.jpeg";
import { FcRating } from "react-icons/fc";
import views3 from "./About/360view.JPG";
import Radha from './GS/radha.jpg';
import CEO from './GS/ramesh.JPG';
import './About.css'
import { Card } from "react-bootstrap";
import { FaHandshake } from "react-icons/fa";
export const About = () =>{
  const [counterOn,setCounterOn]=useState(false);
  useEffect(()=>
  {
    Aos.init({duration:2000});
  },[]);
  return(
  <div>
    <br></br> <br></br> <br></br>
    <NavbarHeader/>
    <h1> </h1>
    <br></br><br></br>
    <Container>
      <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
      <div style={{backgroundColor:"Black"}} data-aos='fade-up'>
        <Row>
          <Col md={4}>
            <span>&nbsp;&nbsp;</span>
            <center>
            <AnimationWrapper config={{color: {initial: 'orange',onHover: 'yellow',},}}> 
              <h1><PatchCheckFill /></h1>
              <h1>{counterOn && <CountUp start={0} end={31}  duration={2} delay={0}/>}<i>+</i></h1>
              <h3><i>Years of Excellence</i></h3>
            </AnimationWrapper>
            </center>
          </Col>
          
          <Col md={4}>
            <span>&nbsp;&nbsp;</span>
            <center>
            <Link  to={"/StoreLocator"} style={{textDecoration:"none"}}>
            <AnimationWrapper config={{color: {initial: 'orange',onHover: 'yellow',},}}> 
              <h1><GeoAltFill /></h1>
              <h1>{counterOn && <CountUp start={0} end={6}  duration={3} delay={1}/>}</h1>
              <h3><i>Outlets</i></h3>
              </AnimationWrapper>
              </Link>
            </center>
          </Col>
        
          <Col md={4} data-aos="fade-up">
            <span>&nbsp;&nbsp;</span>
            <center>
            <AnimationWrapper config={{color: {initial: 'orange',onHover: 'yellow',},}}> 
              <h1><PeopleFill /></h1>
              <h1>{counterOn && <CountUp start={0} end={10}  duration={3} delay={1}/>}<i>+</i></h1>
              <h3><i>Optometrists</i></h3>
              </AnimationWrapper>
            </center>
          </Col>
          <br></br>
        </Row>
        <br></br>
      </div>
      </ScrollTrigger>
      <br></br>
      <div>
        <Row>
          <Col md={6} data-aos="fade-right">
            <img src={About1} class="Abhover" alt="gs" height="100%" width="100%" style={{borderRadius:"10%"}}/>
          </Col>
          <Col data-aos="fade-left">
          <center><p><AnimationWrapper config={{color: {initial: 'black',onHover: 'black',},}}> <i><b>
          <h5>Welcome to Good Sight Opticians - Enhancing Vision Since 1992</h5><br></br>
            
            Good Sight Opticians has been a cornerstone of quality eye care and fashionable eyewear in our community. We offer a comprehensive range of services including precise clinical examinations, a vast selection of frames and glasses, advanced lenses tailored to your needs, comfortable contact lenses, and complimentary eye repairs to ensure your eyewear stays in top condition. Our team of highly skilled optometrists cum salespersons, Eye doctors is dedicated to providing personalized care, guiding you through every step to find the perfect eyewear solution that matches your lifestyle and preferences.
            <br></br><br></br>
            <h5>Our Comprehensive Services <FaHandshake style={{color:'orange'}}/></h5><br></br>
            At Good Sight Opticians, we offer a wide range of services designed to meet all your vision needs under one roof. Our specialised eye doctors, experienced optometrists, who also serve as knowledgeable salespersons, conduct thorough eye examinations using state-of-the-art technology to assess your vision and eye health accurately. Whether you require new prescription glasses, stylish frames, advanced lenses, or comfortable contact lenses, our team is here to assist you in selecting the perfect eyewear solution tailored to your lifestyle and preferences.
            </b></i></AnimationWrapper></p></center>
          </Col>
        </Row>
      </div>
      <br></br>
      <h3 data-aos="fade-up" class="blink"><AnimationWrapper config={{color: {initial: 'black',onHover: '#FF8C00',},}}><i><b class="blink" >Our Opticians:</b></i></AnimationWrapper></h3>
      <br></br>
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
      <Card.Img variant="top" src={Radha}  style={{borderRadius:"100%",overflow:"hidden"}}  />
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
            <h5>Exceptional Eyewear Selection <Eyeglasses style={{color:"orange",height:"100%"}}/></h5>
            <br></br>
            Explore our extensive collection of frames and lenses, curated to cater to diverse tastes and budgets. From leading designer brands to affordable yet quality options, we prioritize offering eyewear that combines style with functionality. Our optometrists and salespersons are trained to provide expert advice on frame selection, lens types, and coatings that best suit your visual needs, ensuring you leave our store not only seeing better but looking great too.
            <br></br><br></br>
            <h5>Commitment to Customer Satisfaction <FcRating/></h5>
            <br></br>
            At Good Sight Opticians, we understand that vision care extends beyond clinical expertise—it's about building lasting relationships based on trust and satisfaction. That's why we offer free eye repairs to ensure your eyewear remains in excellent condition. Our goal is to exceed your expectations by delivering superior service in a warm and welcoming environment. Whether you're due for a routine eye exam or looking to upgrade your eyewear, we invite you to experience the difference at Good Sight Opticians, where your vision is our priority.
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
        <br></br>

    </Container>
    <br></br>
    <Footer/>

  </div>
    )
}

export default About;
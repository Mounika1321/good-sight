import React from "react";
import ScrollTrigger from "react-scroll-trigger";
import { useState,useEffect } from "react";
import { Container } from "react-bootstrap";
import CountUp from "react-countup";
import { AnimationWrapper } from "react-hover-animation";
import { Row,Col } from "react-bootstrap";
import { GeoAltFill, PatchCheckFill, PeopleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
export const Insights=()=>{
    const [counterOn,setCounterOn]=useState(false);
  useEffect(()=>
  {
    Aos.init({duration:2000});
  },[]);
    return(
        <div style={{overflowX:"hidden",overflowY:"hidden"}}>
          
          <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
      <div  data-aos='fade-up'>
        
        <Row style={{background:"#F5F5E4"}}>
          <Col md={4} xs={4} lg={4}>
            <span>&nbsp;&nbsp;</span>
            <center>
            <AnimationWrapper config={{color: {initial: 'orange',onHover: 'black',},}}> 
              <h1><PatchCheckFill /></h1>
              <h1>{counterOn && <CountUp start={0} end={31}  duration={2} delay={0}/>}<i>+</i></h1>
              <h3><i>Years of Excellence</i></h3>
            </AnimationWrapper>
            </center>
          </Col>
          
          <Col md={4} xs={4} lg={4}>
            <span>&nbsp;&nbsp;</span>
            <center>
            <Link  to={"/StoreLocator"} style={{textDecoration:"none"}}>
            <AnimationWrapper config={{color: {initial: 'orange',onHover: 'green',},}}> 
              <h1><GeoAltFill /></h1>
              <h1>{counterOn && <CountUp start={0} end={6}  duration={3} delay={1}/>}</h1>
              <h3><i>Outlets</i></h3>
              </AnimationWrapper>
              </Link>
            </center>
          </Col>
        
          <Col md={4} xs={4} lg={4} data-aos="fade-up">
            <span>&nbsp;&nbsp;</span>
            <center>
            <AnimationWrapper config={{color: {initial: 'orange',onHover: 'black',},}}> 
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
     
    
        </div>
    )
}

export default Insights;
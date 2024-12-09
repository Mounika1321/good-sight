import React from "react";
import NavbarHeader from "./NavbarHeader";
import Footer from "./Footer";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { Instagram,Sunglasses,Eyeglasses,GeoAltFill, Fire,EyeFill,PhoneFill,EnvelopeFill, EmojiSunglasses } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import SunGlassesData from "./SunGlassesData";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import './SunGlasses.css';

  const SunGlasses = () =>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
        <div>
            <NavbarHeader/>
            <br></br> <br></br> <br></br>
            <Container>
            
             <center>  <motion.h1 animate={{rotate:[0,20,20,0]}}
             transition={{repeat:Infinity,duration:1}}
             >
             <Sunglasses data-aos='fade-up'/></motion.h1></center>
             <br></br>
             <Row>
                
                {
                    SunGlassesData.map((curelm)=>{
                        return(
                          
                            <Col  md={4} lg={4} sm={4} xs={4}>
                               <Link style={{textDecoration:'none'}} to={`SunGlasses/${curelm.Id}`}>
                            <Card    style={{ width: '100%' }} data-aos='fade-up'>
                                
      <Card.Img  class="mm" variant="top" src={curelm.IMG} />
      {console.log(curelm.IMG)}
   
      <Card.Body>
      <Card.Title ><center>{curelm.Title}</center></Card.Title>
        
      </Card.Body>
     
      
    
    </Card></Link>
    <br></br>
    </Col>
          
                        )
                    })
                }
               
             </Row>


            </Container>
            <br></br>
            <Footer/>
        </div>
    )
}

export default SunGlasses;
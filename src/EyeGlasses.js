import React from "react";
import NavbarHeader from "./NavbarHeader";
import Footer from "./Footer";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { Eyeglasses} from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import SunGlassesData from "./SunGlassesData";
import Card from 'react-bootstrap/Card';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import './SunGlasses.css';
import EyeGlassesData from "./EyeGlassesData";

  const EyeGlasses = () =>{
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
             <Eyeglasses data-aos='fade-up'/></motion.h1></center>
             <br></br>
             <Row>
                
                {
                    EyeGlassesData.map((curelm)=>{
                        return(
                          
                            <Col  md={4} lg={4} sm={4} xs={4}>
                             <Link style={{textDecoration:'none'}} to={`/EyeGlasses/${curelm.Id}`}>
                            <Card    style={{ width: '100%' }} data-aos='fade-up'>
      <Card.Img  class="mm" variant="top" src={curelm.IMG} />
      <Card.Body>
        <Card.Title><center>{curelm.Title}</center></Card.Title>
        <Card.Text>
         
        </Card.Text>
      </Card.Body>
     
      <Card.Body>
        
      </Card.Body>
    </Card>
    </Link>
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

export default EyeGlasses;
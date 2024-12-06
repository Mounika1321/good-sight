import React from "react";
import NavbarHeader from "./NavbarHeader";
import Footer from "./Footer";
import { Col, Container, Row } from "react-bootstrap";
import { animate, motion } from "framer-motion";
import {EyeFill,Eye } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import SunGlassesData from "./SunGlassesData";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import './ContactLenses.css';
import { MdPanoramaFishEye } from "react-icons/md";
import ContactLensesData from "./ContactLensesData";
import AlconClr from './Contactlenses/AlconClr.png';
import Lacelle from './Contactlenses/Lacelle.png'

  const ContactLenses = () =>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
        <div>
            <NavbarHeader/>
            <br></br> <br></br> <br></br>
        
                <center>
                    <motion.h1 animate={{rotate:[0,20,20,0]}}
                        transition={{repeat:Infinity,duration:1}}>
                    <Eye data-aos='fade-up'/></motion.h1>
                </center>
                <br></br>
                <div data-aos="fade-up">  
            <img src={AlconClr} class="clm" height="100%" width="100%"/>
            </div>
                
              <Row style={{}}>
                
                {
                    ContactLensesData.map((curelm)=>{
                        if(curelm.ID==1 || curelm.ID==2 || curelm.ID==3 ||curelm.ID==4 ){
                            return (
                                  <div>
                                    <Col md={12} xs={12} sm={12} lg={12} data-aos="fade-up" >
                                    <center><h1 class="clm"><i>{curelm.Title} <MdPanoramaFishEye class="clblink" style={{color:"skyblue"}} /></i></h1></center><br></br> 
                                    <img src={curelm.ContactLensesLensesImg}  class="clm" height="100%" width="100%" alt="contactlenses"/>
                                    <br></br>
                                    </Col>
                                    </div>
                               
                            )

                        }
                    })
                }
                </Row>
                <br></br>
               <div data-aos="fade-up">
                <img src={Lacelle} class="clm" height="100%" width="100%"/>
                </div>
                   <br></br> 
                <center><h2 class="clm"><i>Contact Lenses Solutions <MdPanoramaFishEye class="clblink" style={{color:"skyblue"}}/></i></h2></center>
                {
                    ContactLensesData.map((curelm)=>{
                        if(curelm.ID==5 || curelm.ID==6 || curelm.ID==7  ){
                        if(curelm.ID%2!==0){
                            return(
                            <div  className="texts">
                                <motion.img whileTap={{rotate:[0,8,8,0]}}  whileHover={{rotate:[0,8,8,0]}}  transition={{duration:1}} src={curelm.ContactLensesLensesImg} height="50%" width="50%" data-aos='fade-right'/> 
                                <h6 data-aos='fade-left'><i class="clm">{curelm.SolDescription}</i></h6>
                               
                            </div>)
                        }
                        else
                        {
                            return(
                            <div  className="texts2">
                                <h6 data-aos='fade-right'><i class="clm">{curelm.SolDescription}</i></h6>
                                <motion.img whileTap={{rotate:[0,8,8,0]}}  whileHover={{rotate:[0,8,8,0]}}  src={curelm.ContactLensesLensesImg} height="50%" width="50%" data-aos='fade-left'/> 
                            </div> 
                            )
                        }
  }})
                }
               
             


      
            <br></br>
            <Footer/>
        </div>
    )
}

export default ContactLenses;
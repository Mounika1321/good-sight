import React from "react";
import { useParams } from "react-router-dom";
import SunGlassesData from "./SunGlassesData";
import logo from './StoreBg.jpeg'
import { Col, Row,Container } from "react-bootstrap";
import NavbarHeader from "./NavbarHeader";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Footer from "./Footer";
import './SunGlasses.css';
import ModalImage from "react-modal-image";
import { AnimationWrapper } from "react-hover-animation";
  export const SunGlassesDetail = () =>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    const {id} = useParams();
    return(

        <div>
            <NavbarHeader/>
        <br></br><br></br><br></br><br></br>
        { 
             SunGlassesData.map((curelm)=>{
                if(curelm.Id==id){
                    return(
                        <Container>
                         <div > <center><AnimationWrapper  config={{
        color: {
          initial: 'black',
          onHover: 'orange',
        },
      }}> 
      <br></br>
      <h1 data-aos="fade-up"><i data-aos="fade-up">{curelm.Title}</i></h1></AnimationWrapper></center></div>
                          <br></br>
                            <Row>
                            <Col md={6}  data-aos='fade-up'>
                               <img src={curelm.IMG} class="mm" height="100%" width="100%"/>
                             </Col>
                            <Col md={6}   data-aos='fade-left' style={{backgroundColor:"#F5F5E4"}}>
                                <br></br>
                            <center><p class="mm" style={{paddingTop:"8%"}}><i>{curelm.Description}</i></p></center>
                            </Col>
                           </Row>
                           <br></br>
                           <Row data-aos='fade-up'>
                           <Col md={4} sm={4} lg={4} xs={4} >
                           <ModalImage  small={curelm.IMG3} large={curelm.IMG3} alt={curelm.Title} showRotate="true" height="100%" width="100%"/>                               
                            </Col>
                            <Col md={4}  sm={4} lg={4} xs={4}  >
                            <ModalImage small={curelm.IMG4} large={curelm.IMG4} alt={curelm.Title} showRotate="true" height="100%" width="100%"/>  
                            </Col>
                            <Col md={4}  sm={4} lg={4} xs={4} >
                            <ModalImage small={curelm.IMG5} large={curelm.IMG5} alt={curelm.Title} showRotate="true" height="100%" width="100%"/>
                            </Col>

                           </Row>
                           <br></br>
                        </Container>  
                    )
                }
               })
            }
            <Footer/>
        </div>
    )
            
}

export default SunGlassesDetail;
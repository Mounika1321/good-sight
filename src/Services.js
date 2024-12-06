import React from "react";
import './Services.css';
import NavbarHeader from "./NavbarHeader";
import viewimg from "./About/360view.JPG";
import { Link } from "react-router-dom"
import { Button, Col,Row, Container } from "react-bootstrap";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Eye, EyeFill, Eyeglasses} from "react-bootstrap-icons";
import { AnimationWrapper } from "react-hover-animation";
import Footer from "./Footer";
import Eyevideo from "./Services/EyeVideo.mp4";
import ContactLensesTraining from './Services/ContactlensesTraining.png';
import Eyecare from './Services/EyeCare.png';
import EyeRepairs from './Services/EyeRepairs.png'
export const Services = () =>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
        <div>
            <NavbarHeader/>
            <div className="position-relative" data-aos="fade-up">
            <video width="100%"  className="img-fluid" alt="Overlay" height="100%" src={Eyevideo}  loop muted autoPlay></video>

            
            <div className="overlay"></div>
            <div className="overlay-content">
                <h1><b><i>Your Vision is our Mission...!</i></b></h1>
                <br></br>
                <p><b><i>We also provide bluecut radiation lenses</i></b></p>
               <Link to={'/Lenses'}> <Button ><i>Browse Lenses</i></Button></Link>
            </div>
        </div>
       <br></br>
       <Container>
       <center><AnimationWrapper config={{color: {initial: 'black',onHover: '#FF8C00',},}}><h1  data-aos="fade-right" ><i >EyeCare </i><i className="sblink"><EyeFill/></i></h1></AnimationWrapper></center>
       <br></br>
       <Row>
        <Col md={6} data-aos="zoom-in">
            <img src={Eyecare} className="sm" height="100%" width="100%" style={{borderRadius:"10%"}}/>
        </Col>
        <Col md={6} data-aos="fade-left"> 
        <br></br>
        <center><p className="sm"> <i><b>
         <h5>Specialized Eye Care Excellence at Good Sight Opticians</h5>   <br></br>
        we pride ourselves on delivering expert eye care through our team of specialized eye doctors and optometrists. With years of experience and a commitment to excellence, our professionals provide comprehensive eye examinations, accurate diagnoses, and personalized treatment plans tailored to your vision needs.
        Our specialized eye doctors and optometrists are dedicated to your eye health and visual clarity. From routine eye exams to diagnosing and managing eye conditions such as glaucoma, cataracts, and diabetic eye disease, our team utilizes advanced technology and a patient-centered approach to ensure the best possible outcomes.
        <br></br><br></br>
        <h5></h5>
        Explore a wide range of eye care services at our stores, including prescription eyewear fittings, contact lens consultations, and treatments for common eye ailments. Whether you're due for a check-up or seeking specialized care, our knowledgeable staff is here to provide compassionate guidance and professional expertise every step of the way.
        Take the first step toward healthier eyes and clearer vision by scheduling an appointment with our specialized eye doctors and optometrists at Good Sight Opticians. We are committed to delivering superior eye care in a welcoming environment, ensuring you receive the attention and treatment you deserve. </b></i></p></center>
        </Col>
       </Row>
       <br></br>
       <Row>
        <Col md={12}>
        <center><AnimationWrapper config={{color: {initial: 'black',onHover: '#FF8C00',},}}><h1  data-aos="fade-right" ><i >GlassFixes </i><i className="sblink"><Eyeglasses/></i></h1></AnimationWrapper></center>
        <div data-aos="fade-right">
        <img src={EyeRepairs} height="20%" width="100%" className="sm"/>
            <br></br>
        <div>
            <br></br>
        </div>
        </div>
        </Col>
        </Row>
        <Row data-aos="fade-left">
        <div >
        <hr class="dotted"/>
            </div>
            <br></br>
            <center><p className="sm"> <i><b>
            <h5>Glasses Repairs at Good Sight Opticians</h5>
            <br></br>  
            At Good Sight Opticians, we understand that accidents happen. That's why we offer expert glasses repair services to ensure your eyewear is back in perfect condition quickly and conveniently. Whether your glasses have a broken frame, loose screws, or other issues, our skilled technicians are here to provide efficient repairs with meticulous attention to detail.
            <br></br><br></br><h5>Why Choose , What we Repair</h5>
            <br></br>
            Our team is dedicated to preserving the longevity and functionality of your eyewear. We use quality materials and advanced techniques to restore your glasses to their original state, ensuring a seamless repair process. Whether you purchased your glasses from us or elsewhere, we welcome all customers in need of reliable repair services.
            From minor adjustments to major repairs, our services cover a wide range of issues including frame realignment, soldering, screw replacements, and more. We prioritize quick turnaround times without compromising on the quality of our workmanship, so you can get back to enjoying clear vision without delay.
            <br></br><br></br>
            <h5>Visit Us Today</h5>
            <br></br>
            Experience the convenience and expertise of our glasses repair services at Good Sight Opticians. Simply bring your damaged eyewear to our store, and our friendly staff will assess the issue and provide a solution tailored to your needs. Trust Good Sight Opticians to keep your glasses looking and feeling their best.    
                
           </b></i></p></center>
            <div >
        <hr class="dotted"/>
            </div>
        </Row>
        <br></br>
        <Row>
            <Col md={6} data-aos="fade-right">
            <center><AnimationWrapper config={{color: {initial: 'black',onHover: '#FF8C00',},}}><h1 ><i >ContactLenses Training </i><i className="sblink"><Eye/></i></h1></AnimationWrapper></center>
            <center><p className="sm" > <i><b>
                <br></br>
            At Good Sight Opticians, we believe in empowering our customers with the knowledge and skills to confidently use contact lenses. We offer comprehensive contact lenses training sessions designed to ensure comfortable and safe wear. Our experienced optometrists provide personalized instruction on insertion, removal, cleaning, and care techniques tailored to each individual's needs.
            During your contact lenses training session at our stores, you'll learn proper hygiene practices, how to handle and care for your lenses, and tips for maintaining optimal eye health. We emphasize safety and hygiene to prevent complications and promote long-term eye health. Our goal is to equip you with the knowledge and skills needed to enjoy the benefits of contact lenses while maintaining healthy eyes.
            </b></i></p></center>
            </Col>
            <Col md={6} data-aos="zoom-in">
            <img src={ContactLensesTraining} className="sm" height="100%" width="100%" style={{borderRadius:"10%"}}/>
            </Col>
        </Row>
        <br></br>
        </Container>
       <br></br>
       <Footer/>
    </div>
    
    )
}

export default Services;
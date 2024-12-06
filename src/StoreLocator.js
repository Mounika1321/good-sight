import React, { useEffect ,useState} from "react";
import NavbarHeader from "./NavbarHeader";
import Footer from "./Footer";
import Aos from "aos";
import 'aos/dist/aos.css';
import './StoreLocator.css';
import Card from 'react-bootstrap/Card';
import { Container,Row,Col, Button } from "react-bootstrap";
import { AnimationWrapper } from "react-hover-animation";
import { GeoAltFill, PersonBadgeFill, PersonFill, PhoneFill } from "react-bootstrap-icons";

  export const StoreLocator = () =>{
    const loc="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60912.23225808503!2d78.494708!3d17.411091!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9996bfffffff%3A0x25b713050c02d14a!2sGood%20Sight%20Opticals!5e0!3m2!1sen!2sau!4v1713160944941!5m2!1sen!2sau";
    const [gm, setgm] = useState(loc);
    
    const gs1=()=>{
        let newgm="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60912.23225808503!2d78.494708!3d17.411091!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9996bfffffff%3A0x25b713050c02d14a!2sGood%20Sight%20Opticals!5e0!3m2!1sen!2sau!4v1713160944941!5m2!1sen!2sau";
        setgm(newgm);
    }
    const gs3 =()=>{
       let newgm="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6429008735363!2d78.5030271746278!3d17.42891680160853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb998500000001%3A0xdc11f2c0c78c0d93!2sGood%20Sight%20Opticians!5e0!3m2!1sen!2sau!4v1713154600201!5m2!1sen!2sau";
       setgm(newgm);
    }
   const gs4=()=>{
    let newgm="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.615192909361!2d78.4245894746279!3d17.430245201570138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb912f18d1272d%3A0x8c8ee6a0e6811053!2sGood%20Sight%20Opticians!5e0!3m2!1sen!2sau!4v1713161320898!5m2!1sen!2sau";
    setgm(newgm);
   }
   const gs5=()=>{
    let newgm="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1781.3822946480784!2d78.50200737300108!3d17.490660848876693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b004c070a21%3A0x7ee0013c6a85a497!2sGood%20Sight%20Opticians!5e1!3m2!1sen!2sau!4v1733468515269!5m2!1sen!2sau";
    setgm(newgm);
   }
   const gs7=()=>{
    let newgm="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.268980166772!2d78.0843448!3d17.589957599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbfa2084a15975%3A0xc5200393f859fa96!2sGood%20Sight%20Opticians!5e0!3m2!1sen!2sau!4v1713161787037!5m2!1sen!2sau";
    setgm(newgm);
   }
   const gs7s1=()=>{
    let newgm="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1037.4800750345714!2d78.08047829911393!3d17.620839876750043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf9bb95ec920b%3A0x9709264deb6c6019!2sGOOD%20SIGHT%20OPTICIANS!5e0!3m2!1sen!2sau!4v1713161981935!5m2!1sen!2sau";
    setgm(newgm);
   }


    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);

    return(
        <div className="store">
            <NavbarHeader/>
            <div className="container">
            <br></br><br></br><br></br>   
           <center><AnimationWrapper config={{
        color: {
          initial: 'black',
          onHover: 'orange',
        },
      }}> 
      <br></br>
      <h1 data-aos="fade-up"><i>Our Stores</i></h1></AnimationWrapper></center> </div>
      <br></br>
           <Container>
           
            <Row>
                <Col data-aos="fade-right">
                <Card data-aos="fade-up">
      <Card.Header><b>Gandhinagar</b></Card.Header>
      <Card.Body>
        <Card.Title>Location:</Card.Title>
        <Card.Text>
        House No. 1-1-566/A/2, HDFC Bank Lane, Golconda X Roads, near Post Office, Gandhinagar, Musheerabad, Hyderabad, Telangana 500020, India
          <br></br><PersonFill/> Nerlakanti Ramesh Kumar<br></br>
          <PhoneFill/> 9848118844
        </Card.Text>
        <Button onClick={gs1} >      <AnimationWrapper config={{
        color: {
          initial: 'white',
          onHover: 'black',
        },
      }}><b><GeoAltFill/> Gandhinagar</b></AnimationWrapper></Button>
      </Card.Body>
      </Card>
      <br></br>
    <Card data-aos="fade-up">
      <Card.Header><b>Padmaraonagar</b></Card.Header>
      <Card.Body>
        <Card.Title>Location:</Card.Title>
        <Card.Text>
        6-1-334/14/C, beside NTR Statue, Walker Town, Padmarao Nagar, Secunderabad, Telangana 500025, India
          <br></br><PersonFill/> Nerlakanti Ramesh Kumar<br></br>
          <PhoneFill/> 9848118844
        </Card.Text>
        <Button onClick={gs3} >      <AnimationWrapper config={{
        color: {
          initial: 'white',
          onHover: 'black',
        },
      }}><b><GeoAltFill/> Padmaraonagar</b></AnimationWrapper></Button>
      </Card.Body>
    </Card>
<br></br>
<Card data-aos="fade-up">
      <Card.Header><b>Yousufguda</b></Card.Header>
      <Card.Body>
        <Card.Title>Location:</Card.Title>
        <Card.Text>
        3-250/1/C, A block, Sri Krishna Nagar, Krishna Nagar, Yousufguda, Hyderabad, Telangana 500045, India
          <br></br><PersonFill/> Nerlakanti Ramesh Kumar<br></br>
          <PhoneFill/> 9848118844
        </Card.Text>
        <Button onClick={gs4} >      <AnimationWrapper config={{
        color: {
          initial: 'white',
          onHover: 'black',
        },
      }}><b><GeoAltFill/> Yousufguda</b></AnimationWrapper></Button>
      </Card.Body>
    </Card>
    <br></br>
    <Card data-aos="fade-up">
      <Card.Header><b>Pothireddypally,Sangareddy</b></Card.Header>
      <Card.Body>
        <Card.Title>Location:</Card.Title>
        <Card.Text>
        Shop No. 8,Coral Castle Complex, X Road, Sangareddy,, Pothreddipalle, Telangana 502295, India
          <br></br><PersonFill/> Harish<br></br>
          <PhoneFill/> 9848118844
        </Card.Text>
        <Button onClick={gs7} >      <AnimationWrapper config={{
        color: {
          initial: 'white',
          onHover: 'black',
        },
      }}><b><GeoAltFill/> Pothireddypally,Sangareddy</b></AnimationWrapper></Button>
      </Card.Body>
    </Card>
    <br></br>
    <Card data-aos="fade-up">
      <Card.Header><b>Sangareddy,opp court</b></Card.Header>
      <Card.Body>
        <Card.Title>Location:</Card.Title>
        <Card.Text>
        SH 17, Habeeb Nagar, Sangareddy, Telangana 502001, India
          <br></br><PersonFill/> Tatikonda Shylaja<br></br>
          <PhoneFill/> 9848118844
        </Card.Text>
        <Button onClick={gs7s1} >      <AnimationWrapper config={{
        color: {
          initial: 'white',
          onHover: 'black',
        },
      }}><b><GeoAltFill/> Sangareddy,opp court</b></AnimationWrapper></Button>
      </Card.Body>
    </Card>
    <br></br>
    <Card data-aos="fade-up">
      <Card.Header><b>Alwal</b></Card.Header>
      <Card.Body>
        <Card.Title>Location:</Card.Title>
        <Card.Text>
        H No 1-23-515, Plot No 62, Bhoodevi Nagar, Alwal, Hyderabad - 500010 (Alwal, Secendrabad)
          <br></br><PersonFill/> Nerlakanti Radha<br></br>
          <PhoneFill/> 9848118844
        </Card.Text>
        <Button onClick={gs5} >      <AnimationWrapper config={{
        color: {
          initial: 'white',
          onHover: 'black',
        },
      }}><b><GeoAltFill/> Alwal</b></AnimationWrapper></Button>
      </Card.Body>
    </Card>
    <br></br>

          
                </Col>
               
                <Col data-aos="fade-up">
                <iframe data-aos="fade-left" src={gm} width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               
               
                 
                <br></br>
                </Col>
            </Row>
                
           
           </Container>
           <br></br>
         <Footer/>
        </div>
        
    )
}

export default StoreLocator;
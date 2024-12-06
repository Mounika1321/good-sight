import React, { useState } from "react";
import viewimg from "./About/360view.JPG";
import NavbarHeader from "./NavbarHeader";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Button, Container,Row,Col } from "react-bootstrap";
import Footer from "./Footer";
import './Lenses.css';
import Tranvideo from "./Services/Tranvideo.mp4";
import SunLensesData from './SunLensesData';
import EyeLensesData from "./EyeLensesData";


  export const Lenses = () =>{
    const [showlenses,setlenses] = useState(true);
    //setting state images as default using images path link as img1 from data. 
    const [imageUrl, setImageUrl] = useState('/SunLenses/Essilor.jpg');
    const [imageUrl1, setImageUrl1] = useState('/SunLenses/Roden.png');
    const [imageUrl2,setImageUrl2] = useState('/SunLenses/Nikon.png');
    const [imageUrl3,setImageUrl3] = useState('/SunLenses/Zeiss.png');
    const [imageUrl4,setImageUrl4] = useState('/SunLenses/Nova.png');
    const [imageUrl5,setImageUrl5] = useState('/SunLenses/Hoya.jpeg');
    const [imageUrl6,setImageUrl6] = useState('/SunLenses/Kodak.jpg');
     //setting state images as default using images path link as img1 from data .
    const [eyeimageUrl, setEyeImageUrl] = useState('/SunLenses/Essilor.jpg');
    const [eyeimageUrl1, setEyeImageUrl1] = useState('/SunLenses/Roden.png');
    const [eyeimageUrl2,setEyeImageUrl2] = useState('/SunLenses/Nikon.png');
    const [eyeimageUrl3,setEyeImageUrl3] = useState('/SunLenses/Zeiss.png');
    const [eyeimageUrl4,setEyeImageUrl4] = useState('/SunLenses/Nova.png');
    const [eyeimageUrl5,setEyeImageUrl5] = useState('/SunLenses/Hoya.jpeg');
    const [eyeimageUrl6,setEyeImageUrl6] = useState('/SunLenses/Kodak.jpg');
    
    const EyechangeImage=(imgs1,imgs2)=>
        {
            if(eyeimageUrl===imgs1)
                {
                    setEyeImageUrl(imgs2);
                    
                }
            if(eyeimageUrl!==imgs1 )
            {
                setEyeImageUrl(imgs1);
        
            }
            
        }

        const EyechangeImage1=(imgs1,imgs2)=>
            {
                if(eyeimageUrl1===imgs1)
                    {
                        setEyeImageUrl1(imgs2);
                        
                    }
                if(eyeimageUrl1!==imgs1 )
                {
                    setEyeImageUrl1(imgs1);
            
                }
                
            }
            const EyechangeImage2=(imgs1,imgs2)=>
                {
                    if(eyeimageUrl2===imgs1)
                        {
                            setEyeImageUrl2(imgs2);
                            
                        }
                    if(eyeimageUrl2!==imgs1 )
                    {
                        setEyeImageUrl2(imgs1);
                
                    }
                    
                }
                const EyechangeImage3=(imgs1,imgs2)=>
                    {
                        if(eyeimageUrl3===imgs1)
                            {
                                setEyeImageUrl3(imgs2);
                                
                            }
                        if(eyeimageUrl3!==imgs1 )
                        {
                            setEyeImageUrl3(imgs1);
                    
                        }
                        
                    }
                    const EyechangeImage4=(imgs1,imgs2)=>
                        {
                            if(eyeimageUrl4===imgs1)
                                {
                                    setEyeImageUrl4(imgs2);
                                    
                                }
                            if(eyeimageUrl4!==imgs1 )
                            {
                                setEyeImageUrl4(imgs1);
                        
                            }
                            
                        }
                        const EyechangeImage5=(imgs1,imgs2)=>
                            {
                                if(eyeimageUrl5===imgs1)
                                    {
                                        setEyeImageUrl5(imgs2);
                                        
                                    }
                                if(eyeimageUrl5!==imgs1 )
                                {
                                    setEyeImageUrl5(imgs1);
                            
                                }
                                
                            }
                            const EyechangeImage6=(imgs1,imgs2)=>
                                {
                                    if(eyeimageUrl6===imgs1)
                                        {
                                            setEyeImageUrl6(imgs2);
                                            
                                        }
                                    if(eyeimageUrl6!==imgs1 )
                                    {
                                        setEyeImageUrl6(imgs1);
                                
                                    }
                                    
                                }

   const changeImage=(imgs1,imgs2)=>
    {
        if(imageUrl===imgs1)
            {
                setImageUrl(imgs2);
                
            }
        if(imageUrl!==imgs1 )
        {
            setImageUrl(imgs1);
    
        }
        
    }
    const changeImage1=(imgs1,imgs2)=>
        {
            if(imageUrl1===imgs1)
                {
                    setImageUrl1(imgs2);
                    
                }
            if(imageUrl1!==imgs1 )
            {
                setImageUrl1(imgs1);
                
            }
            
        }
        const changeImage2=(imgs1,imgs2)=>
            {
                if(imageUrl2===imgs1)
                    {
                        setImageUrl2(imgs2);
                        
                    }
                if(imageUrl2!==imgs1 )
                {
                    setImageUrl2(imgs1);
                    
                }
                
            }
            const changeImage3=(imgs1,imgs2)=>
                {
                    if(imageUrl3===imgs1)
                        {
                            setImageUrl3(imgs2);
                            
                        }
                    if(imageUrl3!==imgs1 )
                    {
                        setImageUrl3(imgs1);
                        
                    }
                    
                }
                const changeImage4=(imgs1,imgs2)=>
                    {
                        if(imageUrl4===imgs1)
                            {
                                setImageUrl4(imgs2);
                                
                            }
                        if(imageUrl4!==imgs1 )
                        {
                            setImageUrl4(imgs1);
                            
                        }
                        
                    }
                    const changeImage5=(imgs1,imgs2)=>
                        {
                            if(imageUrl5===imgs1)
                                {
                                    setImageUrl5(imgs2);
                                    
                                }
                            if(imageUrl5!==imgs1 )
                            {
                                setImageUrl5(imgs1);
                                
                            }
                            
                        }
                        const changeImage6=(imgs1,imgs2)=>
                            {
                                if(imageUrl6===imgs1)
                                    {
                                        setImageUrl6(imgs2);
                                        
                                    }
                                if(imageUrl6!==imgs1 )
                                {
                                    setImageUrl6(imgs1);
                                    
                                }
                                
                            }
            
    

    const Eyelenses=()=>{
       setlenses(true)
       // setting back to default as img1 from data when button clicked again.
       setEyeImageUrl('/SunLenses/Essilor.jpg')
       setEyeImageUrl1('/SunLenses/Roden.png')
       setEyeImageUrl2('/SunLenses/Nikon.png')
       setEyeImageUrl3('/SunLenses/Zeiss.png')
       setEyeImageUrl4('/SunLenses/Nova.png')
       setEyeImageUrl5('/SunLenses/Hoya.jpeg')
       setEyeImageUrl6('/SunLenses/Kodak.jpg')
      }
    
    const SunLenses=()=>{
        setlenses(false)
        setImageUrl('/SunLenses/Polaroid1.png')
        setImageUrl1('/SunLenses/Tran1.png')
        
        }
 

    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
        <div>
            <NavbarHeader/>
            <br></br> <br></br> <br></br>
            <video width="100%"  className="img-fluid" alt="Overlay" height="100%" src={Tranvideo}  loop muted autoPlay></video>
            <br></br>
            <Container>
                <br></br>
                <div >
                <center>
                    <Button className="Lm" variant="dark" onClick={Eyelenses} ><i>SPECTACLE LENSES</i></Button><Button className="Lm" onClick={SunLenses} variant="warning"><i>EYE SHADES</i></Button>
                    <br></br>                                    
                </center>
                <br></br><br></br>
                {showlenses?(
                    <div>
                        <Row>
                        
                            <Col md={6} style={{backgroundColor:"#F5F5E4"}}  className="Lm">
                                <center>
                                    <h1><i>Spherical Lenses</i></h1>
                                    <p><i>
                                    Spherical lenses have a uniform curvature, either convex (outward) or concave (inward), designed to focus or diverge light. Convex lenses converge light rays to a focal point, while concave lenses spread light rays apart. These lenses are commonly used in eyewear to correct vision problems such as nearsightedness and farsightedness. They are also essential in optical instruments like microscopes, telescopes, and cameras, improving focus and image clarity. Spherical lenses offer reliable and precise optical performance for a wide range of applications.</i></p></center>
                            </Col>
                            <br></br>
                          
                            <Col md={6} style={{backgroundColor:"#D3D3D3"}} className="Lm">
                                <center>
                                    <h1><i>Aspherical Lenses</i></h1>
                                    <p><i>Aspherical lenses have a unique, non-uniform curvature that reduces optical distortions, providing clearer and more accurate images. Unlike traditional spherical lenses, they minimize aberrations, especially in the periphery, for sharper vision across the entire lens. These lenses are commonly used in eyewear, offering a more comfortable and precise fit compared to standard lenses. In photography and optical instruments, aspherical lenses improve image quality by reducing glare and chromatic aberrations. Their advanced design allows for thinner, lighter lenses, making them ideal for modern, high-performance optical applications.</i></p></center>
                            </Col>
                        </Row>
                        <br></br>

                        <div>
                            {
                                EyeLensesData.map((curelm)=>{
                                    if(curelm.ID===1){
                                        var srcimg=eyeimageUrl
                                        var a=EyechangeImage;
                                    }
                                    if(curelm.ID===2){
                                        var srcimg=eyeimageUrl1
                                        var a=EyechangeImage1;
                                    }
                                    if(curelm.ID===3){
                                        var srcimg=eyeimageUrl2
                                        var a=EyechangeImage2;
                                    }
                                    if(curelm.ID===4){
                                        var srcimg=eyeimageUrl3
                                        var a=EyechangeImage3;
                                    }
                                    if(curelm.ID===5){
                                        var srcimg=eyeimageUrl4
                                        var a=EyechangeImage4;
                                    }
                                    if(curelm.ID===6){
                                        var srcimg=eyeimageUrl5
                                        var a=EyechangeImage5;
                                    }
                                    if(curelm.ID===7){
                                        var srcimg=eyeimageUrl6
                                        var a=EyechangeImage6;
                                    }

                                    return(
                                        <div data-aos="fade-up">
                                             <br></br>
                                      <center><h1 ><i>{curelm.Title}</i></h1></center>
                                      <img src={srcimg} alt={curelm.Title}  width="100%" data-aos="fade-left" />
                                      <br></br><br></br>
                                     <center> <Button  onClick={()=>a(curelm.EyeLensesImg1,curelm.EyeLensesImg2)} >Check for Lenses</Button></center>
                                     <br></br>
                                      <p data-aos="fade-right"><i>{curelm.Description}</i></p>
                                      
                                    </div>

                                        
                                    )
                                })
                            }
                         </div>

                    </div>
                    
                ):(
                    <div>
                      
                    
                        {
                            SunLensesData.map((curelm)=>{
                                if(curelm.ID===1){
                                    var srcimg=imageUrl
                                    var a=changeImage;
                                }
                                if(curelm.ID===2){
                                    var srcimg=imageUrl1
                                    var a=changeImage1;
                                }
                                if(curelm.ID===3){
                                    var srcimg=imageUrl2
                                    var a=changeImage2;
                                }
                                return(
                                    <div  data-aos="fade-up">
                                        <br></br>
                                      <center><h1 ><i>{curelm.Title}</i></h1></center>
                                      <img src={srcimg} alt={curelm.Title} height="50%" width="100%" data-aos="fade-left" />
                                      <br></br><br></br>
                                     <center> <Button onClick={()=>a(curelm.SunLensesImg1,curelm.SunLensesImg2)} data-aos="fade-left">Check for Lenses</Button></center>
                                     <br></br>
                                      <p data-aos="fade-right"><i>{curelm.Description}</i></p>
                                      
                                    </div>
                                    
                                )
                            })
                        }

                      
                    </div>
                )
                   
                }
                </div>
            </Container>
            <br></br>
            <Footer/>
        </div>


    )
}

export default Lenses;
import React from "react";
import { useState,useEffect } from "react";
import Contactlenses1 from './GS/Contact_Lenses2.png';
import Contactlenses2 from './GS/Contact_Lenses3.png';
import Contactlenses3 from './GS/Contact_Lenses1.png';
import Contactlenses4 from './GS/Contact_Lenses4.png';
import Contactlenses5 from './GS/Contact_Lenses5.png';
import Contactlenses6 from './GS/Contact_Lenses6.png';
import Contactlenses7 from './GS/Contact_Lenses7.png';
import Contactlenses8 from './GS/Contact_Lenses8.png'

const images=[Contactlenses1,Contactlenses2,Contactlenses3,Contactlenses5];
export const ImageTransition=()=>{
    const [currentIndex,setCurrentIndex]=useState(0);
// Function to move to the next image
const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Automatically move to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Change image every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval); // Clean up the interval
  }, []);
    return(<div>
        <img src={images[currentIndex]} style={{paddingright:"100%"}}height="100%" width="50%" />

    </div>)
}

export default ImageTransition;
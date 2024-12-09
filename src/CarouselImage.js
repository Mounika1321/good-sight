import React from "react";
import Carousel from 'react-bootstrap/Carousel';



  const CarouselImage = () =>{
    return(
        <div>
              <Carousel>
                <Carousel.Item>
                  <img src='/CarouselImages/ray-ban.JPEG'alt="rayban" height="100%" width="100%"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src='/CarouselImages/Tommy.JPEG' alt="Tommy" height="100%" width="100%"/>      
                </Carousel.Item>
                <Carousel.Item>
                  <img src='/CarouselImages/Prada.JPEG' alt="Prada" height="100%" width="100%"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src='/CarouselImages/emporio-armani.JPEG' alt="ax" height="100%" width="100%"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src='/CarouselImages/oakley.JPEG' alt="oakley" height="200%" width="100%"/>      
                </Carousel.Item>
                <Carousel.Item>
                  <img src='/CarouselImages/Swaroski.JPEG' alt="swaroski" height="100%" width="100%"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src='/CarouselImages/Mauvijim.jPEG' alt="mauvi" height="100%" width="100%"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src='/CarouselImages/Boss.JPG' alt="boss" height="100%" width="100%"/>
                </Carousel.Item>
                
              </Carousel>
         </div>
    )
}

export default CarouselImage;
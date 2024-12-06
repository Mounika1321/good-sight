import React from "react";
import Carousel from 'react-bootstrap/Carousel';



  const CarouselImage = () =>{
    return(
        <div>
              <Carousel>
                <Carousel.Item>
                  <img src='/CarouselImages/ray-ban.jpeg'alt="rayban" height="100%" width="100%"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src='/CarouselImages/Tommy.jpeg' alt="Tommy" height="100%" width="100%"/>      
                </Carousel.Item>
                <Carousel.Item>
                  <img src='/CarouselImages/Prada.jpeg' alt="Prada" height="100%" width="100%"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src='/CarouselImages/emporio-armani.jpg' alt="ax" height="100%" width="100%"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src='/CarouselImages/oakley.jpeg' alt="oakley" height="200%" width="100%"/>      
                </Carousel.Item>
                <Carousel.Item>
                  <img src='/CarouselImages/Swaroski.jpeg' alt="swaroski" height="100%" width="100%"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src='/CarouselImages/Mauvijim.jpeg' alt="mauvi" height="100%" width="100%"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src='/CarouselImages/Boss.jpg' alt="boss" height="100%" width="100%"/>
                </Carousel.Item>
                
              </Carousel>
         </div>
    )
}

export default CarouselImage;
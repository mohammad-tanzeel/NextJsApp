import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default function Slider() {
  return (
    <div class="sliderP">
                <div class="one-time">
                <Carousel>                  
                  <div>
                      <img src="images/img_slide_1.jpg" alt="image3"/>
                      <p className="legend">Image 3</p>  
                  </div>
                  <div>
                      <img src="images/img_slide_1.jpg" alt="image4"/>
                      <p className="legend">Image 4</p>
                  </div>
                </Carousel>
                </div>
              </div>
  )
}

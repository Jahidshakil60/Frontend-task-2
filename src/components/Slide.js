import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from '../SlideData';
import styled from 'styled-components';



function Slide() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;
  
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
        console.log("next");
      };
    
      const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
        console.log("prev");
      };
    
      function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
      }
    
      useEffect(() => {
        setCurrentSlide(0);
      }, []);
    
      useEffect(() => {
        if (autoScroll) {
          auto();
        }
        return () => clearInterval(slideInterval);
      }, [currentSlide]);

      
    return (
        <SliderStyle>

        
         <div className="slider">
          <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
          <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
          {sliderData.map((slide, index) => {
            return (
              <div
                className={index === currentSlide ? "slide current" : "slide"}
                key={index}
              >
                {index === currentSlide && (
                  <div>
                    <img src={slide.image} alt="slide" className="image" />
                    <div className="content">
                      <h2>{slide.heading}</h2>
                      <p>{slide.desc}</p>
                      <hr />
                      <button className="btn">Get Started</button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
     </SliderStyle>
      );
}

export default Slide


const SliderStyle = styled.div`

  .slider {
  width: 90%;
  height: 90vh;
  position: relative;
  overflow: hidden;
  margin-left: 4rem;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translateX(-50%);
  transition: all 0.5s ease;
}


/* .slide img {
  // width: 100%;
  height: 100%;
  object-fit: cover;
} */

.image{
    height: 100%;
    width: 100%;
  
}

.current {
  opacity: 1;
  transform: translateX(0);
}

.content {
  position: absolute;
  top: 23rem;
  left: 5rem;
  opacity: 0;
  width: 50%;
  color: #fff;
  padding: 3rem;
  background: rgba(0, 0, 0, 0.3);
  animation: slide-up 1s ease 0.5s;
  // animation-delay: 1s;
  animation-fill-mode: forwards;
  visibility: hidden;
}


.content > * {
  color: #fff;
  margin-bottom: 1rem;
}

.current .content {
  opacity: 1;
  transform: translateX(0);
  transition: all 0.5s ease;
}

.arrow {
  border: 2px solid white;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  position: absolute;
  z-index: 999;
}
.arrow:hover {
  background-color: #fff;
  color: #777;
}

.next {
  top: 50%;
  right: 1rem;
}
.prev {
  top: 50%;
  left: 1rem;
}

hr {
  height: 2px;
  background: white;
  width: 50%;
}

.btn{
    width: 6rem;
    font-size: 0.8rem;
    background: #FF6F00;
    border: none;


}


`;
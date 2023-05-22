import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images
import Rectangle1 from '../../assets/images/carousel/Rectangle230.png'
import Rectangle2 from '../../assets/images/carousel/Rectangle231.png'
import Rectangle3 from '../../assets/images/carousel/Rectangle232.png'
import Rectangle4 from '../../assets/images/carousel/Rectangle233.png'
import Rectangle5 from '../../assets/images/carousel/Rectangle234.png'


const Hero = () => {

  let settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,

    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1,
            // centerPadding: '2px',
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1,
            // centerPadding: '2px',            
          }
        }
      ]
  };


  return (
    <div className='bg-brand mt-[5rem] min-h-[50vh] w-full flex flex-col items-center'>
        <div className="w-full md:max-w-[60rem] md:w-[90%] text-center py-[1.5rem] flex flex-col items-center justify-center">
            <span className="title font-clash text-center text-[2rem] whitespace-pre-wrap w-full md:text-[3.75rem] md:font-semibold">Photography is poetry <span className='md:inline hidden'>&</span> <span className='md:hidden inline'>and</span> beautiful untold stories</span>
            <p className='mt-[2rem] md:text-[1.3rem] text-[1.1rem]  text-center w-[85%]'>Flip through more than 10,000 vintage shots, old photograghs, historic images and captures seamlessly in one place. Register to get top access.</p>
        </div>
        <div className="carousel md:h-[70vh] md:w-[100%] w-full mx-[auto] mt-[2rem]">          
          <Slider {...settings}>            
              <div>
                  <img src= { Rectangle1 } alt="" className="md:h-full h-[20%] md:w-[95%] w-[20rem]"/>
              </div>
              <div>
                  <img src={ Rectangle2 } alt=""  className="md:h-full h-[20%] md:w-[95%] w-[20rem]"/>
              </div>
              <div>
                  <img src= { Rectangle3 } alt="" className= "md:h-full h-[20%] md:w-[95%] w-[20rem]" />
              </div>
              <div>
                  <img src={ Rectangle4 } alt="" className= "md:h-full h-[20%] md:w-[95%] w-[20rem]"/>
              </div>
          </Slider>
        </div>
    </div>
  )
}

export default Hero
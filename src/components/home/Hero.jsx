import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import "./styles.css";
import SwiperCore, { Autoplay,Pagination,Navigation } from 'swiper/core';
SwiperCore.use([Autoplay,Pagination,Navigation]);

// import required modules
import { Scrollbar } from "swiper";
import Rectangle1 from '../../assets/images/carousel/Rectangle230.png'
import Rectangle2 from '../../assets/images/carousel/Rectangle231.png'
import Rectangle3 from '../../assets/images/carousel/Rectangle232.png'
import Rectangle4 from '../../assets/images/carousel/Rectangle233.png'
import Rectangle5 from '../../assets/images/carousel/Rectangle234.png'




const Hero = () => {
  return (
    <div className='bg-brand mt-[5rem] min-h-[50vh] w-full flex flex-col items-center'>
        <div className="w-full md:max-w-[60rem] md:w-[90%] text-center py-[1.5rem] flex flex-col items-center justify-center">
            <span className="title font-clash text-center text-[2rem] whitespace-pre-wrap w-full md:text-[3.75rem] md:font-semibold">Photography is poetry <span className='md:inline hidden'>&</span> <span className='md:hidden inline'>and</span> beautiful untold stories</span>
            <p className='mt-[2rem] md:text-[1.3rem] text-[1.1rem]  text-center w-[85%]'>Flip through more than 10,000 vintage shots, old photograghs, historic images and captures seamlessly in one place. Register to get top access.</p>
        </div>
        <div className="carousel h-[70vh] md:w-[90%] w-full mx-[auto] mt-[2rem]">
          <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className='mySwiper'
          autoplay= {{
            'delay': 5000,
          }}
          navigation={true}
          >
            <SwiperSlide>
              <img src={ Rectangle1 } alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ Rectangle2 } alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ Rectangle3 } alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ Rectangle4 } alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ Rectangle5 } alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
    </div>
  )
}

export default Hero
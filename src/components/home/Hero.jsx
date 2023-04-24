import React from 'react'

const Hero = () => {
  return (
    <div className='mt-[5rem] min-h-[50vh] w-full flex flex-col items-center'>
        <div className="w-full md:max-w-[60rem] md:w-[90%] text-center py-[1.5rem] flex flex-col items-center justify-center">
            <span className="title font-clash text-center text-[2.8rem] whitespace-pre-wrap w-full md:text-[3.75rem] md:font-semibold">Photography is poetry <span className='md:inline hidden'>&</span> <span className='md:hidden inline'>and</span> beautiful untold stories</span>
            <p className='mt-[2rem] md:text-[1.3rem] text-[1.15rem]  text-center w-[85%]'>Flip through more than 10,000 vintage shots, old photograghs, historic images and captures seamlessly in one place. Register to get top access.</p>
        </div>
        <div className="carousel bg-yellow-200 h-[60vh] w-full">

        </div>
    </div>
  )
}

export default Hero
import React from 'react'
import Rectangle3 from '../../assets/images/Rectangle3.png';
import Rectangle2 from '../../assets/images/Rectangle2.png';
import Rectangle1 from '../../assets/images/Rectangle1.png';

const Featured = () => {
  return (
    <div className='pt-[4rem] md:px-[3rem] px-[1rem]'>
        <div className="title mb-[3rem]">
            <h1 className='font-semibold md:text-[2.8rem] text-[1.8rem]'>Featured Posts</h1>
        </div>
        
        <div className='before:w-full before:hidden md:before:block before:h-[0.01rem] before:bg-gray-400 after:w-full after:h-[0.01rem] after:bg-gray-400 after:hidden md:after:block'>
            <section className="article md:flex-row  flex-col flex items-center justify-between my-[4rem]">
                <div className="image_section md:mb-0 mb-[2rem]  md:w-[48%] w-full">
                    <img src={ Rectangle3 } alt="rectangle" />
                </div>
                <div className="words_section md:w-[48%] w-full">
                    <h1 className='md:block hidden mb-[2rem] font-serif font-bold text-[2rem]'>The Boolean Egyptian</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur</p>
                    <div className="authors"></div>
                </div>
            </section>
        </div>
        <div className='before:w-full before:hidden md:before:block before:h-[0.01rem] before:bg-gray-400 after:w-full after:h-[0.01rem] after:bg-gray-400 after:hidden md:after:block'>
            <section className="article md:flex-row  flex-col-reverse flex items-center justify-between mt-[4rem]">
                <div className="words_section md:w-[48%] w-full">
                    <h1 className='md:block hidden mb-[2rem] font-serif font-bold text-[2rem]'>The Boolean Egyptian</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur</p>
                    <div className="authors"></div>
                </div>
                <div className="image_section md:w-[48%] w-full mb-[2rem] md:mb-0">
                    <img src={ Rectangle2 } alt="rectangle" />
                </div>
            </section>
        </div>
        <div className='before:w-full before:hidden md:before:block before:h-[0.01rem] before:bg-gray-400 after:w-full after:h-[0.01rem] after:bg-gray-400 after:hidden md:after:block'>
            <section className="article md:flex-row flex-col flex items-center justify-between py-[4rem]">
                <div className="image_section md:w-[48%] w-full mb-[2rem] md:mb-0">
                    <img src={ Rectangle1 } alt="rectangle" />
                </div>
                <div className="words_section md:w-[48%] w-full">
                    <h1 className='hidden md:block mb-[2rem] font-serif font-bold text-[2rem]'>The Boolean Egyptian</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur</p>
                    <div className="authors"></div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Featured
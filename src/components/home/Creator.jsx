import React from 'react';
import number from '../../assets/svgs/number.svg'
import circa from '../../assets/svgs/circa.svg'
import Rectangle4 from '../../assets/images/Rectangle4.png'

const Creator = () => {
  return (
    <div className='bg-brand'>
        <div className="top-creator bg-gray-300 min-h-[60vh] md:p-[3.6rem] p-[.7rem] relative mb-[6rem]">
            <div className='flex items-top justify-between md:mb-[4rem]'>
                <span className='font-bold md:text-[3rem] text-[2rem] font-clash md:w-[40%] w-[80%]'>TOP CREATORS OF THE WEEK</span>
                <div className='hidden md:block'>
                    <svg width="10" height="165" viewBox="0 0 10 296" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="295.695" width="295.695" height="10" rx="5" transform="rotate(-90 0 295.695)" fill="#AEAEAE"/>
                        <rect y="295.695" width="47.5224" height="10" rx="5" transform="rotate(-90 0 295.695)" fill="#292929"/>
                    </svg>
                </div>
            </div>
            <div className="top-creator-text">
                <p className='text-gray-500 md:w-[60%]'>“Everything always looked better in black and white. Everything always  as if it were the first time; there’s always more people in a black and white photograph. It just makes it seem that there were more people at a gig, more people at a football match, than with colour photography. Everything looks more exciting.”– Jack Lowden</p>
            </div>
            <div className="svg flex items-end justify-end flex-col">
                <img src= { circa } alt="" className='mb-[2rem]'/>
                <img src={ number } alt="" className='h-[4rem] md:h-[6.7rem]'/>
            </div>
            <div className="img">
                <img src={ Rectangle4 } alt="" className='object-cover h-[22rem] md:h-[34rem] absolute md:left-[40%] md:top-[21%] top-[18%] left-[41%] w-[50%] md:w-[40%]'/>
            </div>
        </div>

        <section className='bg-brand newsletter md:px-[4rem] px-[1rem] md:mt-[10rem] mt-[8rem]'>
            <div className="flex flex-col md:items-center  items-start justify-center border-none md:border-solid border-[1px] border-black h-[55vh]">
                <span className="letter-header font-serif text-[2rem]">NEWSLETTER</span>
                <p className='text-[1.2rem] my-[1.8rem]'>Subscribe to get daily updates on new drops & exciting deals </p>
                <form className='flex md:flex-row flex-col items-start md:items-center gap-[1.2rem] justify-center w-[90%]'>
                    <input type="text" placeholder='ENTER YOUR EMAIL' className='placeholder:font-serif font-serif placeholder:text-gray-700 border-solid border-[1px] border-black h-[3rem] placeholder:text-[.8rem] px-[1.7rem] outline-0 w-[90%] max-w-[30rem] rounded-none'/>
                    <button type="submit" className='font-serif bg-black w-[10rem] h-[3rem] text-gray-300 text-[.8rem]'>SUBSCRIBE</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Creator
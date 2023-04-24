import React from 'react'
import arrow from '../../assets/svgs/arrow.svg';
import { Link } from 'react-router-dom';
import Rectangle5 from '../../assets/images/Rectangle5.png'

const Upcoming = () => {
  return (
    <div className='mb-[6rem]'>
        <div className="upcoming bg-gradient-to-r from-blue-300  to-yellow-600 w-full min-h-[45vh] md:p-[4.5rem] p-[2.5rem] flex items-center justify-center flex-col">
            <img src={ Rectangle5 } alt="" />
        </div>

        <div className="explore-links mt-[6rem] before:w-full before:block before:h-[0.01rem] before:bg-gray-400 after:w-full after:h-[0.01rem] after:bg-gray-400 after:block">
            <Link to='/explore'>
                <div className="market-place flex items-center justify-between px-[1.6rem] md:px-[4rem] py-[2rem]">
                    <span className='font-semibold text-[1.45rem]'>Explore marketplace</span>
                    <img src={ arrow } alt=""  className='md:h-[2.7rem] h-[2.2rem]'/>
                </div>
            </Link>
        </div>

        <div className="auction-links before:w-full before:h-[0.01rem] before:bg-gray-400 after:w-full after:h-[0.01rem] after:bg-gray-400 after:block">
            <Link to='/auction'>
                <div className="market-place flex items-center justify-between px-[1.6rem] md:px-[4rem] py-[2rem]">
                    <span className='font-semibold text-[1.45rem]'>See auctions</span>
                    <img src={ arrow } alt=""  className='md:h-[2.7rem] h-[2.2rem]'/>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Upcoming
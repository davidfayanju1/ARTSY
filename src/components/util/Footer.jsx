import React from 'react';
import { Link } from 'react-router-dom';
import mail from '../../assets/svgs/mail.svg';
import map from '../../assets/svgs/map.svg';

const Footer = () => {
  return (
    <>
      <footer className='bg-brand py-[2rem] w-full md:block hidden'>
        <div className='flex items-center justify-around h-[60vh]'>
          <div className="footer-title">
            <span className='font-bold text-[4.3rem]'>ARTSY</span>
          </div>
          <div className="links list-none text-[1.5rem] flex flex-col gap-[2rem]">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/marketplace'>Marketplace</Link></li>
            <li><Link to='/auctions'>Auctions</Link></li>
            <li><Link to='/drops'>Drops</Link></li>
          </div>

          <div className="links list-none text-[1.5rem] flex flex-col gap-[2rem]">
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/wallets'>Wallets</Link></li>
            <li><Link to='/rates'>Rates</Link></li>
            <li><Link to='/high-bids'>High bids</Link></li>
          </div>

          <div className="contact-us">
            <div className="mail flex items-center gap-[.6rem]">
              <img src={ mail } alt="" />
              <p className='text-[1.2rem]'>artsystudios@gmail.com</p>
            </div>
            <div className="mt-[2rem] map flex items-center gap-[.6rem]">
              <img src={ map } alt="" />
              <p className='text-[1.2rem]'>Lagos, Nigeria.</p>
            </div>
          </div>
        </div>
        <div className="terms text-center">
          <p className='text-[1.2rem] font-semibold text-gray-400'>Artsystudios © 2022. All Rights Reserved.</p>
        </div>
      </footer>
      <footer className=' mobile-footer p-[1.5rem] md:hidden block bg-brand'>
        <span className='text-[1.4rem]'>REACH US</span>
        <div className="contact-us mt-[2rem]">
          <div className="mail flex items-center gap-[1.2rem]">
            <img src={ mail } alt="" className='h-[2rem]'/>
            <p className='text-[1.2rem]'>artsystudios@gmail.com</p>
          </div>
          <div className="mt-[2rem] map flex items-center gap-[1.2rem]">
            <img src={ map } alt="" className='h-[3rem]'/>
            <p className='text-[1.2rem]'>Lagos, Nigeria.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
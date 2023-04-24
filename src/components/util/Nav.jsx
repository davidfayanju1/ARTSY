import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import search from '../../assets/svgs/search.svg';
import cart from '../../assets/svgs/cart.svg';
import alert from '../../assets/svgs/alert.svg';


const Nav = () => {

  const [ showNav, setShowNav ] = useState(false);

  return (
    <div className='bg-brand h-[5rem] z-50 fixed top-0 w-full flex items-center justify-between py-[1.7rem] md:px-[4.5rem] px-[1.2rem]'>
      <div className="hamburger md:hidden block cursor-pointer" onClick={() => setShowNav(true)}>
        <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 15.5H20.0312M1 8.25H20.0312M1 1H20.0312" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>        
      </div>
      
      <div className="nav-title">
        <Link to='/'><h1 className='text-[1.5rem] font-serif font-semibold'>ARTSY.</h1></Link>
      </div>
      <nav className="desktop-nav md:flex hidden">
          <ul className='flex items-center gap-[4rem] text-[1.1rem]'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/marketplace'>Marketplace</Link></li>
            <li><Link to='/auctions'>Auctions</Link></li>
            <li><Link to='/drops'>Drop</Link></li>
          </ul>
      </nav>
      {
        showNav && 

        <nav className="mobile-nav md:hidden block absolute w-full bg-brand left-0 top-0 min-h-[100vh] p-[1.5rem]">
          <div className="nav-logo flex items-center justify-between mb-[3.7rem]">
            <div className="nav-title">
              <Link to='/'><h1 className='text-[1.5rem] font-serif font-semibold'>ARTSY.</h1></Link>
            </div>
            <div className="cancel-icon cursor-pointer" onClick={() => setShowNav(false)}>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.317668 1.85151C0.216955 1.75079 0.137065 1.63123 0.0825594 1.49964C0.0280538 1.36805 1.06119e-09 1.22702 0 1.08459C-1.06119e-09 0.942158 0.0280538 0.801122 0.0825594 0.669534C0.137065 0.537946 0.216955 0.418381 0.317668 0.317668C0.418381 0.216955 0.537946 0.137065 0.669534 0.0825594C0.801122 0.0280538 0.942158 -1.06119e-09 1.08459 0C1.22702 1.06119e-09 1.36805 0.0280538 1.49964 0.0825594C1.63123 0.137065 1.75079 0.216955 1.85151 0.317668L13 11.4683L24.1485 0.317668C24.2492 0.216955 24.3688 0.137065 24.5004 0.0825594C24.6319 0.0280538 24.773 0 24.9154 0C25.0578 0 25.1989 0.0280538 25.3305 0.0825594C25.4621 0.137065 25.5816 0.216955 25.6823 0.317668C25.783 0.418381 25.8629 0.537946 25.9174 0.669534C25.9719 0.801122 26 0.942158 26 1.08459C26 1.22702 25.9719 1.36805 25.9174 1.49964C25.8629 1.63123 25.783 1.75079 25.6823 1.85151L14.5317 13L25.6823 24.1485C25.783 24.2492 25.8629 24.3688 25.9174 24.5004C25.9719 24.6319 26 24.773 26 24.9154C26 25.0578 25.9719 25.1989 25.9174 25.3305C25.8629 25.4621 25.783 25.5816 25.6823 25.6823C25.5816 25.783 25.4621 25.8629 25.3305 25.9174C25.1989 25.9719 25.0578 26 24.9154 26C24.773 26 24.6319 25.9719 24.5004 25.9174C24.3688 25.8629 24.2492 25.783 24.1485 25.6823L13 14.5317L1.85151 25.6823C1.75079 25.783 1.63123 25.8629 1.49964 25.9174C1.36805 25.9719 1.22702 26 1.08459 26C0.942158 26 0.801122 25.9719 0.669534 25.9174C0.537946 25.8629 0.418381 25.783 0.317668 25.6823C0.216955 25.5816 0.137065 25.4621 0.0825594 25.3305C0.0280538 25.1989 0 25.0578 0 24.9154C0 24.773 0.0280538 24.6319 0.0825594 24.5004C0.137065 24.3688 0.216955 24.2492 0.317668 24.1485L11.4683 13L0.317668 1.85151Z" fill="#333333"/>
              </svg>            
            </div>
          </div>
          <ul className='text-[1.25rem]' onClick={() => setShowNav(false)}>
            <li className='mb-[2rem]'><Link to='/' className='block'>Home</Link></li>
            <li className='mb-[2rem]'><Link to='/auctions' className='block'>Auctions</Link></li>
            <li className='mb-[2rem]'><Link to='/marketplace' className='block'>Marketplace</Link></li>
            <li><Link to='/drops' className='block'>Drops</Link></li>
          </ul>
        </nav>
      }
      <div className="icons flex items-center gap-[1.5rem]">
          <img src={ search } alt="" className='h-[1.5rem]'/>
          <img src={ cart } alt="" className='h-[1.5rem]'/>
          <img src={ alert } alt="" className='h-[1.6rem] md:block hidden'/>
      </div>
    </div>
  )
}

export default Nav
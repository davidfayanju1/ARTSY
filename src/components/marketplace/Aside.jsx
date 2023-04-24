import React, { useState } from 'react';
import filter from '../../assets/svgs/filter.svg';
import dropDown from '../../assets/svgs/dropDown.svg';

const Aside = () => {

  const [toggleCategoryContent, setToggleCategoryContent ] = useState(true);
  const [togglePriceContent, setTogglePriceContent ] = useState(true);
  const [toggleArtistContent, setToggleArtistContent ] = useState(true);
  const [toggleCollectionYearContent, setToggleCollectionYearContent ] = useState(true);



  return (
    <>
      <div className='after:w-full after:h-[.2rem] after:bg-gray-700 after:block'>
        <div className="h-[4rem] gap-[1rem] flex items-center justify-start">
          <img src={ filter } alt="" />
          <p className='text-[1.6rem]'>Filter</p>
        </div>
      </div>
      <div className="category-filter mb-[2rem] flex items-center justify-between mt-[3rem]">
        <span className='font-semibold text-[1.1rem]'>By category</span>
        <img src={ dropDown } alt=""  className='cursor-pointer' onClick={() =>setToggleCategoryContent(!toggleCategoryContent)}/>
      </div>
      {
        toggleCategoryContent && 

        <div className="dropdown-details my-[2rem] text-[1.1rem]">
          <div className='mb-[.7rem]'>
            <input type="checkbox"/> <span>Editorials</span>
          </div>
          <div className='mb-[.7rem]'>
            <input type="checkbox"/> <span>Fashion</span>
          </div>
          <div className='mb-[.7rem]'>
            <input type="checkbox"/> <span>Optics</span>
          </div>
          <div className='mb-[.7rem]'>
            <input type="checkbox"/> <span>Arts & Museum</span>
          </div>
          <div className='mb-[.7rem]'>
            <input type="checkbox"/> <span>Nature</span>
          </div>
        </div>
      }
      {/* price */}
      <div className="category-filter mb-[2rem] flex items-center justify-between">
        <span className='font-semibold text-[1.1rem]'>By Price</span>
        <img src={ dropDown } alt=""  className='cursor-pointer' onClick={() =>setTogglePriceContent(!togglePriceContent)}/>
      </div>
      {
        togglePriceContent && 

        <div className="dropdown-details my-[2rem] text-[1.1rem]">
          <span>$100.00 - $150.00</span>
          <div className="range">
            <input type="range"/>
          </div>
        </div>
      }
      
      <div className="category-filter mb-[2rem] flex items-center justify-between">
        <span className='font-semibold text-[1.1rem]'>By Artist</span>
        <img src={ dropDown } alt=""  className='cursor-pointer' onClick={() =>setToggleArtistContent(!toggleArtistContent)}/>
      </div>
      {
        toggleArtistContent && 

        <div className="dropdown-details my-[2rem] text-[1.1rem] cursor-pointer">
          <div className='mb-[1rem]'>
            <span>All</span>
          </div>
          <div className='mb-[1rem]'>
            <span>Below $100.00</span>
          </div>
          <div className='mb-[1rem]'>
            <span>$100.00 - $150.00</span>
          </div>
          <div className='mb-[1rem]'>
            <span>$150.00 - $200.00</span>
          </div>
          <div className='mb-[1rem]'>
            <span>Above $200.00</span>
          </div>
        </div>
      }
    </>
    
  )
}

export default Aside
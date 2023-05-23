import React, { useState } from 'react';
import vector from '../../assets/images/vector.png';

const Filter = () => {

    const [ toggle, setToggle ] = useState(false);
    const [ toggleSort, setToggleSort ] = useState(false);


  return (
    <div className='filter-component flex items-center justify-between md:mb-[8rem] mb-[3rem] w-full '>
        <div className="search md:block hidden w-[20%]">
            <input type="text" className='bg-gray-100 h-[2.8rem] w-full px-[1.4rem] placeholder:text-gray-500 outline-0 rounded-[12px]' placeholder='Search'/>
        </div>
        <div className="sort_filter md:w-[67%] w-full">
            <div className="bg-white shadow-xl px-[0.7rem] flex items-center justify-between w-full h-[3.8rem] rounded-[12px]">
                <div className='md:block hidden'>
                    <span className='text-[1.1rem] md:ml-[.7rem]'>See 1-5 of 15 results </span>
                </div>
                <div className="filter cursor-pointer md:hidden block  w-[5.5rem] relative">
                    <div className="dropdown-title flex items-center justify-center gap-[.7rem]" onClick={() => setToggle(!toggle)}>
                        <div className="name block md:text-[1.2rem] text-[1rem]">Filters</div>
                        
                        {
                            toggle ?

                            <svg width="14" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.352185 8.65584C0.577756 8.87621 0.883656 9 1.20262 9C1.52157 9 1.82747 8.87621 2.05305 8.65584L8.00726 2.83731L13.9615 8.65584C14.1883 8.86996 14.4922 8.98844 14.8076 8.98576C15.123 8.98308 15.4247 8.85946 15.6477 8.64152C15.8707 8.42358 15.9972 8.12876 16 7.82056C16.0027 7.51236 15.8815 7.21543 15.6623 6.99374L8.85769 0.344158C8.63212 0.123794 8.32622 0 8.00726 0C7.6883 0 7.3824 0.123794 7.15683 0.344158L0.352185 6.99374C0.126681 7.21417 0 7.5131 0 7.82479C0 8.13648 0.126681 8.43541 0.352185 8.65584Z" fill="#2F2F2F"/>
                            </svg>

                            :
                            <svg width="14" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.352185 0.344159C0.577756 0.123794 0.883656 0 1.20262 0C1.52157 0 1.82747 0.123794 2.05305 0.344159L8.00726 6.16269L13.9615 0.344159C14.1883 0.130039 14.4922 0.0115592 14.8076 0.0142373C15.123 0.0169155 15.4247 0.140538 15.6477 0.358478C15.8707 0.576418 15.9972 0.871238 16 1.17944C16.0027 1.48764 15.8815 1.78457 15.6623 2.00626L8.85769 8.65584C8.63212 8.87621 8.32622 9 8.00726 9C7.6883 9 7.3824 8.87621 7.15683 8.65584L0.352185 2.00626C0.126681 1.78583 0 1.4869 0 1.17521C0 0.863519 0.126681 0.564591 0.352185 0.344159Z" fill="#2F2F2F"/>
                            </svg>
                        }
                        
                    </div>

                    
                    {
                        toggle && 

                        <div className="filter-details bg-brand absolute top-[100%] left-0 min-h-[8rem] w-[11rem] p-[1rem] text-[1.1rem]" onClick={() => setToggle(false)}>
                            <span className='block mb-[.6rem]'>Editorials</span>
                            <span className='block mb-[.6rem]'>Fashion</span>
                            <span className='block mb-[.6rem]'>Optics</span>
                            <span className='block mb-[.6rem]'>Arts and Museum</span>
                            <span className='block'>Nature</span>
                        </div>
                    }
                    
                </div>

                {/* sort by */}
                <div className="sort-by cursor-pointer md:hidden block  w-[5.5rem] relative">
                    <div className="dropdown-title flex items-center justify-center gap-[.7rem]" onClick={() => setToggleSort(!toggleSort)}>
                        <div className="name block md:text-[1.2rem] text-[1rem]">Sort by</div>
                        {
                            toggleSort ?

                            <svg width="14" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.352185 8.65584C0.577756 8.87621 0.883656 9 1.20262 9C1.52157 9 1.82747 8.87621 2.05305 8.65584L8.00726 2.83731L13.9615 8.65584C14.1883 8.86996 14.4922 8.98844 14.8076 8.98576C15.123 8.98308 15.4247 8.85946 15.6477 8.64152C15.8707 8.42358 15.9972 8.12876 16 7.82056C16.0027 7.51236 15.8815 7.21543 15.6623 6.99374L8.85769 0.344158C8.63212 0.123794 8.32622 0 8.00726 0C7.6883 0 7.3824 0.123794 7.15683 0.344158L0.352185 6.99374C0.126681 7.21417 0 7.5131 0 7.82479C0 8.13648 0.126681 8.43541 0.352185 8.65584Z" fill="#2F2F2F"/>
                            </svg>

                            :
                            <svg width="14" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.352185 0.344159C0.577756 0.123794 0.883656 0 1.20262 0C1.52157 0 1.82747 0.123794 2.05305 0.344159L8.00726 6.16269L13.9615 0.344159C14.1883 0.130039 14.4922 0.0115592 14.8076 0.0142373C15.123 0.0169155 15.4247 0.140538 15.6477 0.358478C15.8707 0.576418 15.9972 0.871238 16 1.17944C16.0027 1.48764 15.8815 1.78457 15.6623 2.00626L8.85769 8.65584C8.63212 8.87621 8.32622 9 8.00726 9C7.6883 9 7.3824 8.87621 7.15683 8.65584L0.352185 2.00626C0.126681 1.78583 0 1.4869 0 1.17521C0 0.863519 0.126681 0.564591 0.352185 0.344159Z" fill="#2F2F2F"/>
                            </svg>
                        }
                    </div>

                    
                    {
                        toggleSort && 

                        <div className="filter-details bg-brand absolute top-[100%] right-0 min-h-[8rem] w-[11rem] p-[1rem] text-[1.1rem]" onClick={() => setToggleSort(false)}>
                            <span className='block mb-[.6rem]'>Prices</span>
                            <span className='block mb-[.6rem]'>Size</span>
                            <span className='block mb-[.6rem]'>Date</span>
                            <span className='block mb-[.6rem]'>Location</span>
                            <span className='block'>Auction</span>
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Filter
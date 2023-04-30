import React, { useState } from 'react'

const Filter = () => {

    const [ toggle, setToggle ] = useState(false);


  return (
    <div className='filter-component flex items-center justify-between md:mb-[8rem] mb-[3rem] w-full'>
        <div className="search md:block hidden w-[20%]">
            <input type="text" className='bg-gray-100 h-[2.8rem] w-full px-[1.4rem] placeholder:text-gray-500 outline-0 rounded-[12px]' placeholder='Search'/>
        </div>
        <div className="sort_filter md:w-[67%] w-full">
            <div className="bg-white shadow-xl px-[0.7rem] flex items-center justify-between w-full h-[3.8rem] rounded-[12px]">
                <div className='md:block hidden'>
                    <span className='text-[1.1rem] md:ml-[.7rem]'>See 1-6 of 15 results </span>
                </div>
                <div className="filter cursor-pointer md:hidden block  w-[5.5rem] relative">
                    <div className="dropdown-title flex items-center justify-between" onClick={() => setToggle(!toggle)}>
                        <div className="name block text-[1.2rem]">Filters</div>
                        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.352185 0.344159C0.577756 0.123794 0.883656 0 1.20262 0C1.52157 0 1.82747 0.123794 2.05305 0.344159L8.00726 6.16269L13.9615 0.344159C14.1883 0.130039 14.4922 0.0115592 14.8076 0.0142373C15.123 0.0169155 15.4247 0.140538 15.6477 0.358478C15.8707 0.576418 15.9972 0.871238 16 1.17944C16.0027 1.48764 15.8815 1.78457 15.6623 2.00626L8.85769 8.65584C8.63212 8.87621 8.32622 9 8.00726 9C7.6883 9 7.3824 8.87621 7.15683 8.65584L0.352185 2.00626C0.126681 1.78583 0 1.4869 0 1.17521C0 0.863519 0.126681 0.564591 0.352185 0.344159Z" fill="#2F2F2F"/>
                        </svg>
                    </div>

                    
                    {
                        toggle && 

                        <div className="filter-details bg-brand absolute top-[100%] left-0 min-h-[8rem] w-[11rem] p-[1rem] text-[1.1rem]">
                            <span className='block mb-[.6rem]'>Editorials</span>
                            <span className='block mb-[.6rem]'>Fashion</span>
                            <span className='block mb-[.6rem]'>Optics</span>
                            <span className='block mb-[.6rem]'>Arts and Museum</span>
                            <span className='block'>Nature</span>
                        </div>
                    }
                    
                </div>
                <div className="drop-down">
                    <select className='outline-0 border-solid border-[1px] border-gray-400 rounded-[8px] py-[.4rem] px-[1rem] flex items-center justify-center'>
                        <option value="Sort by">Sort by</option>
                        <option value="editorials">Editorials</option>
                        <option value="fashion">Fashion</option>
                        <option value="optics">Optics</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Filter
import React from 'react'

const Filter = () => {
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
                <div className="filter md:hidden block outline-0 border-solid border-[1px] border-gray-400 rounded-[8px]">
                    <div className="dropdown-title">
                        <div className="name">Filters</div>
                    </div>
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
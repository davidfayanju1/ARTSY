import React from 'react'
import Aside from '../components/marketplace/Aside'
import Filter from '../components/marketplace/Filter'
import Main from '../components/marketplace/Main'

const Marketplace = () => {
  return (
    <div className='bg-brand mt-[5rem] min-h-[200vh] md:px-[6rem] px-[2rem] md:py-[5rem] py-[2rem]'>
        <Filter />
        <div className="flex items-start justify-between">
            <div className='hidden md:block w-[28%]'>
                <Aside />
            </div>
            <div className='md:w-[64%] w-full'>
                <Main />
            </div>
        </div>
    </div>
  )
}

export default Marketplace
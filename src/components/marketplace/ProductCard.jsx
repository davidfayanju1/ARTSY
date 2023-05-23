import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className='card md:shadow-xl md:p-[.7rem] mb-[.7rem] bg-white min-h-[20rem] rounded-[10px]'>
        <div className="card-image mb-[.6rem]">
            <img src={ product.img } alt="" className='w-full object-cover md:h-full h-[20rem]'/>
        </div>
        <div className=" text md:flex-col flex-row flex md:items-start items-center justify-between">
          <div className="card-title md:mb-[.8rem] md:text-[1rem] text-[.8rem]">
              { product.name }
          </div>
          <div className="card-price md:font-semibold md:text-[24px] text-[1rem]">
              { product.price }
          </div>
        </div>
    </div>
  )
}

export default ProductCard
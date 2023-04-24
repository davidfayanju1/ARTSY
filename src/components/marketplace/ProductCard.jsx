import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className='card md:shadow-xl md:p-[.7rem] mb-[.7rem] bg-white min-h-[20rem] rounded-[10px]'>
        <div className="card-image mb-[.6rem]">
            <img src={ product.img } alt="" className='w-full object-cover'/>
        </div>
        <div className=" text md:flex-col flex-row flex md:items-start items-center justify-between">
          <div className="card-title md:mb-[.8rem] text-[1.3rem]">
              { product.name }
          </div>
          <div className="card-price md:font-bold md:text-[28px] text-[1.3rem]">
              { product.price }
          </div>
        </div>
    </div>
  )
}

export default ProductCard
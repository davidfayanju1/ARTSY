import React from 'react';
import Rectangle53 from '../../assets/images/products/Rectangle53.png'
import Rectangle50 from '../../assets/images/products/Rectangle50.png'
import Rectangle299 from '../../assets/images/products/Rectangle299.png'
import Rectangle49 from '../../assets/images/products/Rectangle49.png'
import ProductCard from './ProductCard';
const Main = () => {

  const products = [

    {
      img: Rectangle53,
      name: 'PHILOMENA 22',
      price: '$3.90'
    },

    {
      img: Rectangle50,
      name: 'BOOLEAN EGYPTIAN',
      price: '$8.47'
    },

    {
      img: Rectangle299,
      name: 'BLANC',
      price: '$4.55'
    },

    {
      img: Rectangle49,
      name: 'ELLIPSIA',
      price: '$5.55'
    }
  
  ]

  return (
    <div className="card" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem'}}>
      {
        products.map((product) => (

          <div key={product.name}>
              <ProductCard product={ product }/>
          </div>

        ))
      }
    </div>
  )
}

export default Main
import React from 'react'
import './Products.css'

const Products = ({ data }) => {
  return (
    <div className='productCon'>
        <div className='productFirstCon'>
            <img src={data.img} alt='Foto'/>
        </div>
        <div className='productSecCon'>
            <h3>{data.name}</h3>
            <h1>{data.price}</h1>
        </div>
    </div>
  )
}

export default Products
import React from 'react'
import './Products.css'
import Foto from '../../Assests/Foto.png'


const Products = () => {
  return (
    <div className='productCon'>
        <div className='productFirstCon'>
            <img src={Foto} alt='Foto'/>
        </div>
        <div className='productSecCon'>
            <h3>Jacket KLS Beige</h3>
            <h1>$105</h1>
        </div>
    </div>
  )
}

export default Products
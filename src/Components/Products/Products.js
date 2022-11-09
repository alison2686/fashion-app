import React from 'react'
import './Products.css'

const Products = (props) => {
    console.log(props.data)
  return (
    <div className='productCon'>
        <div className='productFirstCon'>
            <img src={props.data.img} alt='Foto'/>
        </div>
        <div className='productSecCon'>
            <h3>{props.data.name}</h3>
            <h1>{props.data.price}</h1>
        </div>
    </div>
  )
}

export default Products
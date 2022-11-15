import React, { useState, useEffect } from 'react'
import '../Styles/Home.css'
import Products from '../Components/Products/Products'
import ProductData from '../Utils/productData'
import axios from 'axios'

const Home = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    
  }, [])

  return (
    <div className='homeCon'>
      <div className='homeFirstCon'>
        <h1>FABLE OF KLASSIK</h1>
        <h3>Jackets KLS</h3>
      </div>
      <div className='homeSecondCon'>
        {
          ProductData.map((item, id) => (
            <Products data={item} key={id} />
          ))
        }
      </div>
    </div>
  )
}

export default Home
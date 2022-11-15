import React, { useState, useEffect } from 'react'
import '../Styles/Home.css'
import Products from '../Components/Products/Products'
// import ProductData from '../Utils/productData'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Home = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    (async () => {
      try{
        const data = await axios.get('https://charming-ray-flannel-nightgown.cyclic.app/api/products')
        setProduct(data.data.data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  console.log('products:', product)

  return (
    <div className='homeCon'>
      <div className='homeFirstCon'>
        <h1>FABLE OF KLASSIK</h1>
        <h3>Jackets KLS</h3>
      </div>
      <div className='homeSecondCon'>
        {
          product.map((item, id) => (
            <Link to='/single-product'>
              <Products data={item} key={id} />
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Home
import React from 'react'
import '../Styles/Home.css'
import Products from '../Components/Products/Products'

const Home = () => {
  return (
    <div className='homeCon'>
      <div className='homeFirstCon'>
        <h1>FABLE OF KLASSIK</h1>
        <h3>Jackets KLS</h3>
      </div>
      <div className='homeSecondCon'>
        <Products />
        <Products />
        <Products />
      </div>
    </div>
  )
}

export default Home
import React from 'react'
import Logo from '../../Assests/logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navCon'>
      <div className='logoCon'>
        <img src={Logo} alt='fable logo' />
      </div>
      <div className='midCon'>
        <Link to='/'>
          <p>COLLECTIONS</p>
        </Link>
        <Link to='/cart'>
          <p>CUSTOMER</p>
        </Link>
        <Link to='/sales'>
        <p>SALES</p>
        </Link>
      </div>
      <Link to='/single-product'>
        <div className='lastCon'>ITEMS</div>
      </Link>
    </div>
  )
}

export default Navbar
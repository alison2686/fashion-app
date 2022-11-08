import React from 'react'
import Logo from '../../Assests/logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div>
        <img src={Logo} alt='fable logo' />
      </div>
      <div>
        <p>Collections</p>
        <p>Customer</p>
        <p>Sales</p>
      </div>
      <div>Items</div>
    </div>
  )
}

export default Navbar
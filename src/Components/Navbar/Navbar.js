import React from 'react'
import Logo from '../../Assests/logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navCon'>
      <div className='logoCon'>
        <img src={Logo} alt='fable logo' />
      </div>
      <div className='midCon'>
        <p>COLLECTIONS</p>
        <p>CUSTOMER</p>
        <p>SALES</p>
      </div>
      <div className='lastCon'>ITEMS</div>
    </div>
  )
}

export default Navbar
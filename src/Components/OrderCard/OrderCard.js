import React from 'react'
import OrderFoto from '../../Assests/Rectangle 65.png'
import './OrderCard.css'

const OrderCard = () => {
  return (
    <div className='orderCardGenCon'>
      <div className='orderCardImgCon'>
        <img src={OrderFoto} alt='order' />
      </div>
      <div>
        <div>
          <h1>Jacket KLS</h1>
          <p></p>
          <p></p>
        </div>
        <div>
          <h1> Size: M</h1>
          <h1>Color: Black</h1>
          <h1>Quantity: 1</h1>
        </div>
        <div>
          <h1>Price: $105</h1>
          <button>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default OrderCard
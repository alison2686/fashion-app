import React from 'react'
import Form from '../Components/Form/Form'
import OrderCard from '../Components/OrderCard/OrderCard'
import Sum from '../Components/Sum/Sum'
import '../Styles/Cart.css'

const Cart = () => {
  return (
    <div>
      <div>
        <Form />
      </div>
      <div>
        <div>
          <OrderCard />
        </div>
        <div>
          <Sum />
        </div>
      </div>
    </div>
  )
}

export default Cart
import React from 'react'

const Sum = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Summary:</h1>
          <h1> $340</h1>
        </div>
        <div>
          <h1>Delivery:</h1>
          <h1>$0</h1>
        </div>
        <div>
          <h1>Promocode:</h1>
          <h1>$0</h1>
        </div>
      </div>

      <div>
        <h1>Total</h1>
        <h1>$340</h1>
      </div>

      <div>
        <input placeholder='Enter Promocode'/>
        <button>Apply</button>
      </div>
    </div>
  )
}

export default Sum
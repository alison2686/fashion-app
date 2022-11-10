import React from 'react'
import '../Styles/SingleProduct.css'
import FotoDetail from '../Assests/FotoDetail.png'

const SingleProduct = () => {
  return (
    <div>
      <h5 className='productTag'>Fable of Klassik - Jacket</h5>

      <div className='sinProdCon'>
        <div className='sinProdImgCon'>
          <img src={FotoDetail} alt='product-detail' />
        </div>
        <div className='sinProdDesCon'>
          <h1 className='sinProdHeading'>JAСKET KLS</h1>
          <h2 className='sinProdPrice'>$105</h2>
          <button className='sinProdBtn'>Add to cart</button>
          <div>
            <h4 className='sinProdDesHeading'>Product Info</h4>
            <p className='sinProdDes'>Jacket made of a loose fit makes the product a universal element of the upper layer. Two patch pockets and one hidden pocket. Branded lining with FABLE pattern. Shoulder pads of medium rigidity for shaping.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
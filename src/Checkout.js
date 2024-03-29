import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    const [{basket}, dispath] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img 
                className='checkout__ad'
                src='https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_NotApproved._TTW_.jpg'
                alt=''
            />
            <div >
                <h2 className='checkout__title'>
                    Your Shopping Basket
                </h2>

              
                {basket.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
        </div>

        <div className='checkout__right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout
import React from 'react'
import './Home.css'
import Product from './Product.js'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
          <img 
          className='home__image'
          src='https://m.media-amazon.com/images/I/612AqhqwllL._SX3000_.jpg' alt='amazon' 
          />

          <div className='home__row'>
              <Product 
                id="1234523"
                title="The Lean Startup: Now Constant Innovation Creates Radically Successful Business Paperbacks"
                price={29.99}
                image="https://cdn01.sapnaonline.com/product_media/9780670921607/md_9780670921607.jpg"
                rating={5}
              />
              <Product 
                id="384692"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with k-beater, Dough Hook and shisk, 5 Litre Glass Bowl"
                price={239.0}
                rating={4}
                image="https://m.media-amazon.com/images/I/61etD4-IrPL.jpg"
              />
          </div>

          <div className='home__row'>
              <Product 
                id="2434234"
                title="Samsung LCKJFDIUDSH Smart Watch Water Proofed"
                price={199.99}
                rating={3}
                image="https://media.wired.com/photos/612914e967168b68f9ececa6/master/pass/Gear-Samsung-Galaxy-Watch4-and-Watch4-Classic-SOURCE-Samsung.jpg"
              />
              <Product 
                id="23445930"
                title="Amazon Echo (3rd generation) Smart Speaker with Alexa, Charcea\Fabric"
                price={98.99}
                rating={5}
                image="https://alboom.com/bazar/610-large_default/amazon-echo-3rd-generation-.jpg"
              />
              <Product 
                id="3249874848"
                title="New Apple iPad Pro (12.9-Inch, Wi-fi, 128GB) - Silver (4th Generation)"
                price={598.99}
                rating={4}
                image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-ipad-pro-12-wifi-silver-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1626721066000"
              />
          </div>
          
          <div className='home__row'>
              <Product 
                id="9838347"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra wide Dial WQHD 5120 x 1440"
                price={1094.98}
                rating={4}
                image="https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SX450_.jpg"
              />
          </div>
          

      </div>
    </div>
  )
}

export default Home
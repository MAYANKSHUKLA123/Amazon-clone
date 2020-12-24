import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './checkoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket,user},dispatch]=useStateValue();
    return (
        <div className="checkout">
                <div className="checkout_left">
                    <img className="checkout_ad" 
                      src="https://blog.hubspot.com/hubfs/Banner%20Ads%20Explained%20in%20500%20Words%20or%20Less.png"></img>

                <div>
                <h3>Hello,{user?.email}</h3>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                    {basket.map(item=>(
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            rating={item.rating}
                        />
                    )

                    )}
                    
                </div>
                </div>
                <div className="checkout_right">
                    <Subtotal/>
                    <h2>The subtotal go here</h2>
                </div>

            </div>
    
    )
}

export default Checkout
 
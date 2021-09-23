import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    const shipping = 15;
    const tax = (total + shipping) * 10;
    const grandTotal = total + shipping + tax;

    
    return (
        <div>
            <div className='cart-container'>
            <h3>Order Summary</h3>
            <h5>Items Order: {props.cart.length}</h5>
            </div>
            <div className='cart-items'>
            <p>Shipping: {shipping.toFixed(2)}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Price: {total.toFixed(2)}</p>
            <hr />
            <h4>Order Total: {grandTotal.toFixed(2)}</h4>
            <button className='btn-review'>Riview Your Order</button>
           </div>

        </div>
    );
};

export default Cart;
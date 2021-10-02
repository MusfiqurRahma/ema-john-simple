import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(props);
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price*product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = total>0?15:0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;

    
    return (
        <div>
            <div className='cart-container'>
            <h3>Order Summary</h3>
            <h5>Items Order: {totalQuantity}</h5>
            </div>
            <div className='cart-items'>
            <p>Shipping: ${shipping.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Price: ${total.toFixed(2)}</p>
            <hr />
            <h4>Grand Total Price: ${grandTotal.toFixed(2)}</h4>
                {props.children}
           </div>

        </div>
    );
};

export default Cart;
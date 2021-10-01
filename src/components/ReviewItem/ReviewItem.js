import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, key } = props.product;
    const { handleRemove } = props;
    return (
        <div className='product'>
            <div>
            <h3 className='product-name'>{name}</h3>
            <h4>Price: {price}</h4>
            <h5>Quantity: {quantity}</h5>
            <button onClick={()=>handleRemove(key)} className='btn-regular'>Remove</button>
           </div>
        </div>
    );
};

export default ReviewItem;
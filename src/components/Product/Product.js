import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props);
    const { name, img, seller, price, stock,star} = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <div>
            <img src={img} alt="" />
            </div>
            <div>
            <h4 className="product-name">{name}</h4>
            <p><small>By: {seller}</small></p>
            <p>Price:$ {price}</p>
                <p>Only {stock} left in stock-Order Soon</p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating><br /> <br />
                <button className='btn-regular'
                    onClick={() => props.handleAddToCart(props.product)}>{cartIcon}add to cart</button>
            </div>
        </div>
    );
};

export default Product;
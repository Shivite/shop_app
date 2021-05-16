import React from 'react'
import Ratings from './Ratings';

export default function Product(props) {
    const {product} = props;
    return (
        <div key = {product._id} className = "card">
                  <a href= {`product/${product._id}`}>
                      <img className= "medium" src={product.image} alt={product.image} />
                  </a>
                  <div className = "card-body">
                      <a href= {`product/${product._id}`}><h2>{product.name}</h2></a>
                      <Ratings ratings = {product.rating} numReviews = {product.numReviews}/>
                      <span className="price">${product.price} reviews</span>
                  </div>
                </div>
    )
}

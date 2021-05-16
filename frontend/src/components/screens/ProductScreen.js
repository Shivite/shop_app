import React from 'react'
import Products from '../Product'
import data from  '../../data';
import Ratings from '../Ratings';
import { useParams } from "react-router";
export default function ProductScreen(props) {
    let { id } = useParams();
    const product = data.products.find(x => x._id == id);
    if(!product){
        return <div> Product not found! </div>
    }
    return (
        <div>
            <div className= "row">
                <div className = "col-2">
                    {/* 1:30 */}
                   <img className="large" src = {product.image} alt= {product.name} />
                </div>
                <div className = "col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Ratings ratings = {product.rating} numReviews = {product.numReviews} />
                        </li>
                        <li>
                            Price: ${product.price}
                        </li>
                        <li>
                            Discription: 
                            <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className = "col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className = "row">
                                    <div>Price:</div> 
                                    <div className="price">${product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className = "row">
                                    <div>Status:</div> 
                                    <div>${product.inStoke >0  ? <span className = "success"> In Stoke </span> : <span className = "error">Product out of stoke </span>}</div>
                                </div>
                            </li>
                            <li>
                                <button className="primary">Add to cart </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

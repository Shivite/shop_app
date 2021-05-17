import React from 'react'
import { useParams  } from "react-router-dom";
import data from '../../data';
import { Link } from 'react-router-dom';
import Product from '../Product';
import Ratings from '../Ratings';
export default function ProductScreen() {
    let { id } = useParams();
    console.log(id)
    const product = data.products.find(x =>  x._id === id);
    if(!product){
        return <div>Sorry, Product is out of stock !</div>
    }
    return (
        <div className = "row top">
            <Link to={`/`}>Back to result page</Link>
            <div className = "col-2">
                <img className = "large" src={product.image} alt= {product.name} />
            </div>
            <div className = "col-1">
                <ul>
                    <li><h2>{ product.name }</h2></li>
                    <li><Ratings rating={product.rating} numReviews={product.numReviews}/></li>
                    <li>Price: ${product.price}</li>
                    <li>Discription:<p>{product.description}</p></li>
                </ul>
            </div>
            <div className = "col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <div className="row">
                                <div>Price</div>
                                <div className="price">${product.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>Status</div>
                                <div>
                                    {product.countInStock > 0 ? (<span className="success">Product in stock</span>) : (<span className="error">Out of stock</span>)}
                                </div>
                            </div>
                        </li>
                        <li>
                            <button className= "primary block"> Add to cart </button>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

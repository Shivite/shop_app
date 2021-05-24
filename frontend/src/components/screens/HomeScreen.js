import React, { useEffect, useState } from 'react'
import Product from '../Product'
import data from '../../data'
import axios from 'axios'
import MessageBox from '../MessageBox'
import LoadingBox from '../LoadingBox'

export default function HomeScreen() {
  const [products, setProducts] = useState([])
  const [error, setErrors] = useState(false)
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    const fetchData = async () => {
      try{
        setLoading(true)
        const {data} = await axios.get('/api/products');
        setProducts(data);
        setLoading(false)
      }
      catch(err){
        setErrors(err)
      }
    }
    fetchData();
  }, []);
    return (
      <div>
          {
            loading ? (<LoadingBox /> )
            :
            error ? (<MessageBox />)
            :          
           <div className="row center">
                {products.map((product) => (
                    <Product key = {product._id} product = {product} />
                ))}
            </div>
          }
        </div>
    )
}

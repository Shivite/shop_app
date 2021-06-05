import React, { useEffect} from 'react'
import Product from '../Product'
import axios from 'axios'
import MessageBox from '../MessageBox'
import LoadingBox from '../LoadingBox'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../actions/listProducts'

export default function HomeScreen() {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const {products} = productList; 
  // const [error, setErrors] = useState(false)
  // const [loading, setLoading] = useState(false)
  useEffect(()=>{
    dispatch(listProducts())
  }, []);
    return (
      <div>
          {
                      
           <div className="row center">
                {products.map((product) => (
                    <Product key = {product._id} product = {product} />
                ))}
            </div>
          }
        </div>
    )
}

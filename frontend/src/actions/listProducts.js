import Axios from "axios";
import { PRODUCT_LIST_REQUEST } from "../constants/productConstant"

export const listProducts = () => async(dispatch)=>{
    const {data} = await Axios.get('/api/products');
    dispatch({
        type: PRODUCT_LIST_REQUEST,
        payload: data
    })
}
import { PRODUCT_LIST_REQUEST } from "../constants/productConstant";

export const productReducer = (state = {products:[]}, action) =>{
    console.log("action----", action)
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {products: action.payload}
        default :
            return state;
    }
}
import { ADD_ITEM_TO_CART, ADD_ITEM_TO_CART_ERROR, CLEAR_CART, INCREASE_QUANTITY_OF_ITEM, REDUCE_QUANTITY_OF_ITEM, REMOVE_ITEMS_FROM_CART } from '../constants/constants'

const initialState = {
    productsAdded: [],
    error: {}
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            return { ...state, productsAdded: [...state.productsAdded, action.payload]}

        case ADD_ITEM_TO_CART_ERROR:
            return { ...state,error: action.payload }
        
        case REMOVE_ITEMS_FROM_CART:
            let data = state.productsAdded;
            if(action.payload){
                for(let i = 0;i<data.length;i++){
                    if(parseInt(action.payload)=== parseInt(data[i].id)){
                        data.splice(i,1);
                        console.log(data);
                        return { ...state, productsAdded:data}
                    }
                }
            }
            break;
        
        case REDUCE_QUANTITY_OF_ITEM:
            let data2 = state.productsAdded;
            if(action.payload){
                for(let i = 0;i<data2.length;i++){
                    if(action.payload === data2[i].id){
                        data2[i].quantity = data2[i].quantity - 1;
                        return { ...state, productsAdded:data2}
                    }
                }
            }
            break;

        case INCREASE_QUANTITY_OF_ITEM:
            let data3 = state.productsAdded;
            if(action.payload){
                for(let i = 0;i<data3.length;i++){
                    if(action.payload === data3[i].id){
                        data3[i].quantity = data3[i].quantity + 1;
                        return { ...state, productsAdded:data3}
                    }
                }
            }
            break;

        case CLEAR_CART:
            return { ...state, productsAdded: []}

        default:  
            return state;
    }
}

export default cart;
import { PLACE_ORDER } from "../constants/constants"

const initialState = {
    orderHistory : [],
    myOrders : []
}

const orderHistory = (state= initialState, action) => {
    switch(action.type){
        case PLACE_ORDER:
            return {...state, orderHistory: action.payload, myOrders : [...state.myOrders, action.payload]}
        
        default:
            return state;
    }
}

export default orderHistory
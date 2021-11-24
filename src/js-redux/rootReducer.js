import { combineReducers } from "redux";
import product from './reducers/products'
import cart from './reducers/cart';
import orderHistory from './reducers/orderHistory';

const rootReducer = combineReducers({
    product,
    cart,
    orderHistory
});

export default rootReducer;
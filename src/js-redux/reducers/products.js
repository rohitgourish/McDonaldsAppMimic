import { GET_DATA, GET_DATA_ERROR} from '../constants/constants'

const initialState = {
    products:[],
    error:{}
}

const product = (state= initialState, action) =>{
    switch(action.type){
        case GET_DATA:
            return {...state, products: action.payload}

        case GET_DATA_ERROR:
            return {...state, error:action.payload}
        
        default:
            return state;
    }
}

export default product
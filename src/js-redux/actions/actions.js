import { GET_DATA, 
        GET_DATA_ERROR, 
        ADD_ITEM_TO_CART, 
        ADD_ITEM_TO_CART_ERROR,
        GET_DATA_FROM_CART,
        GET_DATA_FROM_CART_ERROR, 
        REMOVE_ITEMS_FROM_CART,
        REDUCE_QUANTITY_OF_ITEM,
        INCREASE_QUANTITY_OF_ITEM,
        PLACE_ORDER,
        CLEAR_CART
    } from "../constants/constants";

import data from '../../data/data'

export const getData = () => async dispatch => {
    try {
        const res = data;
        dispatch({type: GET_DATA, payload: res})
    } catch (error) {
        dispatch({type: GET_DATA_ERROR, payload: "Some error occoured"})
    }
}

export const addItemToCart = (id) => async dispatch => {
    try {
        let response;
        for(var i = 0;i<data.length;i++){
            if(id === data[i].id)
                response = data[i];
        }
        console.log(response);
        response["quantity"] = 1;
        dispatch({ type: ADD_ITEM_TO_CART, payload: response })
    } catch (error) {
        dispatch({ type: ADD_ITEM_TO_CART_ERROR, payload: "Some error occoured"})
    }
}

export const removeItemsFromCart = (id) => async dispatch => {
    try {
        console.log(id);
        dispatch({type:REMOVE_ITEMS_FROM_CART, payload: id});
    } catch (error) {
        dispatch({});
    }
}

export const reduceQuantity = (id) => async dispatch => {
    try {
        console.log(id);
        dispatch({type:REDUCE_QUANTITY_OF_ITEM, payload: id});
    } catch (error) {
        dispatch({});
    }
}

export const increaseQuantity = (id) => async dispatch => {
    try {
        console.log(id);
        dispatch({ type : INCREASE_QUANTITY_OF_ITEM, payload: id});
    } catch (error) {
        dispatch({});
    }
}

export const getDataFromCart = () => async dispatch => {
    try {
        dispatch({ type : GET_DATA_FROM_CART })
    } catch (error) {
        dispatch({ type : GET_DATA_FROM_CART_ERROR})
    }
}

export const placeOrder = (data) => async dispatch => {
    try {
        dispatch({ type: PLACE_ORDER, payload: data});
    } catch (error) {
        dispatch({})
    }
}

export const clearCart = () => async dispatch => {
    try {
        dispatch({ type: CLEAR_CART});
    } catch (error) {
        dispatch({})
    }
}
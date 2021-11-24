import React, { Fragment} from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { removeItemsFromCart, reduceQuantity, increaseQuantity} from '../../../../js-redux/actions/actions';
import DecrementIncrement from './DecrementIncrement';

const MyCartItems = ({product,removeItemsFromCart, index, reduceQuantity, increaseQuantity}) => {

    const removeFromCart = async (id) => {
        await removeItemsFromCart(id);
        
    }
    
    const reduceQuantityFromCart = async (id) =>{
        reduceQuantity(id);
    }

    const addQuantityFromCart = async (id) =>{
        increaseQuantity(id);
    }

    //console.log("rohit");
    return (
        <Fragment>
            <tr>
                <th scope="row" key = {parseInt(product.id)}>{index+1}</th>
                <td><img src={`/images/${product.url}`} className="center" style={{ alignContent: "center" }} height="60px" width="70px" alt={product.name} /></td>
                <td><b>{product.name}</b></td>
                <td><b>₹{product.price}</b></td>
                {
                    <DecrementIncrement product = {product}  reduceQuantityFromCart= {reduceQuantityFromCart} addQuantityFromCart={addQuantityFromCart} />
                }
                <td><button className="btn btn-warning" onClick={() => removeFromCart(product.id)}>REMOVE FROM CART</button></td>
            </tr>
        </Fragment>
    )
}

// MyCartItems.propTypes = {
//     products: PropTypes.array.isRequired,
//     removeItemsFromCart : PropTypes.func.isRequired,
// }

export default connect(null,{removeItemsFromCart,reduceQuantity, increaseQuantity})(MyCartItems)


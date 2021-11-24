import React from 'react';
import { connect,useSelector } from 'react-redux';
import MyCartItems from './MyCartItems';
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {placeOrder, clearCart} from '../../../../js-redux/actions/actions';

toast.configure()

const MyCartComponent = ({cart, placeOrder, clearCart}) => {

    console.log(cart);
    const history = useHistory();
    
    const totalMoney = useSelector(state => {
        let temp = 0;
        state.cart.productsAdded.forEach(obj => {
            temp += obj.price * obj.quantity
        })
        return temp;
    });

    const orderPlacedPage = () => {
        toast.success(`Order Placed Successfully `,{ position: toast.POSITION.TOP_RIGHT, autoClose: 2500});
        placeOrder(cart.productsAdded);
        clearCart()
        history.push("/order_placed");
    }

    const totalBillAmount = () => {
        let total_cost = 0;
        for(var i = 0; i<cart.productsAdded.length; i++)
            total_cost = total_cost + cart.productsAdded[i].price

        return (<tr key = {10000}>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><h5><b>Total Cost = </b></h5></td>
            <td><h5><b>₹{totalMoney}</b></h5><p><b>(inclusive of all taxes)</b></p>
                <button className="btn btn-success" onClick = {()=>orderPlacedPage()}  style={{float:"right", marginRight:"100px",padding:"15px",}}>
                    Place Order
                </button>
            </td>
        </tr>)
    }

    return (
        <>
            { cart.productsAdded.length>0 ? (
                <>
                <table className="table">
                    <thead>
                        <th>#</th>
                        <th></th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                    </thead>
                    <tbody>
                        { cart.productsAdded.map((item, index)=>(
                            <MyCartItems key = {item.name} index ={index} product = {item} />
                        ))}
                        {totalBillAmount()}
                    </tbody>
                </table>
                </>
            )  : (<h3>YOUR CART IS EMPTY  <span>&#128532;</span></h3>) } 
        </>
    )
}

const mapStateToProps = state => ({
    cart : state.cart
})

export default connect(mapStateToProps,{placeOrder, clearCart})(MyCartComponent)

import React from 'react'
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

const OrderPlacedComponent = (props) => {

    const history = useHistory();
    
    const renderOrderedItems = () => {
        return props.cart.map((product,index)=>{
            return (
                <tr>
                    <th>{index+1}</th>
                    <th>{product.name}</th>
                    <th>{product.quantity}</th>
                    <th>₹{product.price * product.quantity}</th>
                </tr>
            )
        })
    }
    
    const totalCost = () => {
        let total_cost = 0;
        props.cart.forEach(element => {
            total_cost += element.price * element.quantity;
        });
        return (
            <tr>
                <td></td>
                <td></td>
                <th>Bill Amount = </th>
                <th>₹{total_cost}</th>
            </tr>
        )
    }

    return (
        <div>
            <h2 style={{color:"#008000 "}}>Hurray!!! <span>&#128513;</span></h2>
            <h3 style={{color:"#008000 "}}>Your Order Has Been Placed Successfully</h3>
            <br></br>
            <h4>Order Summary</h4>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
            <table className="table">
                <thead>
                    <tr>
                        <th>SNo</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {renderOrderedItems()}
                    {totalCost()}
                </tbody>
            </table>
            </div>
            </div>
            </div>
            <button className = "btn btn-danger" onClick={()=>history.push("/")}>GO TO HOME PAGE</button>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state.cart.productsAdded);
    return {
        cart : state.orderHistory.orderHistory
    }
}

export default connect(mapStateToProps,{})(OrderPlacedComponent)

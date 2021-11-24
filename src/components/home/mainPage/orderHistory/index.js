import React from 'react'
import { connect } from 'react-redux'
import orderHistory from '../../../../js-redux/reducers/orderHistory'

function OrderHistoryComponent(props) {
    
    // const renderOrderedItems = (data) => {
    //     return data.map((product,index)=>{
    //         return (
    //             <tr>
    //                 <th>{index+1}</th>
    //                 <th>{product.name}</th>
    //                 <th>{product.quantity}</th>
    //                 <th>₹{product.price * product.quantity}</th>
    //             </tr>
    //         )
    //     })
    // }

    const renderOrderedItems = (data) => {
        return data.map((product, index)=>(
            <tr>
                <th>{index+1}</th>
                <th>{product.name}</th>
                <th>{product.quantity}</th>
                <th>{product.price * product.quantity}</th>
            </tr>
        ))
    }

    const totalCost = (data) => {
        let total_cost = 0;
        data.forEach(element => {
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

    const renderIndex = () =>{
        return props.myOrders.map((ele, index)=>{
            return index+1;
        })
    }

    const renderTables = () => {
        return props.myOrders.slice(0).reverse().map((data,index)=>(
        <>
        <div className="col-lg-1">
            <b>{index+1}.</b>
        </div>
        <div className="col-lg-7">
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
                    {renderOrderedItems(data)}
                    {totalCost(data)}
                </tbody>
            </table>
        </div>
        <div className="col-lg-4"></div>
        </>
        ))
    }
 
    return (
        <>
           { props.myOrders && props.myOrders.length >0 ? (
            <>
            <h4>Order Summary</h4>
            <br></br>
            <div className="container-fluid">
                <div className="row">
                    {renderTables()} 
                </div>
            </div>
            </>) : (<h3>No Order History <span>&#128532;</span></h3>)}
        </>
    )
}

const mapStateToProps = state => {
    return {
        myOrders : state.orderHistory.myOrders
    }
}

export default connect(mapStateToProps,null)(OrderHistoryComponent)

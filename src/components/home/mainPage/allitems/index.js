import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { getData, addItemToCart } from '../../../../js-redux/actions/actions'
import { connect } from 'react-redux';
import './index.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const AllItemsComponent = ({ products, getData,addItemToCart,cart }) => {

    useEffect(() => {
        getData();
    }, [getData])

    const addItem = (data) => {
        console.log(data,"rohit");
        let array = [];
        for(var i = 0;i<cart.length;i++){
            array.push(cart[i].id)
        }
        if(array.includes(data.id)){
            toast.error(`${data.name} Already Added To Cart!`,{autoClose:2500});
        } else {
            addItemToCart(data.id);
            toast.success(`${data.name} Added To Cart!`,{ position: toast.POSITION.TOP_RIGHT, autoClose:2500});
        }
    }

    const renderAllItems = () => {
        if (products.length !== 0) {
            return products.map(product => {
                return (<div className="col-lg-3 cardDesign" key={product.id}>
                    <img src={`/images/${product.url}`} className="center" style={{ alignContent: "center" }} height="120px" width="150px" alt={product.name} />
                    <h5>{product.name}</h5>
                    <p><b>PRICE - ₹{product.price}</b></p>
                    <p className="description">{product.description}</p>
                    <button className="btn btn-warning" onClick={() => addItem(product)}>ADD TO CART</button>
                </div>)
            })
        }
    }

    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row">
                    {renderAllItems()}
                </div>
            </div>
        </Fragment>
    )
}

AllItemsComponent.propTypes = {
    products: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    products: state.product.products,
    cart : state.cart.productsAdded
})

export default connect(mapStateToProps, { getData, addItemToCart })(AllItemsComponent)

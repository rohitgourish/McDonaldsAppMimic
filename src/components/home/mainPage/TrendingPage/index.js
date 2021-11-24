import React,{useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { getData,addItemToCart } from '../../../../js-redux/actions/actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const TrendingComponent = (props) => {

    useEffect(() => {
        props.getData();
        
    }, [getData]);

    const addItem = (data) => {
        console.log(data);
        let array = [];
        for(var i = 0;i<props.cart.length;i++){
            array.push(props.cart[i].id)
        }
        if(array.includes(data.id)){
            toast.error(`${data.name} Already Added To Cart!`,{autoClose: 2500});
        } else {
            props.addItemToCart(data.id);
            toast.success(`${data.name} Added To Cart!`,{ position: toast.POSITION.TOP_RIGHT,autoClose: 2500});
        }
    }

    const description = () => {
        console.log("rohit");
    }

    const renderAllItems = () => {    
        if (props.products.length !== 0) {
            return props.products.map(product => {
                //console.log(product.tags);
                if(product["tags"].includes("trending")){
                let imgUrl = "/images/" + product.url;
                return (<div className="col-lg-3 cardDesign" onClick = {()=>description()} key={product.id}>
                    <img src={imgUrl} className="center" style={{ alignContent: "center" }} height="120px" width="150px" alt={product.name} />
                    <h5>{product.name}</h5>
                    <p><b>Price - ₹{product.price}</b></p>
                    <p className="description">{product.description}</p>
                    <button className="btn btn-warning" onClick={() => addItem(product)}>ADD TO CART</button>
                </div>)
                }
            })
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {renderAllItems()}
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        products: state.product.products,
        cart : state.cart.productsAdded
    }
}

export default connect(mapStateToProps, {getData,addItemToCart})(TrendingComponent);
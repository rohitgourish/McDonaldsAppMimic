import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { getData,addItemToCart } from '../../../../js-redux/actions/actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const BeveragesComponent = (props) => {

    useEffect(() => {
        props.getData();
        
    }, [getData]);

    const addItem = (data) => {
        console.log(data);
        let array = [];
        for(var i = 0;i<props.cart.length;i++){
            console.log(props.cart[i]);
            console.log(props.cart);
            // console.log(props.cart[i].id);
            array.push(props.cart[i].id);
        }
        console.log(array);
        if(array.includes(data.id)){
            toast.error(`${data.name} Already Added To Cart!`,{autoClose:2500});
        } else {
            props.addItemToCart(data.id);
            toast.success(` ${data.name} Added To Cart!`,{ position: toast.POSITION.TOP_RIGHT, autoClose:2500});
        }
    }

    const renderAllBeverages = () => {
        if (props.products.length !== 0) {
            return props.products.map(product => {
                //console.log(product.tags);
                if(product["tags"].includes("beverages")){
                let imgUrl = "/images/" + product.url;
                return (<div className="col-lg-3 cardDesign" key={product.id}>
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
                    {renderAllBeverages()}
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

export default connect(mapStateToProps, {getData,addItemToCart})(BeveragesComponent)

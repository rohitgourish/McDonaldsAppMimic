import React,{useState} from 'react'
import './index.css';

function DecrementIncrement(props) {
        
    const [quant,setQuant] = useState(props.product.quantity);

    const plus = ()=> {
        props.addQuantityFromCart(props.product.id);
        setQuant(quant + 1);
    }

    const minus = () =>{
        if(quant>1){
            props.reduceQuantityFromCart(props.product.id);    
            setQuant(quant - 1);
        }
    }

    return (
        <>
            <td>
            <form>
                <button type="button" className="btn btn-info incrementDecrement" style={{paddingTop:"3px", paddingBottom:"3px", paddingLeft:"10px", paddingRight:"10px"}} onClick = {() => minus()}>
                    -  
                </button>
                <span>
                    <b> {quant} </b>
                </span>
                <button type="button" className="btn btn-info incrementDecrement" style={{paddingTop:"3px", paddingBottom:"3px", paddingLeft:"10px", paddingRight:"10px"}} onClick={()=>plus()}>
                    +  
                </button>
            </form>
            {/* <div class="btn-group">
                <button style={{borderRadius:"50%"}} onClick = {() => minus()}  className="btn btn-danger">-</button>
                <h4><b> {quant} </b></h4>
                <button style={{borderRadius:"50%"}} onClick={()=>plus()} className="btn btn-primary">+</button>
            </div> */}
            </td>
            <td><b> ₹{props.product.price * quant}</b></td>
        </>
    )
}

export default DecrementIncrement

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.css'

class HeaderComponent extends Component {
    render() {
        return (
            <>
                <nav className="fff navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link className="navbar-brand" style = {{color:"white"}} to="/"><b>Mc Donalds</b></Link>
                        </div>
                        <div className="kkk nav navbar-right">
                            <Link className="glyphicon glyphicon-user" style={{marginRight:"20px",color:"white", marginTop:"10px"}} to="/order_history"><p><b>Order History</b></p></Link>
                            <Link className="glyphicon glyphicon-user" style={{marginRight:"20px",color:"white", marginTop:"10px"}} to="/contact"><p><b>Contact</b></p></Link>
                            <Link className="glyphicon glyphicon-user" style={{marginRight:"20px",color:"white"}} to="/my_cart"><button className="btn btn-warning">MY CART<i class="material-icons">store</i></button></Link>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default HeaderComponent
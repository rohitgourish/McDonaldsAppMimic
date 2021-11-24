import React, { Component } from 'react'

export class WelcomeComponent extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className = "row">
                    <div className = "col-lg-2"></div>
                    <div className="col-lg-10">
                        <h1 style={{backgroundColor:"red", color:"#ffcc00", marginRight:"290px"}} >WELCOME TO MC DONALDS</h1>
                        <img style={{marginLeft:"60px"}} src = "/images/McDonalds.png"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default WelcomeComponent

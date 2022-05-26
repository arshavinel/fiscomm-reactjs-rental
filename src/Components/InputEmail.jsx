import React from "react";
import "./InputEmail.scss"


const InputEmail = () =>{
    return(
        <div className="form-group">
            <input type="email" className="inputEmail" id="" placeholder="Enter your email here*"/>
            <button className="subscribeBtn"> Subscribe now </button>
        </div>
    )
}

export default InputEmail;
import React from "react";

let InputEmail = ()=>{
    return(
        <div className="form-group">
            <input type="email" className="form-control" id="" placeholder="Enter your email here*"/>
            <button type="submit" className="btn mt-2 text-white bg-secondary" style={{ width:"100%"}}>Subscribe now</button>
        </div>
    )
}

export default InputEmail;
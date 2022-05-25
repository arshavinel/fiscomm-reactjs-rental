import React from "react";
import "./Footer.scss";
import InputEmail from "./InputEmail";



const Footer = ()=>{
    return(
        <div className="container ">
            <div className=" main-footer "  >
                <div className="row">
                    <div className="col" >
                        <span className="contact span-footer">Contact us</span>
                        <hr className="hr-footer"></hr>
                        <div className="main-in-footer">
                            <p>Ask us anything! We’re here to <br></br>answer any questions you have. </p>
                            <p>Email: info@mysite.com</p>
                        </div>

                    </div>
                    <div className="col" >
                        <span className="span-footer">Follow us</span>
                        <hr className="hr-footer"></hr>
                        <div className="main-in-footer">
                            <div className="cards">
                                <div className="cardImage card1">
                                    <img src={require('../img/booking2.webp')} alt='booking' />
                                </div>
                                <div className="cardImage">
                                    <img src={require('../img/facebook2.webp')} alt='facebook' />
                                </div>
                                <div className="cardImage">
                                    <img src={require('../img/instagram2.webp')} alt='instagram' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <span className="span-footer">Subscribe for Updates & Offers</span>
                        <hr className="hr-footer"></hr>
                        <div className="main-in-footer">
                            <InputEmail/>
                        </div>
                    </div>
                    <p style={{color:'grey'}}>© Be my guest in Rio. Proudly created with <a href="/" style={{color:'grey'}}>Wix.com</a> </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;

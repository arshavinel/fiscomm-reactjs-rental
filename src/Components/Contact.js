import React from "react";

import './Contact.scss'
import Header from "./Header";

import Wave from '../img/wave.jpg'
import Footer from "./Footer";

const Contact = () => {
    return (
        <div className="contact-page">
            <Header />
            <div className="contact-content">
                <div className="bg-img">
                    <h2>Contact Us</h2>
                    <img id="wave-img" src={Wave} alt={'wave-img'}></img>
                </div>

                <div className="contact-input-form">
                    <div className="content">
                        {/* ask-us / input */}
                        <div className="ask-us">
                            <div className="form-title">
                                <h3>
                                    Ask Us <br />
                                    Anything!
                                </h3>
                                <hr id="askus-hr"></hr>
                            </div>

                            <div className="form-input">
                                <form>
                                    <input type={'text'} placeholder={'Name...'} required></input>
                                    <input type={'Email'} placeholder={'Email...'} required></input>
                                    <textarea id="input-message" name="input-message" placeholder="Type your message here..." rows="4" cols="50" required></textarea>
                                </form>
                                <button type="submit">Submit</button>
                            </div>
                        </div>

                        {/* how to get here */}
                        <div className="howto-get-here">
                            <div className="howto-page-content">

                                <div className="howto-left-content">
                                    <div className="howto-title">
                                        <div className="title-content-text">
                                            <h3>
                                                How to <br /> 
                                                Get Here
                                            </h3>
                                        </div>
                                        <div className="hr-line">
                                            <hr id="howto-hr"></hr>
                                        </div>
                                    </div>

                                    <div className="howto-address">
                                        <p id="howto-location">
                                            <span>
                                                R. Frame de Morá 
                                            </span>
                                            
                                            <span>
                                                Floor 6  
                                            </span>                               

                                            <span>
                                                Rio de Janeiro - Ipanema 
                                            </span>                                

                                            <span>
                                                Cell: 123-456-7890
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <div className="howto-google-maps">
                                    <div className="google-map">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                                            title="google-maps"
                                            width="550"
                                            height="250"
                                            frameBorder="0"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            aria-hidden="false"
                                            tabIndex="0"
                                            />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Contact
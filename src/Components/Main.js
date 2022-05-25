import "./Main.css"
import React from "react"

export default function Main() {

    return(
            <main className="main__content">
                <form className="main__content__form">
                    <div className="main__content__form_inputs">
                   <label htmlFor="checkIn">Check In</label>
                   <input type="date" id="checkIn" name="checkIn" placeholder="DD MM YYYY" />
                   </div>

                   <div className="main__content__form_inputs">
                   <label htmlFor="checkOut">Check Out</label>
                   <input type="date" id="checkOut" name="checkOut" placeholder="DD MM YYYY"/>
                   </div>

                   <div className="main__content__form_inputs">
                   <label htmlFor="adults">Adults</label>
                   <input type="number" id="adults" name="adults" placeholder="1" step="1" />
                    </div>

                    <div className="main__content__form_inputs">
                   <label htmlFor="kids">Kids</label>
                   <input type="number" id="kids" name="kids" placeholder="0" step="1" />
                    </div>
                   <button className="search-btn" type="submit">Search</button>
                </form>

                <section>
                    <h4 className="section__title">A Home in the Heart of the City</h4>
                    <p className="section__p">Stay in a beautiful highrise in Ipanema just off the beach close to many world-class cafes and restaurants. Enjoy Bossa Nova with a cold beer!</p>

                    <div className="section__1__left">
                        <div id="our_apartment"><span>Our<br></br>Apartment</span></div>
                        <img src={require('../img/room.jpg')} alt="wix_image" />
                    </div>

                    <div className="section__1__right">
                        <img src={require('../img/bed.jpg')} alt="wix_image" />
                        <span>The apartment is spacious with high ceilings, large windows, an open balcony and a beautiful view of the beach. Stay cool with central A/C and wind-down comfortably in the queen sized bedroom.
                         <br></br>
                        <a href="/">BOOK NOW</a>
                        </span>
                    </div>

                </section>
                <div className="white-space"></div>
                <section>
                    <div className="section__2__first">
                    <img src={require('../img/sea.jpg')} alt="wix_image" />
                        <div id="location"><span>Location</span></div>

                    </div>
                    <div className="section__2__second">
                         <p>Conveniently located just opposite Leblon Beach in Ipanema, our apartment will sweep you into the charm and excitements of Rio! Dine at one of our neighborhood’s many world-renowned restaurants, enjoy fresh-squeezed juices from one of the colourful stalls along the beach, and don’t miss live bossy-nova show in one of the local bars.</p>
                         <a href="/">VIEW MAP</a>
                    </div>

                    <img src={require('../img/people.jpg')} alt="wix_image" style={{width:'335px'}} />
                    <div className="section__2_third">
                        <h4 className="section__2_title">About Camila & Tiago</h4>
                        <span>Hi, my name is Camila and I’m a nutritionist from the south of Brazil. I moved to the beautiful Ipanema neighborhood two years ago with my husband, Tiago. We live in a homie highrise just off the Leblon Beach, but in the summer we travel!</span>
                        <a href="/">STAY WITH US </a>
                    </div>
                </section>
            </main>
    )
}
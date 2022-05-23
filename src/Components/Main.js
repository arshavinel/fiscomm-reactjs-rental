import "./Main.css"

export default function Main() {

    return(
            <main className="main__content">
                <form className="main__content__form">
                   <label htmlFor="checkIn">Check In</label>
                   <input type="date" id="checkIn" name="checkIn" placeholder="DD MM YYYY" />

                   <label htmlFor="checkOut">Check Out</label>
                   <input type="date" id="checkOut" name="checkOut" placeholder="DD MM YYYY"/>

                   <label htmlFor="adults">Adults</label>
                   <input type="number" id="adults" name="adults" placeholder="1" step="1" />

                   <label htmlFor="kids">Kids</label>
                   <input type="number" id="kids" name="kids" placeholder="0" step="1" />

                   <button className="search-btn" type="submit">Search</button>
                </form>

                <section>
                    <h4 className="section__title">A Home in the Heart of the City</h4>
                    <p className="section__p">Stay in a beautiful highrise in Ipanema just off the beach close to many world-class cafes and restaurants. Enjoy Bossa Nova with a cold beer!</p>

                    <div className="section__1__left">
                        <span>Our Apartment</span>
                        <img src="#" alt="wix_image" />
                    </div>

                    <div className="section__1__right">
                        <img src="#" alt="wix_image" />
                        <span>The apartment is spacious with high ceilings, large windows, an open balcony and a beautiful view of the beach. Stay cool with central A/C and wind-down comfortably in the queen sized bedroom.</span>
                        <a href="/">BOOK NOW</a>
                    </div>
                </section>

                <section>
                    <div className="section__2__first">
                        <img src="#" alt="wix_image" />
                        <span>Location</span>

                    </div>
                    <div className="section__2__second">
                         <p>Conveniently located just opposite Leblon Beach in Ipanema, our apartment will sweep you into the charm and excitements of Rio! Dine at one of our neighborhood’s many world-renowned restaurants, enjoy fresh-squeezed juices from one of the colourful stalls along the beach, and don’t miss live bossy-nova show in one of the local bars.</p>
                         <a href="/">VIEW MAP</a>
                    </div>

                    <div className="section__2_third">
                        <img src="#" alt="wix_image" />
                        <h4 className="section__2_third_header">About Camila & Tiago </h4>
                        <p className="section__2_third_p">Hi, my name is Camila and I’m a nutritionist from the south of Brazil. I moved to the beautiful Ipanema neighborhood two years ago with my husband, Tiago. We live in a homie highrise just off the Leblon Beach, but in the summer we travel!</p>
                    </div>
                </section>
            </main>
    )
}
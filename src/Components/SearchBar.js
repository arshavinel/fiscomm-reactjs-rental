import React from 'react'
import "./SeachBar.css"

export default function SeachBar() {


    return(

        <form className="main__content__form">
            <div className="main__content__form_inputs">
            <label htmlFor="checkIn">Check In</label>
            <input type="date" id="checkIn" name="checkIn" />
       </div>

       <div className="main__content__form_inputs">
            <label htmlFor="checkOut">Check Out</label>
            <input type="date" id="checkOut" name="checkOut" />
       </div>

       <div className="main__content__form_inputs">
            <label htmlFor="adults">Adults</label>
            <input type="number" id="adults" name="adults" placeholder="1" step="1" />
        </div>

        <div className="main__content__form_inputs">
            <label htmlFor="kids">Kids</label>
            <input type="number" id="kids" name="kids" placeholder="0" step="1" />
        </div>
            <button className="search-btn" type="submit" style={{fontSize:'12px'}}>Search</button>
    </form>

    )
}
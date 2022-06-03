import React from 'react'
import SeachBar from './SearchBar'
import './ApartmentMain.scss';
import {BsSnow} from 'react-icons/bs';
import {AiOutlineWifi} from 'react-icons/ai'

const ApartmentMain = ()=>{
return(
<div className="apartment_page_main">
    <div className="main_content">
        <h3 style={{color:'grey'}}>Our Rooms</h3>
        <hr />
        <SeachBar />
        <hr />

        <div className="rooms">

            <div className="room_image junior">
            </div>

            <div className="room_detail">
                <h3>Junior Suite</h3>
                <p>Our Junior Suites offer breathtaking views of the city skyline.</p>
                <ul>
                    <li> Size: 260 sq ft</li>
                    <li> Beds: 2 Double(s)</li>
                </ul>
                <hr />
                <div className="amenities">
                    <div className="amenity"><BsSnow size='1.5rem'/></div>
                    <div className="amenity"><AiOutlineWifi size='1.5rem'/></div>
                    <div className="amenity"></div>
                    <div className="amenity"></div>
                    <div className="amenity"></div>
                </div>
            </div>

            <div className="room_price">
                <p>From</p>
                <ul>
                    $250
                </ul>
                <button className="more-info-btn" type="submit" style={{fontSize:'12px'}}>Contact</button>
            </div>

           
        </div>
        <hr />

        <div className="rooms">
            <div className="room_image standard">

            </div>
            <div className="room_detail">
                <h3>Standard room</h3>
                <p>Our Standard Rooms are the perfect combination of function and comfort.</p>
                <ul>
                    <li> Size: 230 sq ft</li>
                    <li> Beds: 1 Double(s)</li>

                </ul>
                <hr />
                <div className="amenities"></div>
                

            </div>
            <div className="room_price">
                <p>From</p>
                <ul>
                    $150
                </ul>
                <button className="more-info-btn" type="submit" style={{fontSize:'12px'}}>Contact</button>
            </div>
        </div>
        <hr />

        <div className="rooms">
            <div className="room_image superior">
            </div>

            <div className="room_detail">
                <h3>Superior Room</h3>
                <p>Our Superior Rooms are comfortable, roomy and elegant.</p>
                <ul>
                    <li> Size: 280 sq ft</li>
                    <li> Beds: 1 King(s)</li>
                </ul>
                <hr/>
                <div className="amenities"></div>

            </div>
            <div className="room_price">
                <p>From</p>
                <ul>
                    $350
                </ul>
                <button className="more-info-btn" type="submit" style={{fontSize:'12px'}}>Contact</button>
            </div>
        </div>
        <hr />

    </div>
</div>
)
}

export default ApartmentMain
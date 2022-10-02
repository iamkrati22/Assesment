import React from "react";
import {FaCalendar, FaSearchLocation} from "react-icons/fa";
import './stylesheets/Event.css';
function Event(){
    return <div>
        <div class = "event-sections">
            <div class = "event-section-1">
              <div class = "es-1-top">
                <h1>Birthday Bash</h1>
                <h4>Hosted by <span>Elysia</span></h4>
              </div>
              <div class = "es-1-bottom">
                 <div class = "esb">
                    <div class = "icons">
                        <FaCalendar/>
                    </div>
                    <div class = "esb-txt">
                        <h3>18 August 6:00PM</h3>
                        <h4>to <span>19 August 1:00PM</span> UTC +10</h4>
                    </div>
                 </div>
                 <div class = "esb">
                    <div class = "icons">
                        <FaSearchLocation/>
                    </div>
                    <div class = "esb-txt">
                        <h3>Street name</h3>
                        <h4>Suburb State, Postcode</h4>
                    </div>
                 </div>
              </div>
                
            </div>
            <div class = "event-section-2">
                <img src = "event-img.png"></img>
            </div>
        </div>
    </div>
}
export default Event;

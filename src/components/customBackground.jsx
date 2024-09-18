import React from "react";
import '../App.css';
import '../clockscript';
import { BG_data } from "./BackgroundData";

function CustomBackground(){
    return(
        <section className="backgroundContainer">

            {/* <img src="src/assets/background.jpg" alt=" Your custom background" /> */}
          
            {BG_data.map((val,key) => {
                return (
                    <img src={val.bg_image} alt="Your Custom Image" />

                );
            })}
            
            <div className="clock">
        
                <ul className="time">
                    <li id="hours">
                        00
                    </li>
                    <li>
                        : 
                    </li>

                    <li id="mins">
                        00
                    </li>
                    
                </ul>
                <h2 id="date" className="date">none </h2>
        
            </div>
            <script src="../clockscript.js"></script>
            
        </section>

    );
}   


export default CustomBackground;

import React from "react";
import '../App.css';
import '../clockscript';
// import clock from "./digi-clock";

function CustomBackground(){
    return(
        <section className="backgroundContainer">

            <img src="src/assets/background.jpg" alt=" Your custom background" />
          

            
            <div className="clock">
        
                <ul className="time">
                    <li id="hours">
                        4
                    </li>
                    <li>
                        : 
                    </li>

                    <li id="mins">
                        33
                    </li>
                    
                </ul>
                <h2 id="date" className="date">July 33 </h2>
        
            </div>
            <script src="../clockscript.js"></script>
            
        </section>

    );
}   


export default CustomBackground;

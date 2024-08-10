import React from "react";

import '../App.css';

import { RecentlyViewedData } from "./RecentlyViewedData";

import Widgets from './widgets';

// {SidebarData.map((val,key) => { 
//     return(
//         <li className="Sidebar-link" key={key} onClick={() => {window.location.pathname = val.link}}>

//             <div className="icon">
//                 {val.icon}
//             </div>

//             <div className="title" >
//                 {val.title}
//             </div>

//     </li>
//     );
// })}



function RecentlyViewed(){

    return(
        <div className="recentlyViewed">
            
            <h3>Recently Viewed</h3>
            
            <ul className="viewList">
                
                {RecentlyViewedData.map((val,key) => {
                    return(
                        <li className="list-items">
                            
                            <div className="link">
                                <a href="{val.link}">{val.title}</a>
                            </div>
                            <div className="data">
                                {val.date}
                            </div>

                        </li>
                        
                    );
                })}
                
                </ul>
                

        </div>
        



    );
}


export default RecentlyViewed;
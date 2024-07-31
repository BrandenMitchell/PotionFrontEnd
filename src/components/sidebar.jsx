import React from "react";

import '../App.css';

import {SidebarData} from "./sidebarData";


function Sidebar(){
    return(
        <div className="Sidebar">
            <ul className="Sidebar-shelf">
                <li className="Sidebar-search">
                    <div className="icon">
                        <i class='bx bx-search' ></i>
        
                    </div>
                    
                    <div className="search" >
                        <input type="search" placeholder="Search" />
                    </div>
                </li>
                
                {SidebarData.map((val,key) => { 
                    return(
                        <li className="Sidebar-link" key={key} onClick={() => {window.location.pathname = val.link}}>
    
                            <div className="icon">
                                {val.icon}
                            </div>

                            <div className="title" >
                                {val.title}
                            </div>

                    </li>
                    );
                })}
            </ul>
        </div>
    );
 }

export default Sidebar;

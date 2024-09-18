import React,{useEffect, useState} from "react";

import '../App.css';

import {SidebarData} from "./sidebarData";
import $ from 'jquery';


function Sidebar(){
    const[isOpen,setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    // 
    useEffect(() => {
        $('#collapse_icon').on('click',function() {
            $('.Sidebar').toggleClass('Sidebar-open');
            $('.nav').toggleClass('nav-open');
        })
    });
    
    //  style={{width: isOpen ? "270px" : "70px" }} 

    return(
        <div className="Sidebar">
            
            <ul className="Sidebar-shelf">
                <li className="Sidebar-link logo">
                        <div className="icon logo">
                            <i class='bx bx-align-left' id="collapse_icon" onClick={toggle}></i>
                        </div>
                        <div className="title logo">
                            Potion
                        </div>
                        {/* <div className="collapse-icon">
                            <i class='bx bx-right-arrow-alt'></i>
                        </div> */}
                </li>
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

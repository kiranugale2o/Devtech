import React from "react";
import './navbar.css';
 export default function Navbar(){

    return(
        <>
            <div className="navbar">
                <div className="logo">DevTech</div>
                 <div className="bar-icon">
                 <svg xmlns="http://www.w3.org/2000/svg" id="bar" width="36" height="46" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
                 </div>
            </div>
        </>
    );
 }
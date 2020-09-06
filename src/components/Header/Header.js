import React from 'react'
import './Header.css';
import Nav from './Nav/Nav';
const Header = ()=> {
    return (
        <div className="header_flex">
           <div className="logo">
               <img src="https://uilogos.co/img/logomark/treva.png" alt="logo"/>
           </div>
           <div className="menu"> 
               <Nav/> 
            </div>
           <div> right</div>
        </div>
    )
}

export default Header
import React from 'react'
import './Header.css';
import Nav from './Nav/Nav';
import Fab from '@material-ui/core/Fab';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/icons/AccountCircle';
const Header = ()=> {
    return (
        <div className="header_flex">
           <div className="logo">
               <img src="https://uilogos.co/img/logomark/treva.png" alt="logo"/>
           </div>
           <div className="menu"> 
               <Nav/> 
            </div>
           <div className="header_right"> 
              <div className="header_input"> 
                <input type="text" placeholder="Search here..."/>
                <Fab color="primary" aria-label="Add" size="small">
                    <SearchIcon />
                 </Fab>
               </div>
               <div className="header_info">
                 <Avatar/>
                 khurshed 
               </div>
            </div>
        </div>
    )
}

export default Header
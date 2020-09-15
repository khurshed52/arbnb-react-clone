import React from 'react';
import { Link } from 'react-router-dom';
import HotelIcon from '@material-ui/icons/Hotel';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import MouseIcon from '@material-ui/icons/Mouse';
const Nav = (props)=> {
    return(
        <>
         <Link to="/"> <HotelIcon/>Place to Stay</Link>
         <Link to="/experiences"> <PeopleOutlineIcon/>Experiences</Link>
         <Link to="/"> <MouseIcon/>Online Experiences</Link>
        </>
    )
}

export default  Nav
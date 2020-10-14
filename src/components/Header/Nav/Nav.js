import React from 'react';
import { Link } from 'react-router-dom';
import HotelIcon from '@material-ui/icons/Hotel';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import MouseIcon from '@material-ui/icons/Mouse';

const Nav = (props)=> {
    return(
        <>
         <Link to="/"> <HotelIcon/> <span> Place to Stay</span></Link>
         <Link to="/experiences"> <PeopleOutlineIcon/> <span> Experiences </span></Link>
         <Link to="/contact"> <MouseIcon/><span> Online Experiences</span> </Link>
        </>
    )
}

export default  Nav
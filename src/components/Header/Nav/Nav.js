import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props)=> {
    return(
        <>
         <Link to="/"> Place to Stay</Link>
         <Link to="/"> Experiences</Link>
         <Link to="/"> Online Experiences</Link>
        </>
    )
}

export default  Nav
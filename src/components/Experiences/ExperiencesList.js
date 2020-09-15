import React from 'react'
import './Experiences.css';
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';

import 'animate.css';

const ExperiencesList = (props)=> {
    const handleClick = ()=> {
        store.addNotification({
            title: "success!",
            message: "Favourite Added",
            type: "success",
            insert: "top",
            container: "bottom-left",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              showIcon: true
            }
          });
    }
    return (
        <>
        <div className="experiences_list item">
            <figure> 
                <img src={props.img_Url} alt="ban" />
                <IconButton onClick={handleClick}>
                    <FavoriteBorderIcon fontSize="large" />
                </IconButton>
            </figure>
          <h6>{ props.title} </h6>
          <p> { props.price}</p>
        </div>
        </>
    )
}

export default ExperiencesList

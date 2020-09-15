import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Slider from "react-slick";
import Date from '../Date/Date'
const useStyles = makeStyles({
    btn: {
      background: 'linear-gradient(45deg, #17c9bc  30%, #23c5ba  90%)',
      border: 0,
      borderRadius: 3,
      color: 'white',
      padding: '10px 30px',
      marginTop:'10px',
    },

    heading: {
        color: '#067675',
        fontSize: '2em'
    },
  });


const Banner = (props)=>{
    const classes = useStyles();
    const [showSearch, setShowSearch] = useState(false);
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed:3000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
            <div className='banner__search'>
                  {showSearch && <Date/>}
            <Button onClick={() => setShowSearch(!showSearch)} variant="contained" className="search_date">  {showSearch ? "Hide" : "Search Dates"} </Button>
            </div>
           
            <Slider {...settings}>
             <div className="item">
                <div className="banner">
                     <img src="https://a0.muscache.com/im/pictures/4b5b2c9e-9d97-4fb7-8826-1529dacb13df.jpg?im_w=720" alt="banner" />
                    <div className="banner_strip">
                        <h3>{props.title}</h3>
                        <p>{props.desc}</p>
                        <Button variant="contained" className={classes.btn}>
                            Explore By  <Icon>arrow_right_alt</Icon>
                        </Button>
                    </div>
                </div>
             </div>
             <div className="item">
                <div className="banner">
                     <img src="https://a0.muscache.com/im/pictures/16df1348-322f-4482-8694-3ccbdbf078b1.jpg?im_w=720" alt="banner" />
                    <div className="banner_strip">
                        <h3>{props.title}</h3>
                        <p>{props.desc}</p>
                        <Button variant="contained" className={classes.btn}>
                            Explore By 1  <Icon>arrow_right_alt</Icon>
                        </Button>
                    </div>
                </div>
             </div>
             <div className="item">
                <div className="banner">
                     <img src="https://a0.muscache.com/im/pictures/4b5b2c9e-9d97-4fb7-8826-1529dacb13df.jpg?im_w=720" alt="banner" />
                    <div className="banner_strip">
                        <h3>{props.title}</h3>
                        <p>{props.desc}</p>
                        <Button variant="contained" className={classes.btn}>
                            Explore By 2 <Icon>arrow_right_alt</Icon>
                        </Button>
                    </div>
                </div>
             </div>
             <div className="item">
                <div className="banner">
                     <img src="https://a0.muscache.com/im/pictures/4b5b2c9e-9d97-4fb7-8826-1529dacb13df.jpg?im_w=720" alt="banner" />
                    <div className="banner_strip">
                        <h3>{props.title}</h3>
                        <p>{props.desc}</p>
                        <Button variant="contained" className={classes.btn}>
                            Explore By 3 <Icon>arrow_right_alt</Icon>
                        </Button>
                    </div>
                </div>
             </div>
            </Slider>
        </div>
    )
}

export default Banner



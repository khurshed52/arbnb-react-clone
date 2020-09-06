import React from 'react'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Slider from "react-slick";

const Banner = (props)=>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed:3000,
        slidesToShow: 1,
        slidesToScroll: 1,

      };

    return (
        <div>
            <Slider {...settings}>
             <div className="item">
                <div className="banner">
                     <img src="https://a0.muscache.com/im/pictures/4b5b2c9e-9d97-4fb7-8826-1529dacb13df.jpg?im_w=720" alt="banner" />
                    <div className="banner_strip">
                        <h3>{props.title}</h3>
                        <p>{props.desc}</p>
                        <Button variant="contained" color="secondary">
                            Explore By  <Icon>arrow_right_alt</Icon>
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
                        <Button variant="contained" color="secondary">
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
                        <Button variant="contained" color="secondary">
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
                        <Button variant="contained" color="secondary">
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



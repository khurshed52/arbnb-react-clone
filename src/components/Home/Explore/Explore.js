import React from 'react'
import Slider from "react-slick";
import './Explore.css';

const Explore = (props)=> {
    const explore = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed:3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10%',
      };

    return (
        <div className="uae_bg">   
            <div className="container top">
                <h2> {props.name}</h2>
                <p> {props.destination}</p>
                 <Slider {...explore}>
                    <div className="item">
                        <img src="https://images.pexels.com/photos/823696/pexels-photo-823696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="banner"/>
                        <h5> Dubai </h5>
                    </div>
                    <div className="item">
                        <img src="https://images.pexels.com/photos/415648/pexels-photo-415648.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="banner"/>
                        <h5> Abu Dhabi </h5>
                    </div>
                    <div className="item">
                        <img src="https://images.pexels.com/photos/4055277/pexels-photo-4055277.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="banner"/>
                        <h5> Sharjah </h5>
                    </div>
                    <div className="item">
                        <img src="https://loveincorporated.blob.core.windows.net/contentimages/main/322927e1-10de-4f92-bdbe-5015b454e5bd-five-things-you-must-see-in-ajman.jpg" alt="banner"/>
                        <h5> Ajman </h5>
                    </div>
                    <div className="item">
                        <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/78/1c/f2/resort-exterior.jpg" alt="banner"/>
                        <h5> Ras Al khaimah </h5>
                    </div>
                    <div className="item">
                        <img src="https://www.cbnme.com/wp-content/uploads/2018/04/Fujairah-Beach-Villas.jpg" alt="banner"/>
                        <h5> Fujairah </h5>
                    </div>
                    <div className="item">
                        <img src="https://media-cdn.tripadvisor.com/media/photo-s/05/f3/4b/88/wadi-adventure.jpg" alt="banner"/>
                        <h5> Al Ain </h5>
                    </div>
                 </Slider>
            </div>  
        </div>
    )
}

export default Explore

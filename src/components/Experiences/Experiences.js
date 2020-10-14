import React from 'react'
import ExperiencesList from './ExperiencesList'
import './Experiences.css';
import Slider from "react-slick";
const Experiences = ()=> {

  const expSlider = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    autoplaySpeed:3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    ]
  };

  const exp = [
    {
      img_Url: 'https://media-cdn.tripadvisor.com/media/photo-s/15/78/1c/f2/resort-exterior.jpg',
      title: 'Red Dunes Bashing, Camel & Sand Skiing',
      price: 'From 95/Person'
    },
    {
      img_Url: 'https://media-cdn.tripadvisor.com/media/photo-s/15/78/1c/f2/resort-exterior.jpg',
      title: 'Red Dunes Bashing, Camel & Sand Skiing',
      price: 'From 95/Person'
    },
    {
      img_Url: 'https://media-cdn.tripadvisor.com/media/photo-s/15/78/1c/f2/resort-exterior.jpg',
      title: 'Red Dunes Bashing, Camel & Sand Skiing',
      price: 'From 95/Person'
    },
    {
      img_Url: 'https://media-cdn.tripadvisor.com/media/photo-s/15/78/1c/f2/resort-exterior.jpg',
      title: 'Red Dunes Bashing, Camel & Sand Skiing',
      price: 'From 95/Person'
    },
    {
      img_Url: 'https://media-cdn.tripadvisor.com/media/photo-s/15/78/1c/f2/resort-exterior.jpg',
      title: 'Red Dunes Bashing, Camel & Sand Skiing',
      price: 'From 95/Person'
    },
    {
      img_Url: 'https://media-cdn.tripadvisor.com/media/photo-s/15/78/1c/f2/resort-exterior.jpg',
      title: 'Red Dunes Bashing, Camel & Sand Skiing',
      price: 'From 95/Person'
    },
    {
      img_Url: 'https://media-cdn.tripadvisor.com/media/photo-s/15/78/1c/f2/resort-exterior.jpg',
      title: 'Red Dunes Bashing, Camel & Sand Skiing',
      price: 'From 95/Person'
    },
    {
      img_Url: 'https://media-cdn.tripadvisor.com/media/photo-s/15/78/1c/f2/resort-exterior.jpg',
      title: 'Red Dunes Bashing, Camel & Sand Skiing',
      price: 'From 95/Person'
    },
    {
      img_Url: 'https://media-cdn.tripadvisor.com/media/photo-s/15/78/1c/f2/resort-exterior.jpg',
      title: 'Red Dunes Bashing, Camel & Sand Skiing',
      price: 'From 95/Person'
    },
    {
      img_Url: 'https://media-cdn.tripadvisor.com/media/photo-s/15/78/1c/f2/resort-exterior.jpg',
      title: 'Red Dunes Bashing, Camel & Sand Skiing',
      price: 'From 95/Person'
    }
  ];

  const results = exp.map((card, i ) => {
    return <ExperiencesList key={i} img_Url={exp[i].img_Url} title={exp[i].title} price={exp[i].price}  />
  })
    return (
        <div className="container">
          <div className="results">
          <Slider {...expSlider}>
             {results}
           </Slider>
          </div>
        </div>
    )
}

export default Experiences

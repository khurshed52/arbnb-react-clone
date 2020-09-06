import React from 'react'
import CardList from './CardList';
import {Row} from 'reactstrap';

function Card() {
    const room = [
        {id:1, 
        imgUrl:'https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720',
        title:'Online Experiences', 
        desc:'Unique activities we can do together, led by a world of hosts.'
        },

        {id:2, 
            imgUrl:'https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720',
            title:'Unique stays', 
            desc:'Spaces that are more than just a place to sleep.'
         },

         {id:3, 
            imgUrl:'https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720',
            title:'Entire homes', 
            desc:'Comfortable private places, with room for friends or family.'
         }

    ];

    const result = room.map((card, i)=> {
        return <CardList key={i} imgUrl={room[i].imgUrl} title={room[i].title} desc={room[i].desc}  />
    });

    return (
        <div>
            <Row>
                {result}
            </Row>  
        </div>
    )
}

export default Card

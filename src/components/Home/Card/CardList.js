import React from 'react'
import {Col } from 'reactstrap';
import Card from '@material-ui/core/Card';


const CardList = (props)=> {
    return (
        <React.Fragment>
            <Col xs="12" sm="4">
            <Card className="card_block"> 
                <img src={props.imgUrl} alt="img" />
                <h3> {props.title}</h3>
                <p> {props.desc}</p>
                </Card>  
            </Col>  
          
            </React.Fragment>
    )
}

export default CardList

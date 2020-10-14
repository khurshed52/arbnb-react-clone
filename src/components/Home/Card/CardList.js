import React from 'react'
import {Col } from 'reactstrap';
import Card from '@material-ui/core/Card';


const CardList = ({imgUrl, title, desc })=> {
    return (
        <React.Fragment>
            <Col xs="12" sm="4">
            <Card className="card_block"> 
                <img src={imgUrl} alt="img" />
                <h3> {title}</h3>
                <p> {desc}</p>
                </Card>  
            </Col>  
          
            </React.Fragment>
    )
}

export default CardList

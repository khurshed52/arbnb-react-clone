import React from 'react'
import Banner from './Banner/Banner';
import './Home.css';
import Card from './Card/Card'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    btn: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      padding: '10px 30px',
      marginTop:'10px',
    },

    heading: {
        color: '#067675',
        fontSize: '2em'
    }
  });


export default function Home() {
    const classes = useStyles();

    return (
        <div className="page">
         <section>
           <Banner title=" Get out and stretch your imagination" desc="Plan a different kind of getaway to uncover the hidden gems near you." />
         </section>
           
         <section>
           <Card/>
         </section>
        </div>
    )
}

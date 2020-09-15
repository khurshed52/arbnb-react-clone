import React from 'react'
import Banner from './Banner/Banner';
import './Home.css';
import Card from './Card/Card'
import Explore from './Explore/Explore'
export default function Home() {

    return (
        <div className="page">
         <section className="container">
           <Banner title=" Get out and stretch your imagination" desc="Plan a different kind of getaway to uncover the hidden gems near you." />
         </section>
           
         <section className="container">
           <Card/>
         </section>

         <section>
           <Explore name="Explore UAE" destination="These popular destinations have a lot to offer"/>
         </section>
        </div>
    )
}

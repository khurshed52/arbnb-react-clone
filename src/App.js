import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Experiences from './components/Experiences/Experiences';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Container } from 'reactstrap';
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import ReactNotification from 'react-notifications-component'
function App() {
  return (
    <React.Fragment>
       <div className="container">
         <ReactNotification/>
       </div>
        <Container fixed>
           <Header/>
          </Container>
          <Route render={({location}) => (
              <TransitionGroup>
              <CSSTransition
                  key={location.key}
                  timeout={500}
                  classNames="fade"
                >
                  <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/experiences" component={Experiences} />
                  <Route exact path="/contact" component={Contact} />
               </Switch>
                </CSSTransition>
                </TransitionGroup>
          )}/>
      
        <Footer/>
    </React.Fragment>
  );
}

export default App;

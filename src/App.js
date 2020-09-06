import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Home from './components/Home/Home';
import Header from './components/Header/Header'
import { Container } from 'reactstrap';
import { Link, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup} from 'react-transition-group';

function App() {
  return (
    <React.Fragment>
        <Container fixed>
           <Header/>
          <Route render={({location}) => (
              <TransitionGroup>
              <CSSTransition
                  key={location.key}
                  timeout={500}
                  classNames="fade"
                >
                  <Switch location={location}>
                  <Route exact path="/" component={Home} />
               </Switch>
                </CSSTransition>
                </TransitionGroup>
          )}/>
      
        </Container>
    </React.Fragment>
  );
}

export default App;

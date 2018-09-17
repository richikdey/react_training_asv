import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom';
import Redirect from 'react-router-dom/Redirect';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
class SpaWebsite extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
                <div>
                <h1>SPA in React</h1>
                <ul>
                    <li><NavLink to ="/" exact strict>Home</NavLink></li>
                    <li><NavLink to ="/about" exact strict>About</NavLink></li>
                    <li><NavLink to ="/Contact" exact strict>Contact Us</NavLink></li>
                </ul>
                <div>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" exact strict component={About}/>  
                    <Route path="/Contact" exact strict component={Contact}/>
                    {/* <Route path="*" exact strict component = {NotFound}></Route> */}
                    <Redirect to="/"></Redirect>
                </div>
                </div>
            </Router>
         );
    }
}
 
export default SpaWebsite;
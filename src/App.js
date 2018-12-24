import React, { Component } from 'react';
import {BrowserRouter as Router , Route } from 'react-router-dom'

import Navbar from './components/firstpage/navbar.js'

import Firstpage from './components/firstpage/firstpage.js'
import Register from './components/authentification/register.js'
import Login from './components/authentification/login.js'
import Video from './components/onlinevideos/onlinecoursespage.js'
import VideoList from './components/onlinevideos/videolist.js'







import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      
       <Navbar/>
       <Route exact path ='/firstpage' component = {Firstpage}/>
       <Route exact path = '/coursenligne' component = {Video}/>
       <Route exact path = '/videolist' component = {VideoList}/>
       
     
       <div className="container">
       
       <Route exact path = "/register" component = {Register}/>
   
       <Route exact path = "/login" component = {Login}/>
       

       </div>
     
     
    
 
 
   
     
      </div>
      </Router>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
/* import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; */
import Header from './components/Header.js';
import Movies from './components/Movies.js';



/* import axios from 'axios'; 
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"; */

class App extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      movies: []
    }

  }
  render() {
    return (
      <>
            <Header/>

   

            <Movies/>
      </>
    );
  }
}

export default App;

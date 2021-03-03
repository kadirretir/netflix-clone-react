import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Movies from './components/Movies.js';
import axios from 'axios'; 
require('dotenv').config();


/*import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"; */

class App extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      popularmovies: [],
      famousmovies: []
    }

  }


  async componentDidMount () {
     const popularMovies = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
      const famousMovies = await axios.get(` https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`);

      this.setState({
        popularmovies: popularMovies.data.results,
        famousmovies: famousMovies.data.results
      });

    
  }

  render() {
    return (
      <>
            <Header/>

   
            <Movies popularmovies={this.state.popularmovies} famousmovies={this.state.famousmovies}/>

      </>
    );
  }
}

export default App;

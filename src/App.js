import React from 'react';
import './App.css';
import Footer from './components/Footer.js';
import Collection from './components/Collection.js';
import Header from './components/Header.js';
import Movies from './components/Movies.js';
import axios from 'axios';
require('dotenv').config();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popularmoviesRowOne: [],
      popularmoviesRowTwo: [],
      popularmoviesRowThree: [],
      famousmovies: []
    }
  }


  async componentDidMount() {
    const popularMoviesPageOne = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
    const popularMoviesPageTwo = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=2`);
    const popularMoviesPageThree = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=3`);
    const famousMovies = await axios.get(` https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`);

    this.setState({
      popularmoviesRowOne: popularMoviesPageOne.data.results,
      popularmoviesRowTwo: popularMoviesPageTwo.data.results,
      popularmoviesRowThree: popularMoviesPageThree.data.results,
      famousmovies: famousMovies.data.results
    });
  
  }

  render() {
    return (
      <>
        <Header />
        <Movies
          popularmoviesrowone={this.state.popularmoviesRowOne}
          popularmoviesrowtwo={this.state.popularmoviesRowTwo}
          popularmoviesrowthree={this.state.popularmoviesRowThree}
          famousmovies={this.state.famousmovies} />
        <Collection />
        <Footer />
      </>
    );
  }
}

export default App;

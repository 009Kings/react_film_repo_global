import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing.js';
import FilmDetails from './FilmDetails.js';
import TMDB from './TMDB.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      films: TMDB.films,
      current: {}
    }
  }
  
  handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film.title}`);
  }

  render() {
    return (
      <div className="App">
       <div className="film-library">
        <FilmListing films={this.state.films} handleDetailsClick={this.handleDetailsClick} />
        <FilmDetails films={this.state.current}/>
       </div>
      </div>
    );
  }
}

export default App;

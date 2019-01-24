import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing.js';
import FilmDetails from './FilmDetails.js';
import TMDB from './TMDB.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="film-library">
        <FilmListing films={TMDB.films}/>
        <FilmDetails films={TMDB.films}/>
       </div>
      </div>
    );
  }
}

export default App;

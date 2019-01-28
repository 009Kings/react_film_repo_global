import React, { Component } from 'react';
import FilmRow from './FilmRow.js';
import FilmListingFilter from './FilmListingFilter';

class FilmListing extends Component {
  
  constructor() {
    super()
    this.state = {
      filter: 'all',
      faves: []
    }
  }

  handleFaveToggle = (film) => {
    const faves = this.state.faves.slice();
    let filmIndex = faves.indexOf(film);
    if (filmIndex === -1) {
      faves.push(film);
      console.log(`ADDING ${film.name} TO FAVORITES`);
    } else {
      faves.splice(filmIndex, 1);
      console.log(`REMOVING ${film.name} FROM FAVES`);
    }
    this.setState({faves})
  }

  handleFilterClick = (filter) => {
    this.setState({
      filter
    })
  }


  render() {
    let filmsToRender = this.state.filter === 'faves' ? this.state.faves : this.props.films;

    const renderFilms = filmsToRender.map((film) => {
      return (
        <FilmRow handleFaveToggle={this.handleFaveToggle} film={film} isFave={this.state.faves.includes(film)} handleDetailsClick={this.props.handleDetailsClick} />
       )
    })

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">

          <FilmListingFilter active={this.state.filter==='all' ? 'is-active' : ''} handleFilterClick={()=>this.handleFilterClick('all')} filterName='ALL' length={this.props.films.length} />
          
          <FilmListingFilter active={this.state.filter==='faves' ? 'is-active' : ''} handleFilterClick={()=>this.handleFilterClick('faves')} filterName='FAVES' length={this.state.faves.length} />

        </div>
        {renderFilms}
      </div>
    )
  }
}

export default FilmListing;
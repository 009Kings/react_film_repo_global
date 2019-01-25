import React, { Component } from 'react';
import FilmRow from './FilmRow.js'

class FilmListing extends Component {
  
  constructor() {
    super()
    this.state = {
      filter: 'all',
      faves: []
    }
  }

  handleFaveToggle = (film) => {
    console.log("handling that toggle");
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
    console.log(`Setting filter to ${filter}`);
  }

  renderFilmRow = (film) => {
    return (
      <FilmRow handleFaveToggle={this.handleFaveToggle} film={film} isFave={this.state.faves.includes(film)} handleDetailsClick={this.props.handleDetailsClick} />
     )
  }  

  render() {

    const filmsToRender = this.state.filter === "faves" ? this.state.faves.map(this.renderFilmRow) : this.props.films.map(this.renderFilmRow);

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">

          <div className={`film-list-filter ${this.state.filter==='all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick("all")}>
            ALL FILMS
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className={`film-list-filter ${this.state.filter==='faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick("faves")}>
            FAVES
            <span className="section-count">{this.state.faves.length}</span>
          </div>

        </div>
        {filmsToRender}
      </div>
    )
  }
}

export default FilmListing;
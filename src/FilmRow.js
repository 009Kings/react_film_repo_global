import React, { Component } from 'react';
import FilmPoster from "./FilmPoster"
import Fave from './Fave'

class FilmRow extends Component {

  render() {
    
    const releaseYear = this.props.film.release_date.substr(0, 4);

    return (
      <div className="film-row" onClick={() => this.props.handleDetailsClick(this.props.film)}>
        <FilmPoster poster_path={this.props.film.poster_path} alt={this.props.film.title} />

        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{releaseYear}</p>
        </div>

        <Fave onFaveToggle={() => {this.props.handleFaveToggle(this.props.film)}} isFave={this.props.isFave} />
      </div>
    )
  }
}

export default FilmRow;
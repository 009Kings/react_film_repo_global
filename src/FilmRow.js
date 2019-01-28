import React from 'react';
import FilmPoster from "./FilmPoster"
import Fave from './Fave'

function FilmRow(props) {
    
  const releaseYear = props.film.release_date.substr(0, 4);

  return (
    <div className="film-row" onClick={() => props.handleDetailsClick(props.film)}>
      <FilmPoster poster_path={props.film.poster_path} alt={props.film.title} />

      <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p>{releaseYear}</p>
      </div>

      <Fave onFaveToggle={() => {props.handleFaveToggle(props.film)}} isFave={props.isFave} />
    </div>
  )
}

export default FilmRow;
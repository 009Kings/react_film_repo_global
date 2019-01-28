import React from 'react';

function FilmPoster (props) {
  const posterUrl = `https://image.tmdb.org/t/p/w780/${props.poster_path}`;
  const alt = `Poster for ${props.title}`

  return (
  <img src={posterUrl} alt={alt}/>
  )
}

export default FilmPoster;
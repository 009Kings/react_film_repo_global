import React, { Component } from 'react';

class FilmPoster extends Component {
  render() {
    const posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.poster_path}`;
    const alt = `Poster for ${this.props.title}`

    return (
    <img src={posterUrl} alt={alt}/>
    )
  }
}

export default FilmPoster;
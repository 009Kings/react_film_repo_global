import React, { Component } from 'react';

class FilmListingFilter extends Component {

  render() {
    return (
      <div className={`film-list-filter ${this.props.active}`} onClick={() => this.props.handleFilterClick()}>
      {this.props.filterName}
      <span className="section-count">{this.props.length}</span>
    </div>
    )
  }

}

export default FilmListingFilter;
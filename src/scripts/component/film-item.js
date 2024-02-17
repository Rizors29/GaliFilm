import css from 'bootstrap/dist/css/bootstrap.min.css';
import ratingIcon from '../../images/icon-rating.png';

class filmItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    const rating = this._movie.vote_average.toFixed(1);
    const title = this._movie.original_title;
    const { overview } = this._movie;
    const imgUrl = `https://image.tmdb.org/t/p/w500/${this._movie.poster_path}`;

    const getColor = (vote) => {
      if (vote >= 5) {
        return 'text-warning';
      }
      return 'text-danger';
    };

    this.shadowDOM.innerHTML = `
      <style>
        ${css}
        :host {
          display: block;
          margin: 30px 10px 0 10px;
        }
      </style>

      <div class="card border-info" style="width: 18rem; height: 100%; background-color: #DAFFFB;">
        <div class="card-header bg-dark">
          <h5 class="card-title text-white">${title}</h5>
          <img src="${ratingIcon}" alt="Rating" width="20" height="20" class="d-inline-block align-text-top">
          <span class="${getColor(rating)} fw-bold">${rating}</span>
        </div>
        <img src="${imgUrl}" alt="Poster Image">
        <div class="card-body">
          <p class="card-text lh-sm">${overview}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('film-item', filmItem);

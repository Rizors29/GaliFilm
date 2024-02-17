import css from 'bootstrap/dist/css/bootstrap.min.css';
import './film-item';

class filmList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';

    this._movie.forEach((movie) => {
      const movieItemElement = document.createElement('film-item');
      movieItemElement.movie = movie;
      this.shadowDOM.appendChild(movieItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        ${css}
      </style>
    `;

    this.shadowDOM.innerHTML += `<h6 class="text-warning text-center mt-3">${message}</h6>`;
  }
}

customElements.define('film-list', filmList);

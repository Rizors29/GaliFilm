import css from 'bootstrap/dist/css/bootstrap.min.css';
import searchIcon from '../../images/icon-search.png';

class searchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        ${css}
      </style>

      <h5 class="text-white text-center my-4">Film apa yang ingin kamu cari?</h5>
      <div class="container-fluid px-5">
        <form class="d-flex" role="search">
          <input class="form-control rounded-start-pill" type="text" placeholder="Cari film menarikmu disini" id="searchElement" aria-label="Search">
            <button id="searchButtonElement" class="btn rounded-end-pill" type="submit" style="background-color: #64CCC5;">
              <img src="${searchIcon}" alt="Seacrh" width="18" height="18" align-text-top>
            </button>
        </form>
      </div>
    `;

    this.shadowDOM.querySelector('form').addEventListener('submit', (event) => {
      event.preventDefault();
    });

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', () => {
      if (this._clickEvent) {
        this._clickEvent();
      }
    });
  }
}

customElements.define('search-bar', searchBar);

import css from 'bootstrap/dist/css/bootstrap.min.css';
import appLogo from '../../images/logo-galifilm.png';

class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        ${css}
      </style>

      <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand fw-semibold">
            <img src="${appLogo}" alt="GalifilmLogo" width="28" height="28" class="d-inline-block align-text-top">
            Gali Film
          </a>
        </div>
      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);

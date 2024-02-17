import '../component/search-bar';
import '../component/film-list';
import DataSource from '../data/data-source';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const movieListElement = document.querySelector('film-list');

  const renderResult = (results) => {
    movieListElement.movie = results;
  };

  const fallbackResult = (message) => {
    movieListElement.renderError(message);
  };

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMovie(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;

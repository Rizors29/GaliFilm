import config from './config';

class DataSource {
  static async searchMovie(keyword) {
    const { apiKey, baseUrl } = config;

    try {
      const response = await fetch(`${baseUrl}/search/movie?api_key=${apiKey}&query=${keyword}`);
      const responseJson = await response.json();
      if (responseJson.results.length > 0) {
        return Promise.resolve(responseJson.results);
      }
      return Promise.reject(new Error(`${keyword} is not found`));
    } catch (error) {
      throw new Error(`Error searching for ${keyword}: ${error.message}`);
    }
  }
}

export default DataSource;

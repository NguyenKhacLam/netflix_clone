const API_KEY = "5a65a29d36270133d7a6e46ee91a1bcd";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRelated: `/discover/movie?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorormovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchActionmovie: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchRomancemovie: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;

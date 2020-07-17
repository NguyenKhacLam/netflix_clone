import React from "react";
// import logo from './logo.svg';
import "./App.css";
import requests from "./requests";
import Row from "./components/Row";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRelated} />
      <Row title="Action movie" fetchUrl={requests.fetchActionmovie} />
      <Row title="Comedy movie" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horor movie" fetchUrl={requests.fetchHorormovies} />
      <Row title="Romance movie" fetchUrl={requests.fetchRomancemovie} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

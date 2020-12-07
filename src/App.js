import { useState, useEffect } from 'react';
import { getMovies } from './services/movie-api';
import MovieCard from './components/MovieCard';
import './App.css';

function App() {

  const [movieData, setMovieData] = useState({
    dates: '',
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  })

  async function getAppData() {
     const data = await getMovies();
     setMovieData(data);
  }


  useEffect(() => {
    getAppData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movies React</h1> 
      </header>
      <h1>Now playing!</h1>
      <div className="Card">
      {movieData.results.map((result, idx) => (

        <MovieCard key={idx} result={result} />

      ))}


      </div>
    </div>
  );
}

export default App;

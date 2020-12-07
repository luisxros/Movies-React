import { useState, useEffect } from 'react';
import { getMovies } from './services/movie-api';
import MovieCard from './components/MovieCard';
import './App.css';

function App() {

  const [movieState, setMovieState] = useState({
    dates: '',
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  })

  async function getAppData() {
     const data = await getMovies();
     setMovieState(data);
  }


  useEffect(() => {
    getAppData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movies React</h1> 
      </header>
      <MovieCard />
    </div>
  );
}

export default App;

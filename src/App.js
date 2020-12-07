import { useState, useEffect } from 'react';
import { getMovies } from './services/movie-api';
import MovieCard from './components/MovieCard';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/Themes';
import { GlobalStyles } from './components/Global';
import './App.css';

function App() {

  const [movieData, setMovieData] = useState({
    dates: '',
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  })

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }


  async function getAppData() {
     const data = await getMovies();
     setMovieData(data);
  }


  useEffect(() => {
    getAppData();
  }, []);

  return (
  <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
    <GlobalStyles />
    <div className="App">
      <header className="App-header">

        <h1>Movies React</h1> 
        
      </header>
      <button onClick={themeToggler}>Switch Theme</button>
      <h1>Now playing!</h1>
      <div className="Card">
      {movieData.results.map((result, idx) => (

        <MovieCard key={idx} result={result} />

      ))}


      </div>
    </div>
        </>
    </ThemeProvider>
  );
}

export default App;


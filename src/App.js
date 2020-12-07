import { useState, useEffect } from 'react';
import { getMovies } from './services/movie-api';
import './App.css';

function App() {

  async function getAppData() {
     const data = await getMovies();
     console.log(data);
  }


  useEffect(() => {
    getAppData();
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movies React</h1> 
      </header>
    </div>
  );
}

export default App;

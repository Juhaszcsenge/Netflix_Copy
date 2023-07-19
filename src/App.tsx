import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Movie from './Components/Movie';


const movieItem = {
  id: 1,
  title: 'Movie Title',
  backdrop_path: 'path/to/backdrop.jpg',
};


function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Movie item={movieItem} />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Home from './Pages/Home';
import Row from './Components/Row';


// const movieItem = {
//   id: 1,
//   title: 'Movie Title',
//   backdrop_path: 'path/to/backdrop.jpg',
// };


function App() {
  return (
    <div>
       {/* <Row
        title="Popular Movies"
        rowID="popular"
        fetchURL="https://api.themoviedb.org/3/movie/popular?api_key=2a0a8a8083e3d1382579a8a9c505fe9e&language=en-US&page=1"
      /> */}
      <Navbar />
      <Main />
      <Home />
      <Row title={''} fetchURL={''} rowID={''} />
    </div>
  );
}

export default App;

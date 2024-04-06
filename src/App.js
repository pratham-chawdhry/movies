import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Components/HomePage/Home';
import MovieCentral from './Components/MovieInfo/MovieCentral';
import MovieDetail from './Components/Movie/MovieDetailOne';

function App() {
  return (
    <BrowserRouter basename = "/">
      <Routes>
        <Route exact path = "/" element = {<HomePage />}/>
        <Route path = "/search" element = {<MovieCentral/>}/>
        <Route path = "/movie/:id" element = {<MovieDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

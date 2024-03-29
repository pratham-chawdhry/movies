import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Components/HomePage/Home';
import MovieOne from './Components/MovieInfo/MovieOne';
import MovieDetail from './Components/Movie/MovieDetailOne';

function App() {
  return (
    <BrowserRouter basename = {"/movies"}>
      <Routes>
        <Route exact path = "/" element = {<HomePage />}/>
        <Route path = "/AbhinavTheSkeleton/:id" element = {<MovieOne/>}/>
        <Route path = "/movie/:id" element = {<MovieDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

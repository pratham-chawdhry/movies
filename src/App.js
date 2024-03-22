import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Components/HomePage/Home';
import MovieOne from './Components/MovieInfo/MovieOne';

function App() {
  return (
    <BrowserRouter basename = {"/movies"}>
      <Routes>
        <Route exact path = "/" element = {<HomePage />}/>
        <Route path = "/AbhinavTheSkeleton/:id" element = {<MovieOne/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

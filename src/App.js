import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Components/HomePage/Home';
import Movie from './Components/MovieInfo/Movie';

function App() {
  return (
    <BrowserRouter basename = {"/movies"}>
      <Routes>
        <Route exact path = "/" element = {<HomePage />}/>
        <Route path = "/AbhinavTheSkeleton" element = {<Movie/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

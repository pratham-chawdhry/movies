import React, { useEffect, useState } from 'react';
import MovieThree from "./MovieThree"
import './Movie.css'

export default function MovieTwo({ totalPages, setDisplay, setMovieObj, query, setQuery, genreDisplay }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [movieArray, setMovieArray] = useState([]);
    const [finish, setFinish] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responses = await Promise.all(
                    Array.from({ length: totalPages }, async (_, i) => {
                        const delay = 1000; // Exponential backoff
                        await new Promise(resolve => setTimeout(resolve, delay));
                        return fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${i + 1}&region=India&api_key=294c3bed71b4dc93880885f944b67ed6`);
                    })
                );
                const jsonData = await Promise.all(responses.map(response => response.json()));
                setData(jsonData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        
        fetchData();        
    }, [totalPages, query]);

    useEffect(() => {
        if (!loading && data.length > 0 && data) {
            setMovieArray(() => {
                const array = [];
                data.forEach((item) => {
                    const { results } = item;
                    results && results.forEach((movie) => {
                        const {poster_path, backdrop_path, popularity, overview, original_title, title, genre_ids} = movie;
                        let originalTitle = original_title.toLowerCase();
                        let Title = title.toLowerCase();
                        if (poster_path && backdrop_path && popularity > 0 && overview ) {
                            array.push(movie);
                        }
                    })
                });
                return array;
            });
            setFinish(true);
        }
    }, [loading, data, query]);

    return (
        <div className = "container">
            {finish && <MovieThree movieArray = {movieArray} setDisplay = {setDisplay} setMovieObj = {setMovieObj} query = {query} genreDisplay = {genreDisplay}/>}
        </div>
    );
}

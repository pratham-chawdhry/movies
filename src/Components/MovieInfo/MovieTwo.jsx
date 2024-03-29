import React, { useEffect, useState } from 'react';
import MovieThree from "./MovieThree"
import './Movie.css'

export default function MovieTwo({ totalPages }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [movieArray, setMovieArray] = useState([]);
    const [finish, setFinish] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responses = await Promise.all(
                    Array.from({ length: totalPages }, (_, i) =>
                        fetch(`https://api.themoviedb.org/3/search/movie?query=Rock&include_adult=false&language=en-US&page=${i + 1}&region=India&api_key=294c3bed71b4dc93880885f944b67ed6`)
                    )
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
    }, [totalPages]);

    useEffect(() => {
        if (!loading && data.length > 0) {
            setMovieArray(() => {
                const array = [];
                data.forEach((item) => {
                    const { results } = item;
                    results.forEach((movie) => {
                        const {poster_path, backdrop_path, popularity} = movie;
                        if (poster_path && backdrop_path && popularity > 0) {
                            array.push(movie);
                        }
                    })
                });
                return array;
            });
            setFinish(true);
        }
    }, [loading, data]);

    return (
        <div className = "container">
            {finish && <MovieThree movieArray = {movieArray}/>}
        </div>
    );
}

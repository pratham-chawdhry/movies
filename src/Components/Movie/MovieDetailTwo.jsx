import React, { useEffect, useState} from 'react'
import MovieDetailThree from './MovieDetailThree'

export default function MovieDetailTwo({id}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [movieArray, setMovieArray] = useState([]);
    const [finish, setFinish] = useState(false);
    let totalPages = 3;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responses = await Promise.all(
                    Array.from({ length: totalPages }, async (_, i) => {
                        const delay = 1000; 
                        await new Promise(resolve => setTimeout(resolve, delay));
                        return fetch(`https://api.themoviedb.org/3/movie/${id}/similar?page=${i + 1}&api_key=294c3bed71b4dc93880885f944b67ed6`);
                        
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
    }, [id]);


    useEffect(() => {
        if (!loading && data.length > 0 && data) {
            setMovieArray(() => {
                const array = [];
                data.forEach((item) => {
                    const { results } = item;
                    results && results.forEach((movie) => {
                        const {poster_path, backdrop_path, popularity, overview, original_title, title, genre_ids, vote_count, vote_average, release_date} = movie;
                        if (poster_path && backdrop_path && popularity > 0 && overview) {
                            array.push(movie);
                        }
                    })
                });
                return array;
            });
            setFinish(true);
        }
    },[loading, data])

  return (
    <div className='background' style = {{position: 'absolute', zIndex: '0',display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', flexDirection: 'row', height: '100vh'}}>
        <div className = "container" style={{height: '100vh'}}>
            {finish && <MovieDetailThree movieArray = {movieArray}/>}
        </div>
    </div>
  )
}

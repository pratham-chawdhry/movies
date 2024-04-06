import React, { useEffect, useState} from 'react'
import MovieDetailThree from './MovieDetailThree'

export default function MovieDetailTwo({id}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [movieArray, setMovieArray] = useState([]);
    const [finish, setFinish] = useState(false);
    const [results, setResults] = useState(0);
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
                    const { results, total_results} = item;
                    results && results.forEach((movie) => {
                        const {poster_path, backdrop_path, popularity, overview,original_title, title, genre_ids, vote_count, vote_average, release_date} = movie;
                        setResults(total_results);
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
    !loading && results > 0 && (<div className='backgroundNew' style = {{position: 'absolute', top : '742px',display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', flexDirection: 'row', left: '0px'}}>
        <div className = "container" style={{height: '420px', top : '20px'}}>
            {finish && <MovieDetailThree movieArray = {movieArray}/>}
        </div>
    </div>)
  )
}

import React, {useEffect, useState} from 'react';
import MovieHeader from "./MovieHeader";
import MovieMain from "./MovieMain";
import MovieList from "./MovieList";
import axiosInstant from "../../api/axios";

function Movie() {
    const [nowData, setNowData] = useState([]);
    const [nowLoading, setNowLoading] = useState(false);
    const [nowError, setNowError] = useState(null);

    // Fetching now playing movies from the API
    useEffect(()=>{
        const fetchCategories = async () => {
            try{
                setNowLoading(true);
                const {data} = await axiosInstant.get('now_playing');
                setNowData(data.results);
            }catch (e) {
                setNowError(e);
            }
            finally {
                setNowLoading(false);
            }
        }
        fetchCategories();
    },[])

    return (
        <>
            <MovieHeader/>
            <MovieMain/>
            <MovieList title="Now Playing" movies={nowData} error={nowError}/>
        </>
    );
}

export default Movie;
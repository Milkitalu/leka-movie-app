import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

function MovieDetail() {
    
    const API_KEY = 'ac27197c2bbddbd30cca82451ddd6fcf';
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovieDetail = async () => {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
            setMovie(res.data);
            setLoading(false);
        };

        fetchMovieDetail();
    }, [id]);

    if(loading) return <p>Loading....</p>

  return (
    <div className="p-4">
        <h2 className="text-2xl font-bold">{movie.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-auto" />
        <p className="mt-2">{movie.overview}</p>
    </div>
  );
};

export default MovieDetail
import React from "react";
import { useParams } from "react-router-dom";

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// Components
import Grid from './Grid';
import Spiner from './Spinner';

// Hooks
import { useMovieFetch } from "../hooks/useMovieFetch";

// Images
import NoImage from '../images/no_image.png';

const Movie = () => {
    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);
    
    console.log(movie);
    return (
        <>
            <div>Movie</div>
        </>
    );
};

export default Movie;
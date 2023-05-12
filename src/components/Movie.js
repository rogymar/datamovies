import React from "react";
import { useParams } from "react-router-dom";

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// Components
import BreadCrumb from "./BreadCrumb";
import Grid from './Grid';
import Spiner from './Spinner';
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";

// Hooks
import { useMovieFetch } from "../hooks/useMovieFetch";

// Images
import NoImage from '../images/no_image.png';

const Movie = () => {
    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);
    
    if (loading) return <Spiner />
    if (error) return <div>Something went wrong... {error} </div>

    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie}/>
            <MovieInfoBar 
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />
        </>
    );
};

export default Movie;
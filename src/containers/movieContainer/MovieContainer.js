import React from "react";
import {MovieTile} from "../../components";
import "./MovieContainer.scss";
import {moviesArray} from "../../mockedMovies";

const MovieContainer = ({onMovieSelect}) => {
    return (
        <div className="movie-wrapper">
            {
                moviesArray.map((movie) => (
                    <MovieTile
                        movie={movie}
                        key={movie.id}
                        handleClick={() => onMovieSelect(movie)}
                    />
                ))
            }
        </div>
    )
}

export default MovieContainer;

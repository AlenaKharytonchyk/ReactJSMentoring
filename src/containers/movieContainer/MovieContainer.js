import React from "react";
import {MovieTile} from "../../components";
import "./MovieContainer.scss";

const MovieContainer = ({onMovieSelect, movieList}) => {
    return (
        <div className="movie-wrapper">
            {
                movieList.map((movie) => (
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

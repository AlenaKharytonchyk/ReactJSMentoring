import React from "react";
import {MovieTile} from "../../components";
import "./MovieContainer.scss";
import {moviesArray} from "../../mockedMovies";

const MovieContainer = () => {
    return (
        <div className="movie-wrapper">
            {
                moviesArray.map((movie) => (
                    <MovieTile
                        title={movie.title}
                        image={movie.image}
                        year={movie.year}
                        genre={movie.genre}
                        key={movie.id}
                        handleClick={(value) => alert(value)}
                    />
                ))
            }
        </div>
    )
}

export default MovieContainer;

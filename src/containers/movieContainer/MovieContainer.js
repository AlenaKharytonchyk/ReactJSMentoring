import React from "react";
import {MovieTile} from "../../components";
import "./MovieContainer.scss";
import {useNavigate} from "react-router-dom";

const MovieContainer = ({movieList}) => {
    const navigate = useNavigate();
    return (
        <div className="movie-wrapper">
            {
                movieList.map((movie) => (
                    <MovieTile
                        movie={movie}
                        key={movie.id}
                        handleClick={() => navigate(`/${movie.id}`)}
                    />
                ))
            }
        </div>
    )
}

export default MovieContainer;

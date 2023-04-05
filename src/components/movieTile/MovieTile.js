import React from "react";
import PropTypes from "prop-types";
import "./MovieTile.scss";
import {PopUp} from "../index";
import convertDateIntoYear from "../../utils";

const MovieTile = ({movie, handleClick}) => {
    return (
        <div
            className="movie-card-container"
            onClick={() => handleClick(movie.title)}
            data-testid="movie-card"
        >
            <PopUp movie={movie}/>
            <img src={movie.image} alt={movie.title} />
            <div className="title-container">
                <h2 className="title">{movie.title}</h2>
                <span className="year">{convertDateIntoYear(movie.year)}</span>
            </div>
            <div className="genre">{movie.genre}</div>
        </div>
    )
}

MovieTile.propTypes = {
    movie: PropTypes.shape(
        {
            title: PropTypes.string.isRequired,
            genre: PropTypes.array,
            year: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired
        }
    )
}

MovieTile.defaultProps = {
    title: "Mocked title",
    genre: ["Mocked genre"],
    year: "Mocked year",
}
export default MovieTile;

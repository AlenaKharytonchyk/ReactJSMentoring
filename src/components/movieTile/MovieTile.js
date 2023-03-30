import React from "react";
import PropTypes from "prop-types";
import "./MovieTile.scss";
import {PopUp} from "../index";

const MovieTile = ({title, image, genre, year, handleClick}) => {
    return (
        <div
            className="movie-card-container"
            onClick={() => handleClick(title)}
            data-testid="movie-card"
        >
            <PopUp />
            <img src={image} alt={title} />
            <div className="title-container">
                <h2 className="title">{title}</h2>
                <span className="year">{year}</span>
            </div>
            <div className="genre">{genre}</div>
        </div>
    )
}

MovieTile.propTypes = {
    title: PropTypes.string.isRequired,
    genre: PropTypes.array,
    year: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

MovieTile.defaultProps = {
    title: "Mocked title",
    genre: ["Mocked genre"],
    year: "Mocked year",
}
export default MovieTile;

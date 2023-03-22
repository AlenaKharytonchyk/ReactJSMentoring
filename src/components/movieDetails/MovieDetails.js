import React from "react";
import PropTypes from "prop-types";
import "./MovieDetails.scss";

const MovieDetails = ({movie}) => {
    return (
        <div
            className="movie-details-container"
            data-testid="movie-details"
        >
            <img src={movie.image} alt={movie.title} />
            <div className="side-container">
                <div className="title-wrapper">
                    <h2 className="title">{movie.title}</h2>
                    <span className="rating">{movie.rating}</span>
                </div>
                <div className="genre">{movie.genre}</div>
                <div className="year-wrapper">
                    <span className="year">{movie.year}</span>
                    <span className="duration">{movie.duration}</span>
                </div>
                <p className="description">{movie.description}</p>
            </div>
        </div>
    )
}

MovieDetails.propTypes = {
    movie: PropTypes.shape(
        {
            title: PropTypes.string.isRequired,
            genre: PropTypes.array,
            year: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            rating: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            duration: PropTypes.string.isRequired,
        }
    )
}

MovieDetails.defaultProps = {
    title: "Mocked title",
    genre: ["Mocked genre"],
    year: "Mocked year",
}
export default MovieDetails;
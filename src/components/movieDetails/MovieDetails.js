import React from "react";
import PropTypes from "prop-types";
import "./MovieDetails.scss";

const MovieDetails = ({movie, onClose}) => {
    return (
        <div
            className="movie-details-container"
            data-testid="movie-details"
        >
            <div className='details-close' onClick={onClose} data-testid="details-close">X</div>
            <img src={movie.poster_path} alt={movie.title} />
            <div className="side-container">
                <div className="title-wrapper">
                    <h2 className="title">{movie.title}</h2>
                    <span className="rating">{movie.vote_average}</span>
                </div>
                <div className="genre">{movie.genres}</div>
                <div className="year-wrapper">
                    <span className="year">{new Date(movie.release_date).getFullYear()}</span>
                    <span className="duration">{movie.runtime} min</span>
                </div>
                <p className="description">{movie.overview}</p>
            </div>
        </div>
    )
}

MovieDetails.propTypes = {
    movie: PropTypes.shape(
        {
            title: PropTypes.string.isRequired,
            genres: PropTypes.array,
            release_date: PropTypes.string.isRequired,
            poster_path: PropTypes.string.isRequired,
            vote_average: PropTypes.number.isRequired,
            overview: PropTypes.string.isRequired,
            runtime: PropTypes.number.isRequired,
        }
    )
}

MovieDetails.defaultProps = {
    title: "Mocked title",
    genre: ["Mocked genre"],
    year: "Mocked year",
}
export default MovieDetails;

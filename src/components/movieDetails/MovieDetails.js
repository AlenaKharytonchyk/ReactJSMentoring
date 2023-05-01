import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import "./MovieDetails.scss";
import {useNavigate, useParams} from "react-router-dom";
import convertDateIntoYear from "../../utils";

const MovieDetails = () => {
    const navigate = useNavigate();
    const {movieId} = useParams();
    const [movie, setMovie ] = useState();
    useEffect(() => {
        let controller, signal;
        const fetchData = async () => {
            if (controller) {
                controller.abort()
            }
            controller = new AbortController();
            signal = controller.signal;

            const response = await fetch(`http://localhost:4000/movies/${movieId}`, {
                signal: signal,
            })
            const data = await response.json();
            controller = null;
            setMovie(data);
        }

        fetchData();
    },[movieId]);
    return (
            movie
            ? <>
                    <div
                    className="movie-details-container"
                    data-testid="movie-details"
                >
                <div className='details-close' onClick={() => navigate('/')} data-testid="details-close">X</div>
                <img src={movie.poster_path} alt={movie.title} />
                <div className="side-container">
                    <div className="title-wrapper">
                        <h2 className="title">{movie.title}</h2>
                        <span className="rating">{movie.vote_average}</span>
                    </div>
                    <div className="genre">{movie.genres}</div>
                    <div className="year-wrapper">
                        <span className="year">{convertDateIntoYear(movie.release_date)}</span>
                        <span className="duration">{movie.runtime} min</span>
                    </div>
                    <p className="description">{movie.overview}</p>
                </div>
            </div>
        </>
            : null
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

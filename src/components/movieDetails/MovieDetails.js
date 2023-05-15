import React from "react";
import PropTypes from "prop-types";
import styles from "./MovieDetails.module.scss";
import { useRouter } from "next/router";
import {convertDateIntoYear} from "../../utils";

const MovieDetails = ({ movie }) => {
    const router = useRouter();
    return (
            movie
            ? <>
                    <div
                    className={styles["movie-details-container"]}
                    data-testid="movie-details"
                >
                <div className={styles["details-close"]} onClick={() => router.push('/')} data-testid="details-close">X</div>
                <img src={movie.poster_path} alt={movie.title} />
                <div className={styles["side-container"]}>
                    <div className={styles["title-wrapper"]}>
                        <h2 className={styles.title}>{movie.title}</h2>
                        <span className={styles.rating}>{movie.vote_average}</span>
                    </div>
                    <div className={styles.genre}>{movie.genres}</div>
                    <div className={styles["year-wrapper"]}>
                        <span className={styles.year}>{convertDateIntoYear(movie.release_date)}</span>
                        <span className={styles.duration}>{movie.runtime} min</span>
                    </div>
                    <p className={styles.description}>{movie.overview}</p>
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

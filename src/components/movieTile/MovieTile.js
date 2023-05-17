import React, {useState} from "react";
import PropTypes from "prop-types";
import styles from "./MovieTile.module.scss";
import {Button, Dialog, PopUp} from "../index";
import {convertDateIntoYear} from "../../utils";
import { useRouter} from "next/router";

const MovieTile = ({movie, handleClick}) => {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div
                className={styles["movie-card-container"]}
                onClick={() => handleClick(movie.title)}
                data-testid="movie-card"
            >
                <PopUp movie={movie} onDelete={()=>setShowModal(true)} onEdit={()=>router.push(`/${movie.id}/edit`)}/>
                <img src={movie.poster_path} alt={movie.title} />
                <div className={styles["title-container"]}>
                    <h2 className={styles["title"]}>{movie.title}</h2>
                    <span className={styles["year"]}>{convertDateIntoYear(movie.release_date)}</span>
                </div>
                <div className={styles["genre"]}>{movie.genres}</div>
            </div>
            <Dialog
                showModal ={showModal}
                title="Delete MOVIE"
                onClose={() => setShowModal(false)}
            >
                <div>Are you sure you want to delete this movie?</div>
                <Button onClick={() => alert('Confirm')} buttonName={'confirm'.toUpperCase()} classList={["button-pink"]}/>
            </Dialog>
        </>
    )
}

MovieTile.propTypes = {
    movie: PropTypes.shape(
        {
            title: PropTypes.string.isRequired,
            genres: PropTypes.array,
            release_date: PropTypes.string.isRequired,
            poster_path: PropTypes.string.isRequired
        }
    )
}

MovieTile.defaultProps = {
    title: "Mocked title",
    genres: ["Mocked genre"],
    release_date: 2020,
}
export default MovieTile;

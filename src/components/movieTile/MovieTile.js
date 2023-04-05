import React, {useState} from "react";
import PropTypes from "prop-types";
import "./MovieTile.scss";
import {Button, Dialog, MovieForm, PopUp} from "../index";
import convertDateIntoYear from "../../utils";

const MovieTile = ({movie, handleClick}) => {
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    return (
        <>
            <div
                className="movie-card-container"
                onClick={() => handleClick(movie.title)}
                data-testid="movie-card"
            >
                <PopUp movie={movie} onDelete={()=>setShowModal(true)} onEdit={()=>setShowEditModal(true)}/>
                <img src={movie.poster_path} alt={movie.title} />
                <div className="title-container">
                    <h2 className="title">{movie.title}</h2>
                    <span className="year">{convertDateIntoYear(movie.release_date)}</span>
                </div>
                <div className="genre">{movie.genres}</div>
            </div>
            <Dialog
                showModal ={showModal}
                title="Delete MOVIE"
                onClose={() => setShowModal(false)}
            >
                <div>Are you sure you want to delete this movie?</div>
                <Button onClick={() => alert('Confirm')} buttonName={'confirm'.toUpperCase()} buttonClass="button-pink"/>
            </Dialog>
            <MovieForm
                showModal={showEditModal}
                formTitle="edit movie"
                initialMovie={movie}
                onClose={() => setShowEditModal(false)}
            />
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

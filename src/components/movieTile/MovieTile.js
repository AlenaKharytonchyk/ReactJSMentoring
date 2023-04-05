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
                <img src={movie.image} alt={movie.title} />
                <div className="title-container">
                    <h2 className="title">{movie.title}</h2>
                    <span className="year">{convertDateIntoYear(movie.year)}</span>
                </div>
                <div className="genre">{movie.genre}</div>
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

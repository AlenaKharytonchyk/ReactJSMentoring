import React from "react";
import "./MovieForm.scss";
import {Dialog} from "../index";

let formLabels = {
    title: 'title',
    release_date: 'Release date',
    url: 'movie url',
    rating: 'rating',
    genre: 'genre',
    runtime: 'runtime',
    overview: 'overview'
};

const genreOptions = ["all", "comedy", "drama", "detective"];

Object.keys(formLabels).forEach((key) => {
    formLabels[key] = formLabels[key].toUpperCase();
});

const MovieForm = ({formTitle, submitCallback, initialMovie, showModal, onClose}) => {
    const handleReset = () => {
        document.querySelector('form').reset();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = Object.fromEntries(new FormData(event.target));
        submitCallback(formData);
        return false;
    };

    return (
        <Dialog title={formTitle} showModal={showModal} onClose={onClose}>
            <div data-testid="movie-form" className="movie-form-container">
                <form action="" method="post" onSubmit={handleSubmit}>
                    <div className="field-container">
                        <label htmlFor="title">{formLabels.title}</label>
                        <input type="text" id="title" name="movie_name" defaultValue={initialMovie?.title}/>
                    </div>
                    <div className="field-container">
                        <label htmlFor="release_date">{formLabels.release_date}</label>
                        <input type="date" id="release_date" name="release_date" defaultValue={initialMovie?.release_date}/>
                    </div>
                    <div className="field-container">
                        <label htmlFor="url">{formLabels.url}</label>
                        <input type="text" id="url" name="movie_url" defaultValue={initialMovie?.poster_path}></input>
                    </div>
                    <div className="field-container">
                        <label htmlFor="runtime">{formLabels.runtime}</label>
                        <input type="text" id="runtime" name="runtime" defaultValue={initialMovie?.runtime}></input>
                    </div>
                    <div className="field-container">
                        <label htmlFor="genre">{formLabels.genre}</label>
                        <select name="sort" id="sort" data-testid="sorting">
                            {
                                genreOptions.map((option, id) =>( <option data-testid={option} key={id} value={option}>{option.toUpperCase()}</option>))
                            }
                        </select>
                    </div>
                    <div className="field-container full-width">
                        <label htmlFor="overview">{formLabels.overview}:</label>
                        <textarea id="overview" name="overview" defaultValue={initialMovie?.overview}></textarea>
                    </div>
                    <input onReset={handleReset} className="button-transparent button" type="reset" value="RESET"/>
                    <input onSubmit={handleSubmit} data-testid="submit-button" className="button-pink button" type="submit" value="SUBMIT"/>
                </form>
            </div>
        </Dialog>
    )
}

export default MovieForm;

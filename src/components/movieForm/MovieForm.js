import React from "react";
import "./MovieForm.scss";
import {Dialog} from "../index";
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";

let formLabels = {
    title: 'title',
    release_date: 'Release date',
    poster_path: 'movie url',
    vote_average: 'rating',
    genre: 'genre',
    runtime: 'runtime',
    overview: 'overview'
};

const genreOptions = ["all", "comedy", "drama", "detective"];

Object.keys(formLabels).forEach((key) => {
    formLabels[key] = formLabels[key].toUpperCase();
});

const validate = values => {
    const errors = {};
    if (!values.title) {
        errors.title = 'Required';
    } else if (values.title.length > 20) {
        errors.title = 'Must be 15 characters or less';
    }

    if (!values.release_date) {
        errors.release_date = 'Required';
    } else if (!/(20|19)[0-9]{2}-([0-1][0-9]|[0-2][0-9])-([0-2][0-9]|[3][0-1])/.test(values.release_date)) {
        errors.release_date = 'Invalid date';
    }

    if (!values.poster_path) {
        errors.poster_path = 'Required';
    } else if(!/www./gm.test(values.poster_path)) errors.poster_path = 'Invalid format'

    if (!values.vote_average) {
        errors.vote_average = 'Required';
    } else if (typeof(+values.vote_average) !== 'number') errors.vote_average='Add a number';

    if(!values.runtime) {
        errors.runtime = 'Required';
    } else if (typeof(+values.runtime) !== 'number') errors.runtime='Add a number';

    if(!values.overview) errors.overview = 'Required';

    return Object.keys(errors).length === 0 ? null : errors;
};

const MovieForm = ({formTitle, submitCallback, initialMovie, showModal, onClose}) => {
    const navigate = useNavigate();
    const handleReset = () => {
        document.querySelector('form').reset();
    };

    const formik = useFormik({
        initialValues: {
            title: '',
            release_date: '',
            poster_path: '',
            runtime: null,
            overview: '',
            vote_average: null,
        },
        validate,
        onSubmit: async (values) => {
            await fetch('http://localhost:4000/movies', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values, null, 2)
            });
            navigate('/');
        },
    });

    return (
        <Dialog title={formTitle} showModal={showModal} onClose={() => navigate('/')}>
            <div data-testid="movie-form" className="movie-form-container">
                <form onSubmit={formik.handleSubmit}>
                    <div className="field-container">
                        <label htmlFor="title">{formLabels.title}</label>
                        <input type="text" id="title" name="title"
                               onChange={formik.handleChange} onBlur={formik.handleBlur}
                               defaultValue={formik.initialValues.title}/>
                        {formik.errors.title ? <div>{formik.errors.title}</div> : null}
                    </div>
                    <div className="field-container">
                        <label htmlFor="release_date">{formLabels.release_date}</label>
                        <input type="date" id="release_date" name="release_date"
                               onChange={formik.handleChange} onBlur={formik.handleBlur}
                               defaultValue={formik.initialValues.release_date}/>
                        {formik.errors.release_date ? <div>{formik.errors.release_date}</div> : null}
                    </div>
                    <div className="field-container">
                        <label htmlFor="poster_path">{formLabels.poster_path}</label>
                        <input type="text" id="poster_path" name="poster_path"
                               onChange={formik.handleChange} onBlur={formik.handleBlur}
                               defaultValue={formik.initialValues.poster_path}/>
                        {formik.errors.poster_path ? <div>{formik.errors.poster_path}</div> : null}
                    </div>
                    <div className="field-container">
                        <label htmlFor="runtime">{formLabels.runtime}</label>
                        <input type="number" id="runtime" name="runtime" onChange={formik.handleChange} onBlur={formik.handleBlur}
                               defaultValue={formik.initialValues.runtime}/>
                        {formik.errors.runtime ? <div>{formik.errors.runtime}</div> : null}
                    </div>
                    <div className="field-container">
                        <label htmlFor="vote_average">{formLabels.vote_average}</label>
                        <input type="number" id="vote_average" name="vote_average" onChange={formik.handleChange} onBlur={formik.handleBlur}
                               defaultValue={formik.initialValues.vote_average}/>
                        {formik.errors.vote_average ? <div>{formik.errors.vote_average}</div> : null}
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
                        <textarea id="overview" name="overview" onChange={formik.handleChange} onBlur={formik.handleBlur}
                                  defaultValue={formik.initialValues.overview}></textarea>
                        {formik.errors.overview ? <div>{formik.errors.overview}</div> : null}
                    </div>
                    <input onReset={handleReset} className="button-transparent button" type="reset" value="RESET"/>
                    <button data-testid="submit-button" className="button-pink button" type="submit">SUBMIT</button>
                </form>
            </div>
        </Dialog>
    )
}

export default MovieForm;

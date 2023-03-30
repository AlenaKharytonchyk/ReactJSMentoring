import React from 'react';

import {MovieForm} from '../../components';
import {moviesArray} from "../../mockedMovies";

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Example/MovieForm',
    component: MovieForm,
}

const Template = (args) => <MovieForm {...args} />;

export const AddMovie = Template.bind({});
AddMovie.args = {
    showModal: true,
    formTitle: "Add MOVIE",
};

export const EditMovie = Template.bind({});
EditMovie.args = {
    showModal: true,
    formTitle: "edit MOVIE",
    initialMovie: moviesArray[1],
};

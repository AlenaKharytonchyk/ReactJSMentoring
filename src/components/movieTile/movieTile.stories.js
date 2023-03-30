import React from 'react';

import { MovieTile } from '../../components';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Example/MovieTile',
    component: MovieTile,
}

const Template = (args) => <MovieTile {...args} />;

export const Default = Template.bind({});
Default.args = {
    image: "https://picsum.photos/323/486?random=1",
    title: "First film",
    genre: ["drama, comedy"],
    year: "2000",
    id: 1,
};

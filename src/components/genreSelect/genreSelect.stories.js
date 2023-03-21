import React from 'react';

import { GenreSelect } from '../../components';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Example/GenreSelect',
    component: GenreSelect,
}

const Template = (args) => <GenreSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
    genreList: ["all", "comedy", "drama", "detective"],
    onSelect: (genre) => alert(genre),
    selected: 'all'
};

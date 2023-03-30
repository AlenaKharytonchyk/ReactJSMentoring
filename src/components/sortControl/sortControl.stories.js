import React from 'react';

import { SortControl } from '../../components';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Example/SortControl',
    component: SortControl,
}

const Template = (args) => <SortControl {...args} />;

export const Default = Template.bind({});
Default.args = {
    selectedOption: "title",
    options: ["release date", "title"],
    onSelect: (value) => alert(value),
};

import React from 'react';

import { InputField } from '../../components';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Example/SearchForm',
    component: InputField,
}

const Template = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {
    inputValue: 'What do you want to watch?',
    onSearch: (value) => alert(value),
};

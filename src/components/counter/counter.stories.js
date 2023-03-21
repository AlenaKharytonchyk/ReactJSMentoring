import React from 'react';

import { Counter } from '../../components';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Example/Counter',
    component: Counter,
}

const Template = (args) => <Counter {...args} />;

export const Default = Template.bind({});
Default.args = {
    initialValue: 0,
};

export const LargeValue = Template.bind({});
LargeValue.args = {
    initialValue: 10,
    label: 'Counter',
};

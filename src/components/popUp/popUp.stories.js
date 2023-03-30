import React from 'react';

import { PopUp } from '../../components';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Example/PopUp',
    component: PopUp,
}

const Template = (args) => <PopUp {...args} />;

export const Default = Template.bind({});
Default.args = {};

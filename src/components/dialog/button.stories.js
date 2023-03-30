import React from 'react';

import { Dialog } from '../../components';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Example/Dialog',
    component: Dialog,
}

const Template = (args) => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "dialog title",
    description: "long long description",
    buttonName: "button name",
    onClick: (value) => alert(value),
};

import React from 'react';

import {Button, Dialog} from '../../components';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Example/Dialog',
    component: Dialog,
}

const Template = (args) => <Dialog {...args} />;

export const DeleteMovie = Template.bind({});
DeleteMovie.args = {
    showModal: true,
    title: "add MOVIE",
    children: <><div>Are you sure you want to delete this movie?</div>
        <Button onClick={() => alert('Confirm')} buttonName={'confirm'.toUpperCase()} buttonClass="button-pink"/></>
};

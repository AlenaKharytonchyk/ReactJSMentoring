import React from "react";

export default class TitleElement extends React.Component {
    render() {
        return React.createElement('h1', {className: 'title'}, 'Hello first task');
    }
}

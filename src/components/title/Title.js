import React from "react";
import "./Title.scss";

export default class Title extends React.Component {
    constructor({title}) {
        super();
        this.title = title;
    }
    render() {
        return React.createElement('h1', {className: 'title'}, this.title);
    }
}

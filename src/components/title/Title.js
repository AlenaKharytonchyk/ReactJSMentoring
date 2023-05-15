import React from "react";
import styles from  "./Title.module.scss";

export default class Title extends React.Component {
    constructor({title}) {
        super();
        this.title = title;
    }
    render() {
        return React.createElement('h1', {className: styles.title}, this.title);
    }
}

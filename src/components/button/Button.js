import React from "react";
import "./Button.scss";

export default class Button extends React.Component {
    constructor({buttonName, priority, onClick, buttonClass}) {
        super();
        this.buttonName = buttonName;
        this.buttonClass = buttonClass;
        this.priority = priority;
        this.onClick = onClick;
    }

    render() {
        return React.createElement(
            'button',
            {
                className: `button button-${this.buttonName} ${this.buttonClass}`,
                onClick: () => this.onClick(this.priority),
            },
            this.buttonName);
    }
}

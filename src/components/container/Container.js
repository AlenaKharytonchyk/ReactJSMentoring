import React from "react";
import "./Container.scss";

export default class Container extends React.Component {
    constructor({children}) {
        super();
        this.children = children;
    }
    render() {
        return (
            <div className='container'>
                {this.children}
            </div>
        )
    }
}

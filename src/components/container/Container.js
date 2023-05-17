import React from "react";
import styles from  "./Container.module.scss";

export default class Container extends React.Component {
    constructor({children}) {
        super();
        this.children = children;
    }
    render() {
        return (
            <div className= {styles.container}>
                {this.children}
            </div>
        )
    }
}

import React from "react";
import Button from "./Button";
export default class Counter extends React.Component {
    constructor() {
        super();
        this.state={
            initialValue : 0
        }
    }
    counterUpdate (priority) {
        this.setState({initialValue: priority ? this.state.initialValue + 1 : this.state.initialValue - 1 })
    }
    render() {
       return (
           <div>
               <Button
                   buttonName='plus'
                   initialValue={this.state.initialValue}
                   priority={true}
                   onClick={(priority) => this.counterUpdate(priority)}
               />
               { React.createElement('div', {}, this.state.initialValue) }
               <Button
                   buttonName='minus'
                   initialValue={this.state.initialValue}
                   priority={false}
                   onClick={(priority) => this.counterUpdate(priority)}
               />
           </div>

       )
    }
}

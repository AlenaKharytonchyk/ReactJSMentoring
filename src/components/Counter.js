import React from "react";
import Button from "./button/Button";
import Title from "./title/Title";
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
               <Title />
               <Button
                   buttonName='plus'
                   initialValue={this.state.initialValue}
                   priority={true}
                   onClick={(priority) => this.counterUpdate(priority)}
               />
               { React.createElement('div', {style: {color: '#FFF'}}, this.state.initialValue) }
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

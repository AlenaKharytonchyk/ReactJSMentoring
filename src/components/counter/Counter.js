import React from "react";
import { Button, Title } from "../../components";

export default class Counter extends React.Component {
    constructor({initialValue}) {
        super();
        this.state={
            initialValue : initialValue
        }
    }
    counterUpdate (priority) {
        this.setState(({ initialValue }) => {
            return ({
                initialValue: priority ? initialValue + 1 : initialValue - 1
            })
        })
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
               { React.createElement('span', {
                   style: {
                       color: '#FFF',
                       backgroundColor: '#3dcd58',
                       fontWeight: 'bold',
                       padding: '10px'
                   }, 'data-testid': 'value-element'}, this.state.initialValue) }
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

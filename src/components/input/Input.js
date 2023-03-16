import React from "react";
import './Input.scss';
import { Button } from "../../components";

export default class InputField extends React.Component {
    constructor({inputValue, onSearch}) {
        super();
        this.state = {
            inputValue: inputValue,
        }
        this.onSearch = onSearch;
    }

    changeValue(event) {
        this.setState({inputValue: event?.target?.value})
    }

    render() {
        return (
            <>
                {React.createElement(
                    'input',
                    {
                        className: 'input-field',
                        placeholder: 'What do you want to watch',
                        type: "text",
                        onChange: (event) => this.changeValue(event),
                        onKeyPress: ({code}) => {
                            if(code !== 'Enter') return;
                            this.onSearch(this.state.inputValue);
                        },
                        value: this.state.inputValue
                    })}
                <Button
                    buttonName="search"
                    onClick={() => this.onSearch(this.state.inputValue)}
                />
            </>

        )
    }
}

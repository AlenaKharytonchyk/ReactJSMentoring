import React from "react";
import "./SortControl.scss";

const SortControl = ({selectedOption, options, onSelect}) => {
    const handleChange = (e) => {
        onSelect(e.target.value);
    }

    return (
        <div className="sorting-container">
            <label htmlFor="sort">SORT BY</label>

            <select name="sort" id="sort" data-testid="sorting" onChange={handleChange} defaultValue={selectedOption} >
                {
                    options.map(({option, value}, id) =>( <option data-testid={option} key={id} value={value}>{option.toUpperCase()}</option>))
                }
            </select>
        </div>
    )
}
export default SortControl;

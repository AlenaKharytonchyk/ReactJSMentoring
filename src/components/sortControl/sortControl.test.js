import React from "react";
import { SortControl } from "../../components";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


const selectedOption="title";
const receivedValue = "release_date";
const options = [{
    option: "release date",
    value: "release_date",
},{
    option: "title",
    value: "title",
}];

describe("SortControl", () => {
    it("calls 'onSelect' and  pass selected prop when select different option", async () => {
        expect.assertions(1);
        const handleSelect = jest.fn();

        render(<SortControl selectedOption={selectedOption} options={options} onSelect={handleSelect} />)


        await userEvent.selectOptions(screen.queryByTestId("sorting"), screen.queryByTestId(receivedValue));

        expect(handleSelect).toBeCalledWith(receivedValue);
    })

    it("selects default option from props when rendered", () => {
        const handleSelect = jest.fn();

        render(<SortControl selectedOption={selectedOption} options={options} onSelect={handleSelect} />)
        const renderedOption = screen.queryByText(selectedOption.toUpperCase());

        expect(renderedOption.selected).toBeTruthy();
    })
})

import React from "react";
import { InputField } from "../../components";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('SearchForm', () => {
    it("renders input with initial value provided in props", () => {
        const initialValue = "it is test value";
        render(<InputField inputValue={initialValue} />);
        const inputElement = screen.getByRole("textbox");

        expect(inputElement).toHaveAttribute("value", initialValue);
    });

    it("calls 'onChange' callback with expected props after typing to the input and 'click' on the Submit button", async () => {
        expect.assertions(1);

        const initialValue = "it is test value";
        const userInputData = "i changed the value";
        const onSearch = jest.fn();

        render(<InputField inputValue={initialValue} onSearch={onSearch} />);

        const inputElement = screen.getByRole("textbox");
        inputElement.value = "";

        await userEvent.type(inputElement, userInputData);

        await userEvent.click(screen.getByText("search"));

        expect(onSearch).toHaveBeenCalledWith(userInputData);
    })

    it("calls 'onChange' callback with expected props after typing to the input and press 'Enter'", async () => {
        expect.assertions(1);

        const initialValue = "it is test value";
        const userInputData = "i changed the value";
        const onSearch = jest.fn();

        render(<InputField inputValue={initialValue} onSearch={onSearch} />);

        const inputElement = screen.getByRole("textbox");
        inputElement.value = "";

        await userEvent.type(inputElement, userInputData);

        await userEvent.keyboard("[Enter]");

        expect(onSearch).toHaveBeenCalledWith(userInputData);
    })
})

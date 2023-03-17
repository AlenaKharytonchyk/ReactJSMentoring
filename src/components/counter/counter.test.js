import React from "react";
import { Counter } from "../../components";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
    it("renders initial value provided in props", () => {
        render(<Counter initialValue={0} />);
        const initialValue = screen.getByText("0");

        expect(initialValue).toBeInTheDocument();
    });

    it("decrements the displayed value when click on 'minus' button", async () => {
        expect.assertions(1);

        const initialValue = 4
        render(<Counter initialValue={initialValue} />);

        await userEvent.click(screen.getByText("minus"));
        const counterElement = screen.getByTestId("value-element");

        expect(counterElement).toHaveTextContent(initialValue - 1);
    })

    it("increments the displayed value when click on 'plus' button", async () => {
        expect.assertions(1);

        const initialValue = 4
        render(<Counter initialValue={initialValue} />);

        await userEvent.click(screen.getByText("plus"));
        const counterElement = screen.getByTestId("value-element");

        expect(counterElement).toHaveTextContent(initialValue + 1);
    })
});

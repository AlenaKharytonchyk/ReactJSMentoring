import React from "react";
import { PopUp } from "../../components";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("PopUp", () => {
    it("calls 'onClick' and  opens menu after click on a popup", async () => {
        expect.assertions(1);

        render(<PopUp />)

        await userEvent.click(screen.queryByTestId('popup-open'));

        expect(screen.queryByTestId('popup-close')).toBeInTheDocument();
    })

    it("calls 'onClick' and  close menu after click on a close button", async () => {
        expect.assertions(1);

        render(<PopUp />)

        await userEvent.click(screen.queryByTestId('popup-open'));
        await userEvent.click(screen.queryByTestId('popup-close'));

        expect(screen.queryByTestId('popup-open')).toBeInTheDocument();
    })
})

import React from "react";
import {Dialog} from "../../components";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Dialog", () => {
    it("presents on the page", () => {
        render(<Dialog
            showModal={true}
            title="Random title"
            children={<div data-testid="dialog-child-test">This my child prop</div>}
        />)

        expect(screen.queryByTestId('dialog-child-test')).toBeInTheDocument();
    })

    it("calls 'onClick' and  close dialog after click on a close button", async () => {
        expect.assertions(1);

        render(<Dialog
            showModal={true}
            title="Random title"
            children={<div data-testid="dialog-child-test">This my child prop</div>}
        />)

        await userEvent.click(screen.queryByTestId('close-button'));

        expect(screen.queryByTestId('dialog')).not.toBeInTheDocument();
    })
})

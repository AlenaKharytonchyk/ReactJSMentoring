import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from 'react-dom/test-utils';
import {MovieListPage} from "../../components";
import {moviesArray} from "../../mockedMovies";

const userInputData = 'star';
describe("MovieListPage", () => {
    let fetchSpy = null;
    beforeEach(() => {
        fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue({data: moviesArray})
        })
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("search for a films selecting a movie and returning back to search", async () => {
        expect.assertions(5);
        await act(async () => {
           render(<MovieListPage />)
        });

        const inputElement = screen.getByRole("textbox");
        inputElement.value = "";

        await userEvent.type(inputElement, userInputData);
        await userEvent.click(screen.queryByText("search"))
        expect(fetchSpy).toHaveBeenCalledWith(expect.stringMatching(new RegExp(`search=${userInputData}`)), expect.any(Object));
        await act(async () => {
            userEvent.click(screen.queryByText('Star movie'));
        })

        expect(screen.queryByTestId('movie-details')).toBeInTheDocument();
        expect(inputElement).not.toBeInTheDocument();

        await userEvent.click(screen.queryByTestId('details-close'));
        expect(screen.queryByTestId('movie-details')).not.toBeInTheDocument();
        expect(screen.getByRole("textbox")).toBeInTheDocument();
    })
})

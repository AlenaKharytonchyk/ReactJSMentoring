import React from "react";
import {MovieForm} from "../../components";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {moviesArray} from "../../mockedMovies";
import {MemoryRouter} from "react-router-dom";

describe("MovieForm", () => {
    it("renders snapshot", () => {
        expect.assertions(1);

        const onClose = jest.fn();

        render(
            <MemoryRouter>
                <div className="App">
                    <MovieForm
                        formTitle="Form title"
                        showModal={true}
                        onClose={onClose}
                        initialMovie={moviesArray[0]}/>
                </div>
            </MemoryRouter>
        );
        const modalComponent = screen.getByTestId('movie-form');
        expect(modalComponent).toMatchSnapshot();
    })

    it("calls onSubmit callback with movie info when click on Submit button", async () => {
        expect.assertions(1);

        const onSubmit = jest.fn();

        const expected = {
            "movie_name": moviesArray[0].title,
            "movie_url": moviesArray[0].poster_path,
            "overview": moviesArray[0].overview,
            "release_date": moviesArray[0].release_date,
            "runtime": moviesArray[0].runtime.toString(),
            "sort": "all",
        }

        render(
            <MemoryRouter>
                <div className="App"><MovieForm
                    formTitle="Form title"
                    submitCallback={onSubmit}
                    showModal={true}
                    initialMovie={moviesArray[0]}/></div>
            </MemoryRouter>
            );

        await userEvent.click(screen.queryByTestId('submit-button'));

        expect(onSubmit).toHaveBeenCalledWith(expected);
    })
})

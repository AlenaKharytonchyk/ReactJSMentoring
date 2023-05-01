import React from "react";
import {MovieTile} from "../../components";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {moviesArray} from "../../mockedMovies";
import {MemoryRouter} from "react-router-dom";

describe("MovieTile", () => {
    it("presents on the page", () => {
        expect.assertions(1);

        const onClick = jest.fn();

        render(
            <MemoryRouter>
                <MovieTile
                    movie={moviesArray[0]}
                    key={moviesArray[0].id}
                    handleClick={onClick}
                />
            </MemoryRouter>
        )

        expect(screen.queryByTestId('movie-card')).toBeInTheDocument();
    })

    it("calls 'onClick' and  passes movie title in props after click on a card", async () => {
        expect.assertions(1);

        const onClick = jest.fn();

        render(
            <MemoryRouter>
                <MovieTile
                    movie={moviesArray[0]}
                    key={moviesArray[0].id}
                    handleClick={onClick}
                />
            </MemoryRouter>
        )

        await userEvent.click(screen.queryByTestId('movie-card'));

        expect(onClick).toHaveBeenCalledWith(moviesArray[0].title);
    })
})

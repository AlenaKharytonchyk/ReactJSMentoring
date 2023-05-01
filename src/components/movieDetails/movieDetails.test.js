import React from "react";
import {MovieDetails} from "../../components";
import { render } from "@testing-library/react";
import {moviesArray} from "../../mockedMovies";
import {MemoryRouter} from "react-router-dom";

describe("MovieDetails", () => {
    it("renders snapshot", () => {
        const { asFragment } = render(<MemoryRouter><MovieDetails movie={moviesArray[0]}/></MemoryRouter>);

        expect(asFragment()).toMatchSnapshot();
    })
})

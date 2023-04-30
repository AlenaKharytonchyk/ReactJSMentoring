import React from "react";
import {MovieDetails} from "../../components";
import { render } from "@testing-library/react";
import {moviesArray} from "../../mockedMovies";

describe("MovieDetails", () => {
    it("renders snapshot", () => {
        expect.assertions(1);

        const { asFragment } = render(<MovieDetails movie={moviesArray[0]}/>);

        expect(asFragment()).toMatchSnapshot();
    })
})

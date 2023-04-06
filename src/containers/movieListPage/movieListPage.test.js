import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {MovieListPage} from "../../components";

describe("MovieListPage", () => {
    it("search for a films, sorting and switching genres, selecting a movie and returning back to search", () => {
        render(<MovieListPage />);

    })
})

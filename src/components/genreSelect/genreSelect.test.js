import React from "react";
import { GenreSelect } from "../../components";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

let genreList = ["all", "comedy", "drama", "detective"];

describe("GenreSelect", () => {
    it("renders all genres passed in props", () => {
        render(<GenreSelect genreList={genreList} />)

        genreList.forEach((genre) => expect(screen.queryByText(genre.toUpperCase())).toBeInTheDocument());
    })

    it("highlights a selected genre passed in props", () => {
        const initialGenre = "detective";
        genreList.forEach((genre) => genre.toUpperCase());
        render(<GenreSelect genreList={genreList} selected={initialGenre} />)

        expect(screen.queryByText(initialGenre.toUpperCase())).toHaveClass("active");
    })

    it("calls 'onChange' and  passes correct genre in arguments after click on a genre button component", async () => {
        expect.assertions(1);

        const initialGenre = "comedy";
        const selectedGenre = "all";
        const onSelect = jest.fn();
        genreList.forEach((genre) => genre.toUpperCase());
        render(<GenreSelect genreList={genreList} selected={initialGenre} onSelect={onSelect}/>)

        await userEvent.click(screen.queryByText(selectedGenre.toUpperCase()));

        expect(onSelect).toHaveBeenCalledWith(selectedGenre);
    })
})

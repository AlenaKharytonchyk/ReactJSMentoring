import React from "react";
import { GenreSelect } from "../../components";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("GenreSelect", () => {
    it("renders all genres passed in props", () => {
        const genreList = ["all", "comedy", "drama", "detective"];
        render(<GenreSelect genreList={genreList} />)

        genreList.forEach((genre) => expect(screen.getByText(genre.toUpperCase())).toBeInTheDocument());
    })

    it("highlights a selected genre passed in props", () => {
        const initialGenre = "detective";
        let genreList = ["all", "comedy", "drama", "detective"];
        genreList.forEach((genre) => genre.toUpperCase());
        render(<GenreSelect genreList={genreList} selected={initialGenre} />)

        expect(screen.getByText(initialGenre.toUpperCase())).toHaveClass("active");
    })

    it("calls 'onChange' and  passes correct genre in arguments after click on a genre button component", async () => {
        expect.assertions(1);

        const initialGenre = "comedy";
        const selectedGenre = "all";
        let genreList = ["all", "comedy", "drama", "detective"];
        const onSelect = jest.fn();
        genreList.forEach((genre) => genre.toUpperCase());
        render(<GenreSelect genreList={genreList} selected={initialGenre} onSelect={onSelect}/>)

        await userEvent.click(screen.getByText(selectedGenre.toUpperCase()));

        expect(onSelect).toHaveBeenCalledWith(selectedGenre);
    })
})

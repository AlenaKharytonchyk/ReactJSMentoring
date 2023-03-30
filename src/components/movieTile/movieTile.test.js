import React from "react";
import {MovieTile} from "../../components";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const movie = {
    image: "https://picsum.photos/323/486?random=1",
    title: "First film",
    genre: ["drama, comedy"],
    year: "2000",
    id: 1,
}
describe("MovieTile", () => {
    it("presents on the page", () => {
        expect.assertions(1);

        const onClick = jest.fn();

        render(<MovieTile
            title={movie.title}
            image={movie.image}
            year={movie.year}
            genre={movie.genre}
            key={movie.id}
            handleClick={onClick}
        />)

        expect(screen.queryByTestId('movie-card')).toBeInTheDocument();
    })

    it("calls 'onClick' and  passes movie title in props after click on a card", async () => {
        expect.assertions(1);

        const onClick = jest.fn();

        render(<MovieTile
            title={movie.title}
            image={movie.image}
            year={movie.year}
            genre={movie.genre}
            key={movie.id}
            handleClick={onClick}
        />)

        await userEvent.click(screen.queryByTestId('movie-card'));

        expect(onClick).toHaveBeenCalledWith(movie.title);
    })
})

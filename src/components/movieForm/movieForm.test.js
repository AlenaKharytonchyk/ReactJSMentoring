import React from "react";
import {MovieForm} from "../../components";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const movie = {
        image: "https://picsum.photos/323/486?random=1",
        title: "First film",
        description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
        rating: "8,2",
        genre: ["drama, comedy"],
        year: "2000-01-01",
        duration: "1.4",
        id: 1,
}

describe("MovieForm", () => {
    it("renders snapshot", () => {
        expect.assertions(1);

        render(<MovieForm
            formTitle="Form title"
            showModal={true}
            initialMovie={movie}
        />);
        const modalComponent = screen.getByTestId('movie-form');
        expect(modalComponent).toMatchSnapshot();
    })

    it("calls onSubmit callback with movie info when click on Submit button", async () => {
        expect.assertions(1);

        const onSubmit = jest.fn();

        const expected = {
            "movie_name": movie.title,
            "movie_url": movie.image,
            "overview": movie.description,
            "release_date": movie.year,
            "runtime": movie.duration,
            "sort": "all",
        }

        render(<MovieForm
            formTitle="Form title"
            submitCallback={onSubmit}
            showModal={true}
            initialMovie={movie}/>);

        await userEvent.click(screen.queryByTestId('submit-button'));

        expect(onSubmit).toHaveBeenCalledWith(expected);
    })
})

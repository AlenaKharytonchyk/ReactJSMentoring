import React from "react";
import {MovieDetails} from "../../components";
import { render } from "@testing-library/react";

const movie = {
        image: "https://picsum.photos/323/486?random=1",
        title: "First film",
        description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
        rating: "8,2",
        genre: ["drama, comedy"],
        year: "2000",
        duration: "1.4",
        id: 1,
}

describe("MovieDetails", () => {
    it("renders snapshot", () => {
        expect.assertions(1);

        const { asFragment } = render(<MovieDetails movie={movie}/>);

        expect(asFragment()).toMatchSnapshot();
    })
})

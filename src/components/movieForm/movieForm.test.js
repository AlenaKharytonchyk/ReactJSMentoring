import React from "react";
import {MovieForm} from "../../components";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {moviesArray} from "../../mockedMovies";
import {MemoryRouter, Route, Router, Routes} from "react-router-dom";
import {act} from "react-dom/test-utils";
import {createMemoryHistory} from "history";

describe("MovieForm", () => {
    let fetchSpy;
    beforeEach(() => {
      fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({
                json: jest.fn().mockResolvedValue({data: moviesArray[0]})
            })
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

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

        const expected = {
            "movie_name": moviesArray[0].title,
            "movie_url": moviesArray[0].poster_path,
            "overview": moviesArray[0].overview,
            "release_date": moviesArray[0].release_date,
            "runtime": moviesArray[0].runtime.toString(),
            "sort": "all",
        }
        const history = createMemoryHistory();
        await act(async () =>  await render(
            <Router  history={history} location={ history.location } navigator={ { push: history.push } } initialEntries={[`/`]}>
                <Routes>
                    <Route path="/:movieId/edit" element={<MovieForm/>}/>
                </Routes>
                {/*<MovieForm formTitle={'magic'} showModal={true}/>*/}
                {/*<Routes>*/}
                {/*    /!*<Route path={'/'} element={<div></div>}/>*!/*/}
                {/*    <Route path={`/:movieId/edit`} element={<MovieForm*/}
                {/*        formTitle="Form title"*/}
                {/*        showModal={true}/>}/>*/}
                {/*</Routes>*/}
            </Router>
        ))

        expect(screen.queryByTestId('film-title').value).toBe(expected.movie_name);
    })
})

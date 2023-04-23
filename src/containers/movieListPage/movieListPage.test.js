import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from 'react-dom/test-utils';
import {MovieDetails, MovieListPage, SearchForm} from "../../components";
import {moviesArray} from "../../mockedMovies";
import {Router, MemoryRouter, Routes, Route, BrowserRouter} from "react-router-dom";
import {createMemoryHistory} from "history";

const userInputData = 'star';
const sortBy = 'title';
const genreToSelect = 'comedy';

describe("MovieListPage", () => {
    let fetchSpy = null;
    beforeEach(() => {
        fetchSpy = jest.spyOn(global, 'fetch').mockImplementation((url) => {
            if(url.includes('?')) return Promise.resolve({
                json: jest.fn().mockResolvedValue({data: moviesArray})
            })

            return Promise.resolve({
                json: jest.fn().mockResolvedValue(moviesArray[0])
            })
        })
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("search for a films, select a movie and returning back to search", async () => {
        expect.assertions(5);
        await act(async () => {
            render(<MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<MovieListPage />} >
                        <Route path="/" element={<SearchForm/>} />
                        <Route path="/:movieId" element={<MovieDetails/>}/>
                    </Route>
                </Routes>
            </MemoryRouter>)
        });

        const inputElement = screen.getByRole("textbox");
        inputElement.value = "";

        await userEvent.type(inputElement, userInputData);
        await userEvent.click(screen.queryByText("search"))
        expect(fetchSpy).toHaveBeenCalledWith(expect.stringMatching(new RegExp(`search=${userInputData}`)), expect.any(Object));
        await act(async () => {
            userEvent.click(screen.queryByText('Star movie'));
        })

        expect(screen.queryByTestId('movie-details')).toBeInTheDocument();
        expect(inputElement).not.toBeInTheDocument();

        await userEvent.click(screen.queryByTestId('details-close'));
        expect(screen.queryByTestId('movie-details')).not.toBeInTheDocument();
        expect(screen.getByRole("textbox")).toBeInTheDocument();
    });
    it("switches genres when click on genre button", async () => {
        expect.assertions(1);
        await act(async () => {
            render(<MemoryRouter><MovieListPage/></MemoryRouter>)
        });
         await act( async () => {
             await userEvent.click(screen.queryByTestId(`test-${genreToSelect}`));
         })
        expect(fetchSpy).toHaveBeenCalledWith(expect.stringMatching(new RegExp(`filter=${genreToSelect}`)), expect.any(Object));
    });
    it("enable sorting when click on select", async () => {
        expect.assertions(1);
        await act(async () => {
            render(<MemoryRouter><MovieListPage/></MemoryRouter>)
        });
        await act(async () => {
            await userEvent.click(screen.queryByTestId(sortBy));
        })
        expect(fetchSpy).toHaveBeenCalledWith(expect.stringMatching(new RegExp(`searchBy=${sortBy}`)), expect.any(Object));
    });
    it("generates appropriate url params string when searching, sorting and filtering movies", async () => {
        expect.assertions(3);
        const history = createMemoryHistory();
        await act(async () => {
            render(
                <Router history={history} location={ history.location } navigator={ { push: history.push } } initialEntries={['/']}>
                    <Routes>
                        <Route path="/" element={<MovieListPage />} >
                            <Route path="/" element={<SearchForm/>} />
                            <Route path="/:movieId" element={<MovieDetails/>}/>
                        </Route>
                    </Routes>
                </Router>)
        });
        const inputElement = screen.getByRole("textbox");
        inputElement.value = "";

        await userEvent.type(inputElement, userInputData);
        await userEvent.click(screen.queryByText("search"));
        expect(history.location.search).toContain(userInputData);

        await act(async () => {
            await fireEvent.change(screen.queryByTestId('sorting'), { target: { value: `${sortBy}` } })
        });
        expect(history.location.search).toContain(sortBy);

        await act( async () => {
            await userEvent.click(screen.queryByTestId(`test-${genreToSelect}`));
        });
        expect(history.location.search).toContain(genreToSelect)
    })
})

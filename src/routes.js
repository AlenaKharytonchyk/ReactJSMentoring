import {createBrowserRouter} from "react-router-dom";
import {MovieDetails, MovieListPage, SearchForm, MovieForm} from "./components";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MovieListPage />,
        children: [
            {
                path: "/",
                element: <SearchForm />,
                children: [
                    {
                        path: "/new",
                        element: <MovieForm showModal={true} formTitle="Add MOVIE" />
                    },
                    {
                        path: "/:movieId/edit",
                        element: <MovieForm showModal={true} formTitle="Edit Movie" />
                    },
                ]
            },
            {
                path: "/:movieId",
                element: <MovieDetails />,
            },
        ],
    },
]);

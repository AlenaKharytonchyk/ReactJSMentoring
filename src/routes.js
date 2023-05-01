import {createBrowserRouter} from "react-router-dom";
import {MovieDetails, MovieListPage, SearchForm} from "./components";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MovieListPage />,
        children: [
            {
                path: "/",
                element: <SearchForm />
            },
            {
                path: "/:movieId",
                element: <MovieDetails />
            }
        ],
    },
]);

import './App.css';
import {
    MovieDetails,
    MovieForm,
    MovieListPage,
    SearchForm
} from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
                        element: <MovieForm showModal={true} formTitle="Add MOVIE"/>
                    }
                ]
            },
            {
                path: "/:movieId",
                element: <MovieDetails />
            },
        ],
    },
]);

function App() {
  return (
      <div className="App">
          <RouterProvider router={routes} />
      </div>
  );
}

export default App;

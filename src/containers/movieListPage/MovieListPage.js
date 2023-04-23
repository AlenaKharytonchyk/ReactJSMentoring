import React, {useEffect, useState} from "react";
import './MovieListPage.scss';
import {
    Button,
    Container,
    Footer,
    GenreSelect,
    Logo,
    MovieContainer,
    MovieForm,
    SortControl,
} from "../../components";
import {Outlet, useSearchParams} from "react-router-dom";

const options = [{
    option: "release date",
    value: "release_date",
    },{
    option: "title",
    value: "title",
    }];
const genres = ["all", "comedy", "drama", "detective"];

const MovieListPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movieModalVisible, setMovieModalVisible] = useState(false);

    const setSortQuery = (sortQuery) => {
        const currentParams = new URLSearchParams(window.location.search)
        currentParams.set('sortBy', sortQuery);
        setSearchParams(currentParams);
    };

    const setGenreSortQuery = (genreSortQuery) => {
        const currentParams = new URLSearchParams(window.location.search)
        currentParams.set("filter", genreSortQuery === genres[0] ? '' : genreSortQuery)
        setSearchParams(currentParams);
    };

    const searchQuery = searchParams.get('search');
    const sortQuery = searchParams.get('sortBy');
    const genreSortQuery = searchParams.get('filter') ?? genres[0];

    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        let controller, signal;
        const fetchData = async () => {
            if (controller) {
                controller.abort()
            }
            controller = new AbortController();
            signal = controller.signal;

            const response = await fetch(`http://localhost:4000/movies?${searchParams.toString()}&sortOrder=asc&searchBy=title`, {
                signal: signal,
            })
            const { data } = await response.json();
            controller = null;
            setMovieList(data);
        }

        fetchData();
    },[searchParams, searchQuery, genreSortQuery, sortQuery]);

    return (
        <div className={`movie-page-wrapper ${movieModalVisible ? 'modal-open' : ''}`}>
            <div className="header">
                <Logo/>
                <Button buttonName="+ ADD MOVIE" buttonClass="button-grey" onClick={() => setMovieModalVisible(true)} />
                <Outlet/>
            </div>
            <Container>
                <GenreSelect
                    genreList={genres}
                    onSelect={(genre) => setGenreSortQuery(genre)}
                    selected={genreSortQuery}
                />
                <SortControl selectedOption={sortQuery} options={options} onSelect={(option) => setSortQuery(option)} />
            </Container>
            <MovieContainer movieList={movieList} />
            <Footer />
            <MovieForm showModal={movieModalVisible} formTitle="add movie" onClose={() => setMovieModalVisible(false)}/>
        </div>
    )
}

export default MovieListPage;

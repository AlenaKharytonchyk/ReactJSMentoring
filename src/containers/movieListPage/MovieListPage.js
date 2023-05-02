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
import {Outlet, useNavigate, useSearchParams} from "react-router-dom";
import {BASE_URL} from "../../constant";
import {fetchData} from "../../utils";

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
    const navigate = useNavigate();

    useEffect(() => {
        fetchData(`${BASE_URL}/movies?${searchParams.toString()}&sortOrder=asc&searchBy=title`, ({data}) => setMovieList(data))
    },[searchParams, searchQuery, genreSortQuery, sortQuery]);

    return (
        <div className={`movie-page-wrapper ${window.location.pathname === '/new' ? 'modal-open' : ''}`}>
            <div className="header">
                <Logo/>
                <Button buttonName="+ ADD MOVIE" buttonClass="button-grey" onClick={() => navigate(`/new`)} />
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
        </div>
    )
}

export default MovieListPage;

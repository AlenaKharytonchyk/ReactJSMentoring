import React, {useEffect, useState} from "react";
import './MovieListPage.scss';
import {
    Button,
    Container,
    Footer,
    GenreSelect,
    InputField,
    Logo,
    MovieContainer,
    MovieDetails,
    MovieForm,
    SortControl,
    Title
} from "../../components";

const options = [{
    option: "release date",
    value: "release_date",
    },{
    option: "title",
    value: "title",
    }];
const genres = ["all", "comedy", "drama", "detective"];
const searchBy = ["title", "genre"];
const searchQueryInitial = "What do you want to watch?";

const MovieListPage = () => {
    const [searchQuery, setSearchQuery] = useState(searchQueryInitial);
    const [sortQuery, setSortQuery] = useState(options[0].value);
    const [genreSortQuery, setGenreSortQuery] = useState(genres[0]);
    const [movieModalVisible, setMovieModalVisible] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        let controller, signal;
        const fetchData = async () => {
            if (controller) {
                controller.abort()
            }
            controller = new AbortController();
            signal = controller.signal;

            const response = await fetch(`http://localhost:4000/movies?sortBy=${sortQuery}&sortOrder=asc&filter=${genreSortQuery === genres[0] ? '' : genreSortQuery}&search=${searchQuery === searchQueryInitial ? '' : searchQuery }&searchBy=${searchBy[0]}`, {
                signal: signal,
            })
            const { data } = await response.json();
            controller = null;
            setMovieList(data);
        }

        fetchData();
    },[searchQuery, genreSortQuery, sortQuery]);

    return (
        <div className={`movie-page-wrapper ${movieModalVisible ? 'modal-open' : ''}`}>
            <div className="header">
                {
                    selectedMovie
                    ? <MovieDetails movie={selectedMovie} onClose={() => setSelectedMovie(null)}/>
                    : <>
                        <Logo/>
                        <Button buttonName="+ ADD MOVIE" buttonClass="button-grey" onClick={() => setMovieModalVisible(true)} />
                        <Title title="Find your movie" />
                        <InputField
                        inputValue={searchQuery}
                        onSearch={(value) => setSearchQuery(value)}
                        />
                    </>

                }
            </div>
            <Container>
                <GenreSelect
                    genreList={genres}
                    onSelect={(genre) => setGenreSortQuery(genre)}
                    selected={genreSortQuery}
                />
                <SortControl selectedOption={sortQuery} options={options} onSelect={(option) => setSortQuery(option)} />
            </Container>
            <MovieContainer movieList={movieList} onMovieSelect={(movie) => setSelectedMovie(movie)} />
            <Footer />
            <MovieForm showModal={movieModalVisible} formTitle="add movie" onClose={() => setMovieModalVisible(false)}/>
        </div>
    )
}

export default MovieListPage;
